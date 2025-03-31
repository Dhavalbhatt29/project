import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: 'toast',
  intitialState: {
    message: '',
    type: '',
  },
  reducer: {
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
