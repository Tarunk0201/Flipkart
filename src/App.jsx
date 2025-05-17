import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login/login";
import Footer from "./Components/footer";
import Cart from "./Components/cart/cart";
import Preview from "./Components/homepage/Filter/Preview";

import { Routes, Route } from "react-router-dom";
import CategoryView from "./Components/homepage/Filter/CategoryView";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
{/*         <Route exact path="/Cart" element={<Cart />} /> */}
        <Route path="/preview/:id" element={<Preview />} />
        <Route path="/category/:category" element={<CategoryView />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
