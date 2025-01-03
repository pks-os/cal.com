import tasker from "@calcom/features/tasker";

import bookingCreated from "./lib/bookingCreated";
import type { BookingListenerCreateInput } from "./types";

class BookingListener {
  static async create(bookingListenerCreateInput: BookingListenerCreateInput) {
    console.log("🚀 ~ BookingListener ~ TRIGGER_PROJECT_ID:", process.env.TRIGGER_PROJECT_ID);
    if (process.env.TRIGGER_PROJECT_ID) {
      await tasker.create("bookingListener-create", { bookingId: booking.id });
      return;
    }

    await bookingCreated(bookingListenerCreateInput);
  }
}

export default BookingListener;
