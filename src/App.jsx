import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login/login";
import Footer from "./Components/footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
