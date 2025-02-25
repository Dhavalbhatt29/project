import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import About from "./Components/About";
import AdminLogin from "./Components/AdminLogin";
function App() {
  return (
   
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/contact" element={ <Contact/> } />
      <Route path="/about" element={ <About/> } />
      <Route path="/cart" element={ <Cart/> } />
      <Route path="/signup" element={ <Signup/> } />
      <Route path="/login" element={ <Login/> } />
      <Route path="/admin" element={ <AdminLogin/> } />
      </Routes>
    </div>
  );
}

export default App;
