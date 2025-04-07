import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    message: '',
    type: '',
  },
  reducers: {
    showToast(state, action) {
      state.message = action.payload.message;
      state.type = action.payload.type;
      console.log(state.message, state.type);
    },
    clearToast(state) {
      state.message = "";
      state.type = "";
    },
  },
});
export const { showToast, clearToast } = toastSlice.actions;
export default toastSlice.reducer;
