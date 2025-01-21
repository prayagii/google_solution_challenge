import React from "react";
import { Link } from "react-router-dom";
import { IoMail, IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 text-white py-8 px-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <img className="h-12" src="/public/Assets/logo.png" alt="NeuroClarity" />
            <p className="text-lg font-semibold">NeuroClarity</p>
          </div>
          <div>
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-l-md text-black"
            />
            <button className="bg-red-600 text-white p-2 rounded-r-md">SUBSCRIBE</button>
            <p className="text-gray-400 text-sm mt-2">
              Subscribe for more updates and notifications from NeuroClarity.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-8 text-sm">
            <Link to="/help" className="hover:underline">Help</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/Reviews" className="hover:underline">Reviews</Link>
            <Link to="/Career" className="hover:underline">Career</Link>
            <Link to="/Success Stories" className="hover:underline">Success Stories</Link>
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
          </div>

          <div className="flex flex-col mt-4 md:mt-0 text-sm">
            <h3 className="font-semibold mb-2">Contact</h3>
            <div className="flex items-center gap-2">
              <IoMail size={20} />
              <span>somemale@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <IoCall size={20} />
              <span>91xxxxxxx</span>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs mt-4">
          © 2025 NeuroClarity. Inc. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
