import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  auth: false,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.auth = true;
      state.user = { ...action.payload };
    },
    clearUser: (state) => {
      state.auth = false;
      state.user = {};
    },
  },
});

export const Authverify = (token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };

    const res = await axios.post("http://localhost:5000/api/authverify",
       {}, config);

    if (res.data.status) {
      dispatch(setUser(res.data.data.data));
    } else {
      localStorage.removeItem("token");
      dispatch(clearUser());
    }
  } catch (error) {
    console.error("Authverify failed:", error);
    localStorage.removeItem("token");
    dispatch(clearUser());
  }
};

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
