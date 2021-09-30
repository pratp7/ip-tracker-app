import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  user: localStorage.getItem("user_id"),
};

const sawoAuthSlice = createSlice({
  name: "sawoAuthentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      localStorage.setItem("user_id", state.user);
    },
    logout(state) {
      localStorage.removeItem("user_id");
      state.user = "";
    },
  },
});

export const sawoActions = sawoAuthSlice.actions;
export default sawoAuthSlice.reducer;
