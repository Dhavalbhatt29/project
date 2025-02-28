import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
};

const userSlice = new createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const login = (formData, navigate) => async () => {
  try {
    const res = await axios.post("http://localhost:5000/api/login", formData);

    if (res.data.status) {
      localStorage.setItem("token", res.data.data.token);
      navigate("/admin/dashboard");
      console.log(res.data.data.token);
    }
  } catch (error) {
    console.error("Login Error:", error);
  }
};

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
