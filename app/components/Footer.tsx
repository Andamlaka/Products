import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 mb-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-4">
          <FaFacebook className="text-2xl hover:text-blue-500 cursor-pointer" />
          <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer" />
          <FaLinkedin className="text-2xl hover:text-blue-700 cursor-pointer" />
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} My E-Commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
