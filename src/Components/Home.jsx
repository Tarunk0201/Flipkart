import React from "react";
// import Preview from "./homepage/Filter/Preview";
import Hero from "./homepage/Hero";
import Bestof from "./homepage/Bestof";
import NewItems from "./homepage/NewItems";
// import Filtered from "./homepage/Filter/Filtered";

export default function Home() {
  return (
    <>
      <Hero />
      <Bestof />
      <NewItems />
      {/* <Preview />
      <Filtered /> */}
    </>
  );
}
