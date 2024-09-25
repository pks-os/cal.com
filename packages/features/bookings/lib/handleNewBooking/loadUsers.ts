import { Prisma } from "@prisma/client";
import type { IncomingMessage } from "http";

import { orgDomainConfig } from "@calcom/features/ee/organizations/lib/orgDomains";
import { HttpError } from "@calcom/lib/http-error";
import logger from "@calcom/lib/logger";
import { UserRepository } from "@calcom/lib/server/repository/user";
import prisma, { userSelect } from "@calcom/prisma";
import { credentialForCalendarServiceSelect } from "@calcom/prisma/selects/credential";

import type { NewBookingEventType } from "./types";

const log = logger.getSubLogger({ prefix: ["[loadUsers]:handleNewBooking "] });

type EventType = Pick<NewBookingEventType, "hosts" | "users" | "id">;

export const loadUsers = async (eventType: EventType, dynamicUserList: string[], req: IncomingMessage, teamMemberIds: number[] | undefined | null) => {
  try {
    const { currentOrgDomain } = orgDomainConfig(req);

    if (teamMemberIds) {
      return await loadUsersByTeamMemberIds(teamMemberIds);
    }
    return eventType.id
      ? await loadUsersByEventType(eventType)
      : await loadDynamicUsers(dynamicUserList, currentOrgDomain);
  } catch (error) {
    if (error instanceof HttpError || error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new HttpError({ statusCode: 400, message: error.message });
    }
    throw new HttpError({ statusCode: 500, message: "Unable to load users" });
  }
};

const loadUsersByTeamMemberIds = async (teamMemberIds: number[]): Promise<NewBookingEventType["users"]> => {
  log.debug("called", { teamMemberIds });
  const users = await prisma.user.findMany({
    where: {
      id: {
        in: teamMemberIds,
      },
    },
    select: {
      ...userSelect.select,
      credentials: {
        select: credentialForCalendarServiceSelect,
      },
      metadata: true,
    },
  });
  
  // FIXME: It could be better instead to not let such an event be booked in the first place. Routing form can send the user to some other page
  if(!users.length) {
    throw new HttpError({
      message: "There is no team member to book this event",
      statusCode: 400,
    });
  }
  return users;
};

const loadUsersByEventType = async (eventType: EventType): Promise<NewBookingEventType["users"]> => {
  const hosts = eventType.hosts || [];
  const users = hosts.map(({ user, isFixed, priority, weight, weightAdjustment }) => ({
    ...user,
    isFixed,
    priority,
    weight,
    weightAdjustment,
  }));
  return users.length ? users : eventType.users;
};

const loadDynamicUsers = async (dynamicUserList: string[], currentOrgDomain: string | null) => {
  if (!Array.isArray(dynamicUserList) || dynamicUserList.length === 0) {
    throw new Error("dynamicUserList is not properly defined or empty.");
  }
  return findUsersByUsername({
    usernameList: dynamicUserList,
    orgSlug: !!currentOrgDomain ? currentOrgDomain : null,
  });
};

/**
 * This method is mostly same as the one in UserRepository but it includes a lot more relations which are specific requirement here
 * TODO: Figure out how to keep it in UserRepository and use it here
 */
export const findUsersByUsername = async ({
  usernameList,
  orgSlug,
}: {
  orgSlug: string | null;
  usernameList: string[];
}) => {
  log.debug("findUsersByUsername", { usernameList, orgSlug });
  const { where, profiles } = await UserRepository._getWhereClauseForFindingUsersByUsername({
    orgSlug,
    usernameList,
  });
  return (
    await prisma.user.findMany({
      where,
      select: {
        ...userSelect.select,
        credentials: {
          select: credentialForCalendarServiceSelect,
        },
        metadata: true,
      },
    })
  ).map((user) => {
    const profile = profiles?.find((profile) => profile.user.id === user.id) ?? null;
    return {
      ...user,
      organizationId: profile?.organizationId ?? null,
      profile,
    };
  });
};

export type AwaitedLoadUsers = Awaited<ReturnType<typeof loadUsers>>;
