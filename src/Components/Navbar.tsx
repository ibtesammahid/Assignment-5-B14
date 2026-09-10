import React from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="mt-2  p-2 sticky top-0 z-50 bg-white shadow-2xl">
      <div className="container mx-auto flex  justify-between items-center">
        <img src={logo} alt="Logo" />
        <ul className="flex gap-7 item-center">
          <li className="text-[#D91B7E]">Home</li>
          <li>Technologies </li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-3">
          <button className="rounded-2xl ">Sign In</button>
          <button className="btn btn-sm btn-secondary rounded-2xl hover:scale-105">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
