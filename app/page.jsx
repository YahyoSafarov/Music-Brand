import React from "react";
import Events from "./components/events/Events";
import Hero from "./components/Hero";
import Palyer from "./components/Palyer";
import Albums from "./components/albums/Albums";
import Blog from "./components/blog/Blog";

const page = () => {
  return (
    <div>
      <Hero />
      <Palyer />
      <Events />
      <Albums />
      <Blog />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
};

export default page;
