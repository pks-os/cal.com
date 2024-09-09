import { Prisma } from "@prisma/client";
import type { TrpcSessionUser } from "../../../trpc";
import type { TDuplicateInputSchema } from "./duplicate.schema";
type DuplicateOptions = {
    ctx: {
        user: NonNullable<TrpcSessionUser>;
    };
    input: TDuplicateInputSchema;
};
export declare const duplicateHandler: ({ ctx, input }: DuplicateOptions) => Promise<{
    eventType: {
        length: number;
        id: number;
        userId: number | null;
        title: string;
        description: string | null;
        metadata: Prisma.JsonValue;
        timeZone: string | null;
        slug: string;
        position: number;
        locations: Prisma.JsonValue;
        offsetStart: number;
        hidden: boolean;
        profileId: number | null;
        teamId: number | null;
        eventName: string | null;
        parentId: number | null;
        bookingFields: Prisma.JsonValue;
        periodType: import(".prisma/client").$Enums.PeriodType;
        periodStartDate: Date | null;
        periodEndDate: Date | null;
        periodDays: number | null;
        periodCountCalendarDays: boolean | null;
        lockTimeZoneToggleOnBookingPage: boolean;
        requiresConfirmation: boolean;
        requiresConfirmationWillBlockSlot: boolean;
        requiresBookerEmailVerification: boolean;
        recurringEvent: Prisma.JsonValue;
        disableGuests: boolean;
        hideCalendarNotes: boolean;
        minimumBookingNotice: number;
        beforeEventBuffer: number;
        afterEventBuffer: number;
        seatsPerTimeSlot: number | null;
        onlyShowFirstAvailableSlot: boolean;
        seatsShowAttendees: boolean | null;
        seatsShowAvailabilityCount: boolean | null;
        schedulingType: import(".prisma/client").$Enums.SchedulingType | null;
        scheduleId: number | null;
        price: number;
        currency: string;
        slotInterval: number | null;
        successRedirectUrl: string | null;
        forwardParamsSuccessRedirect: boolean | null;
        bookingLimits: Prisma.JsonValue;
        durationLimits: Prisma.JsonValue;
        isInstantEvent: boolean;
        instantMeetingExpiryTimeOffsetInSeconds: number;
        instantMeetingScheduleId: number | null;
        assignAllTeamMembers: boolean;
        useEventTypeDestinationCalendarEmail: boolean;
        isRRWeightsEnabled: boolean;
        eventTypeColor: Prisma.JsonValue;
        rescheduleWithSameRoundRobinHost: boolean;
        secondaryEmailId: number | null;
    };
}>;
export {};
