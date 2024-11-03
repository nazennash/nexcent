import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image.jpg";

export const Slideshow = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 container mx-auto items-center mt-3">
      <div className="w-full md:w-1/2 flex justify-center order-none md:order-last px-5 md:p-0">
        <img
          src={image}
          alt="image"
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>

      <div className="w-full md:w-1/2 py-0 md:py-5 space-y-7 px-5">
        <p className="font-bold text-3xl md:text-5xl">Lessons and Insights</p>
        <p className="font-bold text-3xl md:text-5xl">from 8 years</p>
        <p className="text-sm md:text-base">
          Where to grow your business as a photographer: site or social media?
        </p>
        <p>
          <Link
            to=""
            className="bg-primary_shade_1 text-white px-4 py-2 rounded"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
