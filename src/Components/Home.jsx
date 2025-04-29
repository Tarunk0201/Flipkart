import React from "react";
import Hero from "./homepage/Hero";
import Bestof from "./homepage/Bestof";

import NewItems from "./homepage/NewItems";

export default function Home() {
  return (
    <>
      <Hero />
      <Bestof />
      <NewItems />
    </>
  );
}
