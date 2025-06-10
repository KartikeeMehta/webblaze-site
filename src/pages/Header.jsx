import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-[1200px] px-4 md:px-8 py-3">
        <div className="w-40 md:w-48">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/webblaze-socttech-logo.svg"
            alt="Blaze Softtech Logo"
            className="w-full h-auto"
          />
        </div>

        <nav className="hidden lg:flex space-x-6 text-gray-800 font-medium">
          <Link to="/">Services</Link>
          <Link to="/">Our Solutions</Link>
          <Link to="/">Digital Marketing</Link>
          <Link to="/">Blockchain</Link>
          <Link to="/">AI</Link>
          <Link to="/">Metaverse</Link>
          <Link to="/">3D Animation</Link>
          <Link to="/">About Us</Link>
        </nav>

        <div className="hidden lg:flex space-x-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200">
            Get in Touch
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200">
            Free SEO Audit
          </button>
        </div>

        <div className="lg:hidden">
          <button className="text-blue-600 font-bold">☰</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
