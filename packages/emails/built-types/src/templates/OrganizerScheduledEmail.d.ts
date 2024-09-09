/// <reference types="react" />
import type { CalendarEvent, Person } from "@calcom/types/Calendar";
import { BaseScheduledEmail } from "./BaseScheduledEmail";
export declare const OrganizerScheduledEmail: (props: {
    calEvent: CalendarEvent;
    attendee: Person;
    newSeat?: boolean | undefined;
    attendeeCancelled?: boolean | undefined;
    teamMember?: Person | undefined;
} & Partial<{
    calEvent: CalendarEvent;
    attendee: Person;
    timeZone: string;
    includeAppsStatus?: boolean | undefined;
    t: import("next-i18next").TFunction;
    locale: string;
    timeFormat: import("@calcom/lib/timeFormat").TimeFormat | undefined;
    isOrganizer?: boolean | undefined;
} & Partial<{
    children: import("react").ReactNode;
    callToAction?: import("react").ReactNode;
    subject: string;
    title?: string | undefined;
    subtitle?: import("react").ReactNode;
    headerType?: import("../components/EmailSchedulingBodyHeader").BodyHeadType | undefined;
    hideLogo?: boolean | undefined;
}>>) => JSX.Element;
//# sourceMappingURL=OrganizerScheduledEmail.d.ts.map