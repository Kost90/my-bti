import { configureStore } from "@reduxjs/toolkit";
import { bookingSlicer } from "./features/booking/BookingSlicer";
import { ordersSlicer } from "./features/orders/OrderSlice";


export const makeStore = configureStore({
  reducer: {
    booking: bookingSlicer.reducer,
    orders:ordersSlicer.reducer,
  },
});

export type RootState = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
