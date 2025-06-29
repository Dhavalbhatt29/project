import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store  from './Redux/store';
import ToastProvider from "./Provider/Toastprovider";
import Authprovider from "./Provider/authprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <Router>
    <Authprovider>
    <ToastProvider>
    
    <App />
    
    </ToastProvider>
    </Authprovider>
    </Router>
  </Provider>
);






