import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/Slice";
import toastReducer from "./Slice/Toastslice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,

  },
});

export default store;
