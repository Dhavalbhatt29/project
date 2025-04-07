import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,  
  auth:false,  
};

const userSlice = new createSlice({
  name: "auth",
  initialState:{
    user: {},
    auth: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.auth = true;
      state.user = {...action.payload};
      console.log(state.auth)
    },
    clearUser: (state) => {
      state.user = {};
      state.auth = false;
    },
  },
});

// export const login = (formData, navigate) => async (dispatch) => {
//   try {
//     const res = await axios.post("http://localhost:5000/api/login", formData);

//     if (res.data.status) {
//       localStorage.setItem("token", res.data.data.token);
//       navigate("/admin");
//       // console.log(res.data.data.token);
//     }
//   } catch (error) {
//     console.error("Login Error:", error);
//   }
// };

export const Authverify = (token) => async(dispatch) => {
  
 
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try{
    const res = await axios.post("http://localhost:5000/api/authverify", config);
    if(res.data.status){
      dispatch(setUser(res.data.data.data));

    }
    else{
      localStorage.removeItem("token");
      dispatch(clearUser());
      
    }
  }
  catch(error){
    console.log(error);

  }
}

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
