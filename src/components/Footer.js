import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#001D6D] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p className="flex items-center space-x-2">
            <FaLocationDot className="text-white-400" />
            <span>NIT, Thuvakudi, Tiruchirappalli, Tamil Nadu - 440027</span>
          </p>
          <p className="flex items-center space-x-2">
            <FaPhoneAlt className="text-white-400" />
            <span>+91 82897 53214</span>
          </p>
          <p className="flex items-center space-x-2">
            <IoIosMail className="text-white-400" />
            <a
              href="mailto:contact@healthify.com"
              className="underline hover:text-white-400"
            >
              contact@healthify.com
            </a>
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-300 hover:text-white-400 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white-400 transition"
            >
              <FaInstagramSquare size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white-400 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="text-center space-y-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white text-[#001D6D] p-3 rounded-full shadow-lg hover:bg-gray-200 transition-transform"
            aria-label="Go to Top"
          >
            <FaArrowCircleUp size={30} />
          </button>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">
              Home
            </a>
            <a href="#" className="block hover:underline">
              About
            </a>
            <a href="#" className="block hover:underline">
              Contact
            </a>
            <a href="#" className="block hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4 text-center md:text-right">
          <div className="flex items-center justify-center md:justify-end space-x-2">
            <MdHealthAndSafety size={24} className="text-white-400" />
            <h3 className="text-lg font-bold">Healthify</h3>
          </div>
          <p>Your ultimate health solution</p>
          <h4 className="font-semibold">Join Our Newsletter</h4>
          <p className="text-sm">
            Be the first to know about our latest updates, exclusive offers, and
            more.
          </p>
          <form className="flex items-center justify-center md:justify-end">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md border-none focus:ring-2 focus:ring-white-400 text-gray-700"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white text-[#001D6D] border border-[#001D6D] rounded-r-md hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
        <p>
          © 2025 <span className="font-semibold">Healthify</span>. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
