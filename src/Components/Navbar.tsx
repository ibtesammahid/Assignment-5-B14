import React from "react";
import logo from "../assets/logo-text.png";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="mt-2 p-2 sticky top-0 z-50 bg-white shadow-2xl w-auto lg:w-full">
      <div className="flex  justify-between items-center lg:px-20 md:px-20 px-10">
        <button className="md:hidden text-2xl text-gray-600"> <MdMenu /> </button>
        <img src={logo} alt="Logo" className="w-32 md:w-32" />
        <ul className="hidden md:flex gap-7 item-center text-[14px] font-semibold">
          <li className="text-[#D91B7E]">Home</li>
          <li className="text-gray-400">Technologies </li>
          <li className="text-gray-400">Projects</li>
          <li className="text-gray-400">About</li>
          <li className="text-gray-400">Contact</li>
        </ul>
        <div className="flex gap-3">
          <button className="rounded-2xl text-[13px] text-gray-500">Sign In</button>
          <button className="btn btn-sm btn-secondary rounded-2xl hover:scale-105">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
