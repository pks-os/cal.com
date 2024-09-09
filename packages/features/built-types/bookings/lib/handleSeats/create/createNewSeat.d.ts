import type { SeatedBooking, NewSeatedBookingObject } from "../types";
declare const createNewSeat: (rescheduleSeatedBookingObject: NewSeatedBookingObject, seatedBooking: SeatedBooking) => Promise<Partial<{
    user: {
        name: string | null;
        email: string;
        timeZone: string;
        username: string | null;
    } | null;
    payment: {
        data: import(".prisma/client").Prisma.JsonValue;
        id: number;
        currency: string;
        bookingId: number;
        success: boolean;
        uid: string;
        appId: string | null;
        externalId: string;
        amount: number;
        fee: number;
        refunded: boolean;
        paymentOption: import(".prisma/client").$Enums.PaymentOption | null;
    }[];
    references: {
        type: string;
        id: number;
        credentialId: number | null;
        bookingId: number | null;
        uid: string;
        thirdPartyRecurringEventId: string | null;
        deleted: boolean | null;
        meetingId: string | null;
        meetingPassword: string | null;
        meetingUrl: string | null;
        externalCalendarId: string | null;
    }[];
    attendees: {
        id: number;
        name: string;
        email: string;
        timeZone: string;
        bookingId: number | null;
        locale: string | null;
        noShow: boolean | null;
    }[];
} & {
    title: string;
    metadata: import(".prisma/client").Prisma.JsonValue;
    id: number;
    location: string | null;
    status: import(".prisma/client").$Enums.BookingStatus;
    description: string | null;
    userId: number | null;
    customInputs: import(".prisma/client").Prisma.JsonValue;
    smsReminderNumber: string | null;
    eventTypeId: number | null;
    recurringEventId: string | null;
    rescheduledBy: string | null;
    uid: string;
    cancellationReason: string | null;
    cancelledBy: string | null;
    iCalUID: string | null;
    responses: import(".prisma/client").Prisma.JsonValue;
    idempotencyKey: string | null;
    userPrimaryEmail: string | null;
    startTime: Date;
    endTime: Date;
    createdAt: Date;
    updatedAt: Date | null;
    paid: boolean;
    destinationCalendarId: number | null;
    rejectionReason: string | null;
    dynamicEventSlugRef: string | null;
    dynamicGroupSlugRef: string | null;
    rescheduled: boolean | null;
    fromReschedule: string | null;
    scheduledJobs: string[];
    isRecorded: boolean;
    iCalSequence: number;
    rating: number | null;
    ratingFeedback: string | null;
    noShowHost: boolean | null;
}> & {
    appsStatus?: import("@calcom/platform-libraries").AppsStatus[] | undefined;
    seatReferenceUid?: string | undefined;
    paymentUid?: string | undefined;
    message?: string | undefined;
    paymentId?: number | undefined;
}>;
export default createNewSeat;
//# sourceMappingURL=createNewSeat.d.ts.map