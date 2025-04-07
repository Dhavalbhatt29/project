import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearToast } from "../Redux/Slice/Toastslice";

const ToastProvider = ({ children }) => {
  const toastState = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toastState.message && toastState.type) {
      toast[toastState.type](toastState.message,{
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        draggable: true,
        closeOnClick: true,
        pauseOnHover: true, 
        progress: undefined,
        onClose: () => dispatch(clearToast()),
      });
    }
  }, [toastState, dispatch]);

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default ToastProvider;
