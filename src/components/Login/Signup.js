import React from "react";
import photo from "../../assets/signup.jpg";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side - Image */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={photo}
          className="h-full w-full bg-cover bg-center"
          alt="signupimage"
        />
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white px-8 py-16">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-900">Healthify</h1>
        </div>

        {/* Sign Up Heading */}
        <h2 className="text-3xl font-bold mb-4">Sign Up</h2>

        {/* Social Sign Up Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="flex items-center px-4 py-2 border rounded-lg shadow-sm hover:shadow-md">
            <FaGoogle className="text-red-500 mr-2" />
            Sign up with Google
          </button>
          <button className="flex items-center px-4 py-2 border rounded-lg shadow-sm hover:shadow-md">
            <FaFacebook className="text-blue-600 mr-2" />
            Sign up with Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4 w-full max-w-sm">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-2 text-gray-400">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Sign Up Form */}
        <form className="w-full max-w-sm">
          {/* Full Name */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-3 my-4 text-gray-400 cursor-pointer">
              👁️
            </span>
          </div>

          {/* Submit Button */}
          <Link
            to = "/dashboard"
            type="submit"
            className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Create Account
          </Link>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
