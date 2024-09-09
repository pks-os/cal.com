import type { TFunction } from "next-i18next";
import type { z } from "zod";
import type { EventNameObjectType } from "@calcom/core/event";
import type { EventTypeMetaDataSchema } from "@calcom/prisma/zod-utils";
import type { CalendarEvent, Person } from "@calcom/types/Calendar";
import type { MonthlyDigestEmailData } from "./src/templates/MonthlyDigestEmail";
import type { OrganizationAdminNoSlotsEmailInput } from "./src/templates/OrganizationAdminNoSlots";
import type { EmailVerifyLink } from "./templates/account-verify-email";
import type { OrganizationNotification } from "./templates/admin-organization-notification";
import type { EmailVerifyCode } from "./templates/attendee-verify-email";
import type { IBookingRedirect } from "./templates/booking-redirect-notification";
import type { ChangeOfEmailVerifyLink } from "./templates/change-account-email-verify";
import type { Feedback } from "./templates/feedback-email";
import type { PasswordReset } from "./templates/forgot-password-email";
import type { OrganizationCreation } from "./templates/organization-creation-email";
import type { OrganizationEmailVerify } from "./templates/organization-email-verification";
import type { TeamInvite } from "./templates/team-invite-email";
type EventTypeMetadata = z.infer<typeof EventTypeMetaDataSchema>;
export declare const sendScheduledEmails: (calEvent: CalendarEvent, eventNameObject?: EventNameObjectType, hostEmailDisabled?: boolean, attendeeEmailDisabled?: boolean, eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendRoundRobinScheduledEmails: (calEvent: CalendarEvent, members: Person[], eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendRoundRobinRescheduledEmails: (calEvent: CalendarEvent, members: Person[], eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendRoundRobinCancelledEmails: (calEvent: CalendarEvent, members: Person[], eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendRescheduledEmails: (calEvent: CalendarEvent, eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendRescheduledSeatEmail: (calEvent: CalendarEvent, attendee: Person, eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendScheduledSeatsEmails: (calEvent: CalendarEvent, invitee: Person, newSeat: boolean, showAttendees: boolean, hostEmailDisabled?: boolean, attendeeEmailDisabled?: boolean, eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendCancelledSeatEmails: (calEvent: CalendarEvent, cancelledAttendee: Person, eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendOrganizerRequestEmail: (calEvent: CalendarEvent, eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendAttendeeRequestEmail: (calEvent: CalendarEvent, attendee: Person, eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendDeclinedEmails: (calEvent: CalendarEvent, eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendCancelledEmails: (calEvent: CalendarEvent, eventNameObject: Pick<EventNameObjectType, "eventName">, eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendOrganizerRequestReminderEmail: (calEvent: CalendarEvent, eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendAwaitingPaymentEmail: (calEvent: CalendarEvent, eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendOrganizerPaymentRefundFailedEmail: (calEvent: CalendarEvent) => Promise<void>;
export declare const sendPasswordResetEmail: (passwordResetEvent: PasswordReset) => Promise<void>;
export declare const sendTeamInviteEmail: (teamInviteEvent: TeamInvite) => Promise<void>;
export declare const sendOrganizationCreationEmail: (organizationCreationEvent: OrganizationCreation) => Promise<void>;
export declare const sendOrganizationAdminNoSlotsNotification: (orgInviteEvent: OrganizationAdminNoSlotsEmailInput) => Promise<void>;
export declare const sendEmailVerificationLink: (verificationInput: EmailVerifyLink) => Promise<void>;
export declare const sendEmailVerificationCode: (verificationInput: EmailVerifyCode) => Promise<void>;
export declare const sendChangeOfEmailVerificationLink: (verificationInput: ChangeOfEmailVerifyLink) => Promise<void>;
export declare const sendRequestRescheduleEmail: (calEvent: CalendarEvent, metadata: {
    rescheduleLink: string;
}, eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendLocationChangeEmails: (calEvent: CalendarEvent, eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendAddGuestsEmails: (calEvent: CalendarEvent, newGuests: string[]) => Promise<void>;
export declare const sendFeedbackEmail: (feedback: Feedback) => Promise<void>;
export declare const sendBrokenIntegrationEmail: (evt: CalendarEvent, type: "video" | "calendar") => Promise<void>;
export declare const sendDisabledAppEmail: ({ email, appName, appType, t, title, eventTypeId, }: {
    email: string;
    appName: string;
    appType: string[];
    t: TFunction;
    title?: string | undefined;
    eventTypeId?: number | undefined;
}) => Promise<void>;
export declare const sendSlugReplacementEmail: ({ email, name, teamName, t, slug, }: {
    email: string;
    name: string;
    teamName: string | null;
    t: TFunction;
    slug: string;
}) => Promise<void>;
export declare const sendNoShowFeeChargedEmail: (attendee: Person, evt: CalendarEvent, eventTypeMetadata?: EventTypeMetadata) => Promise<void>;
export declare const sendDailyVideoRecordingEmails: (calEvent: CalendarEvent, downloadLink: string) => Promise<void>;
export declare const sendDailyVideoTranscriptEmails: (calEvent: CalendarEvent, transcripts: string[]) => Promise<void>;
export declare const sendOrganizationEmailVerification: (sendOrgInput: OrganizationEmailVerify) => Promise<void>;
export declare const sendMonthlyDigestEmails: (eventData: MonthlyDigestEmailData) => Promise<void>;
export declare const sendAdminOrganizationNotification: (input: OrganizationNotification) => Promise<void>;
export declare const sendBookingRedirectNotification: (bookingRedirect: IBookingRedirect) => Promise<void>;
export {};
//# sourceMappingURL=email-manager.d.ts.map