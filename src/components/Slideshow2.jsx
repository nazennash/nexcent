import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/image.jpg";

export const Slideshow2 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 container mx-auto items-center mt-3">
      <div className="w-full md:w-1/2 flex justify-center  px-5 md:p-0">
        <img
          src={image}
          alt="image"
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>

      <div className="w-full md:w-1/2 py-0 md:py-5 space-y-7 px-5">
        <p className="font-bold text-xl md:text-3xl max-w-md">
          The unseen of spending three years at Pixelgrade
        </p>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis
          praesentium et assumenda maxime eius debitis, neque soluta similique.
          Porro natus corporis voluptatum incidunt dignissimos aliquid maxime!
          Ipsa, voluptates voluptate?
        </p>
        <p>
          <Link
            to=""
            className="bg-primary_shade_1 text-white px-4 py-2 rounded"
          >
            Learn More
          </Link>
        </p>
      </div>
    </div>
  );
};
