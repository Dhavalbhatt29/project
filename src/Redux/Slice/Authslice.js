import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.auth = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.auth = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
