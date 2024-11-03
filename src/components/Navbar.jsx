import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between py-5 px-6 gap-0 sm:items-center md:px-5 lg:px-0 lg:container lg:mx-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-0 ">
          <div className="sm:text-left font-bold text-2xl">Nexcent</div>
          <div className="space-x-6 sm:hidden">
            <Link to="">Login</Link>
            <Link to="">Sign up</Link>
          </div>
        </div>
        <div className="space-x-7 sm:space-x-3 md:space-x-10 text-center md:text-left">
          <Link to="/">Home</Link>
          <Link to="">Service</Link>
          <Link to="">Feature</Link>
          <Link to="">Product</Link>
          <Link to="">Testimonial</Link>
          <Link to="">FAQ</Link>
        </div>
        <div className="space-x-6 hidden sm:block">
          <Link to="">Login</Link>
          <Link
            to=""
            className="bg-primary_shade_1 text-white px-4 py-2 rounded"
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};
