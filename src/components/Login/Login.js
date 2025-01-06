import React from "react";
import photo from "../../assets/login.jpg";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white px-8 py-16">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-900">Healthify</h1>
        </div>

        {/* Login Heading */}
        <h2 className="text-3xl font-bold mb-4">Login</h2>

        {/* Social Login Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="flex items-center px-4 py-2 border rounded-lg shadow-sm hover:shadow-md">
            <FaGoogle className="text-red-500 mr-2" />
            Login with Google
          </button>
          <button className="flex items-center px-4 py-2 border rounded-lg shadow-sm hover:shadow-md">
            <FaFacebook className="text-blue-600 mr-2" />
            Login with Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-2 text-gray-400">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Login Form */}
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="patientId">
              Patient Id
            </label>
            <input
              type="text"
              id="patientId"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-3 my-5 text-gray-400 cursor-pointer">
              👁️
            </span>
          </div>
          <Link
            to = "/dashboard"
            type="submit"
            className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>
        </form>

        {/* Signup Link */}
        <p className="mt-6 text-gray-600">
          Want to create an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block md:w-1/2">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${photo})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
