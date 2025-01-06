import React from "react";
import { Link } from "react-router-dom";
import mainCover from "../../assets/mainCover.jpg"; // Cover image
import { MdHealthAndSafety } from "react-icons/md";
import { FaBookMedical, FaBell, FaHeart, FaChartLine } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <MdHealthAndSafety className="w-8 h-8" />
          <h1 className="ml-2 text-xl font-semibold text-[#001D6D]">
            Healthify
          </h1>
        </div>
        <ul className="hidden md:flex space-x-8 text-[#001D6D]">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Features</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
        <div className="flex space-x-4">
          <Link to ="/login" className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
            Login
          </Link>
          <Link to ="/signup" className="py-2 px-4 border-2 border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center text-left py-16 px-8"
        style={{ backgroundImage: `url(${mainCover})`, height: "600px" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-6xl mx-auto flex items-center h-full">
          <div className="w-full md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Welcome to Healthify
            </h1>
            <p className="text-gray-200 mt-4">
              Healthify empowers patients to seamlessly track medical history,
              manage appointments, and receive timely medication reminders, all
              in an accessible and user-friendly platform designed for everyone,
              including elderly users.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link to = "/login" className="py-2 px-6 bg-blue-600 text-white rounded hover:bg-blue-700">
                Login
              </Link>
              <Link to = "/signup" className="py-2 px-6 border-2 border-white text-white rounded hover:bg-blue-600 hover:border-blue-600">
                Sign Up
              </Link>
            </div>
          </div>
          {/* Optional: If you want the image to only take the remaining space */}
          <div className="hidden md:block md:w-1/2"></div>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#001D6D]">About us</h2>
            <p className="text-gray-600 mt-4">
              At Healthify, we believe that managing your health should be
              simple, empowering, and stress-free. Our innovative HealthTech
              dashboard is designed to help patients take control of their
              healthcare journey by providing a centralized platform for
              tracking medical history, scheduling appointments, and receiving
              medication reminders.
            </p>
            <Link className="mt-6 py-2 px-6 bg-blue-600 text-white rounded hover:bg-blue-700">
              Learn More
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-[#F9FAFB] shadow-lg rounded-lg text-center">
              <h3 className="text-2xl font-bold text-[#001D6D]">1000+</h3>
              <p className="text-gray-600">Members</p>
            </div>
            <div className="p-6 bg-[#F9FAFB] shadow-lg rounded-lg text-center">
              <h3 className="text-2xl font-bold text-[#001D6D]">10k+</h3>
              <p className="text-gray-600">Appointments</p>
            </div>
            <div className="p-6 bg-[#F9FAFB] shadow-lg rounded-lg text-center">
              <h3 className="text-2xl font-bold text-[#001D6D]">2000+</h3>
              <p className="text-gray-600">Monthly Tests</p>
            </div>
            <div className="p-6 bg-[#F9FAFB] shadow-lg rounded-lg text-center">
              <h3 className="text-2xl font-bold text-[#001D6D]">100+</h3>
              <p className="text-gray-600">Hospitals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="bg-[#F9FAFB] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#001D6D]">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <FaBookMedical className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-[#001D6D]">
                Book Appointments
              </h3>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <FaBell className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-[#001D6D]">
                Add Reminders
              </h3>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <FaHeart className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-[#001D6D]">
                Monthly Health Test
              </h3>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <FaChartLine className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-[#001D6D]">
                Track Your Health
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
