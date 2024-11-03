import React from "react";
import { Navbar } from "../components/Navbar";
import { Slideshow } from "../components/Slideshow";
import { Clients } from "../components/Clients";
import { Slideshow2 } from "../components/Slideshow2";

export const Home = () => {
  return (
    <div className="bg-silver">
      <Navbar />
      <Slideshow />
      <Clients />
      <Slideshow2 />
      <div className="h-20"></div>
    </div>
  );
};
