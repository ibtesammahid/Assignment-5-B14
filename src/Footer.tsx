import React from "react";
import logo from "./assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 ">
      <div className="max-w-7xl mx-auto py-10 sm:px-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  pt-5">
          <div className="w-90">
            <img src={logo} alt="logo" />
            <p className="text-gray-400 text-[14px] mt-2">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div >
              <ul className="flex gap-5 mt-5 text-[14px] font-semibold">
                <li>Github</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>

          <div className="px-55 hidden sm:block">
            <h2 className="font-bold">Product</h2>

            <ul className="text-gray-400 text-[14px] mt-2">
              <li>Home</li>
              <li>Technologies</li>
              <li>Projects</li>
            </ul>
          </div>

          <div className="px-40 hidden sm:block">
            <h2 className="font-bold">Company</h2>

            <ul className="text-gray-400 text-[14px] mt-2">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="px-18 hidden sm:block">
            <h2 className="font-bold">Legal</h2>

            <ul className="text-gray-400 text-[14px] mt-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

         <div className="divider"></div>

        <div className="flex justify-between items-center w-auto">
            
          <p className="text-gray-400 text-[14px]">
            &copy; 2023 Your Company. All rights reserved.
          </p>
          <ul className="flex gap-5 *:text-gray-400 text-[14px]">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
