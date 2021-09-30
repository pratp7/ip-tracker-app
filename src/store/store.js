import { configureStore } from "@reduxjs/toolkit";
import sawoAuthSlice from "./sawoAuth-slice";
import ipSlice from "./ipSlice";
export const store = configureStore({
  reducer: {
    sawoAuth: sawoAuthSlice,
    ipify: ipSlice,
  },
});

export default store;
