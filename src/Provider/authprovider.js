import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Authverify } from "../Redux/Slice/Slice";
import { setUser, clearUser } from "../Redux/Slice/Slice";
import axios from "axios";

const Authprovider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getverify() {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          authorization: `${token}`,
        },
      };
      try {
        const res = await axios.post(
          "http://localhost:5000/api/authverify",{},
          config
        );
        if (res.data.status) {
          dispatch(setUser(res.data.data.data));
        } else {
          localStorage.removeItem("token");
          dispatch(clearUser());
        }
      } catch (error) {
        console.log(error);
      }
    }

    getverify();
  }, []);

  return <>{children}</>;
};

export default Authprovider;
