import React from "react";
import { Route, Routes } from "react-router-dom";
import Endlayout from "../Layout/endlayout";
import Home from "../Components/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Cart from "../Components/Cart";
import Signup from "../Components/Signup";

function Endroutes() {
  return (
    <Routes>
      <Route path="/" element={<Endlayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/signup" element={<Signup/>} />
    
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default Endroutes;
