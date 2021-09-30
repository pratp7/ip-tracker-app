import { createSlice } from "@reduxjs/toolkit";

const initialIpState = {
  ipDetails: {},
  ipError: "",
};

const ipSlice = createSlice({
  name: "ipify",
  initialState: initialIpState,
  reducers: {
    detailsIP(state, action) {
      state.ipDetails = action.payload;
    },
    errorHandle(state, action) {
      state.ipError = action.payload;
    },
  },
});
export const ipActions = ipSlice.actions;
export default ipSlice.reducer;
