import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Bestof from "./Components/Bestof";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bestof />
      <Footer />
    </>
  );
}

export default App;
