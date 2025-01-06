import React from "react";
import {
  FaUserEdit,
  FaPhoneAlt,
  FaEnvelope,
  FaBriefcaseMedical,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHealthPotion, GiBodyHeight } from "react-icons/gi";
import { BsHeartPulse } from "react-icons/bs";
import { AiOutlinePercentage } from "react-icons/ai";
import { BiDroplet } from "react-icons/bi";
import ProfileImage from "../../assets/profile.jpg";
import BMI from "../../assets/bmi.png";

const MyProfile = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center">
              <img
                src={ProfileImage}
                alt="Profile"
                className="w-24 h-24 rounded-lg shadow-md"
              />
              <div className="ml-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Harsh Pathekar
                </h2>
                <p className="text-sm text-gray-600">Patient ID: 721098</p>
                <p className="text-sm text-gray-600">
                  Age: 20 | Blood Group: B+ve
                </p>
              </div>
            </div>
            <Link to="/updateprofile" className="mt-6 w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center shadow-md">
              <FaUserEdit className="mr-2" />
              Edit Profile
            </Link>
            <div className="mt-6 space-y-4 text-gray-700">
              <p className="flex items-center">
                <FaUserEdit className="mr-2 text-gray-600" />
                <span className="font-medium">Gender:</span> Male
              </p>
              <p className="flex items-center">
                <FaPhoneAlt className="mr-2 text-gray-600" />
                <span className="font-medium">Contact:</span> +91 87703 34658
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-gray-600" />
                <span className="font-medium">Email:</span>{" "}
                pathekarharsh@gmail.com
              </p>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Appointments
              </h3>
              <ul className="list-disc list-inside mt-1 text-gray-600">
                <li>Cardiologist x6</li>
                <li>Dermatologist x4</li>
                <li>Neurologist x2</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center shadow-md">
              <FaCalendarAlt className="mr-2" />
              Upcoming Appointments
            </button>
            <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg flex items-center justify-center shadow-md">
              <FaBriefcaseMedical className="mr-2" />
              Medical History
            </button>
          </div>
        </div>

        {/* Center Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
          <div className="grid grid-cols-2 gap-6 mb-8">
            {[
              "Total Appointments",
              "Total Monthly Tests",
              "Medication Taken",
              "Risk Factor",
            ].map((title, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-md rounded-lg p-4 text-center"
              >
                <h3 className="text-sm text-gray-500">{title}</h3>
                <p className="text-lg font-bold text-gray-800">
                  {index === 0
                    ? 25
                    : index === 1
                    ? 45
                    : index === 2
                    ? 259
                    : "0.17"}
                </p>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Monthly BMI
            </h3>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <img src={BMI} alt="BMI chart" className="mx-auto" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Health Badges
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>First Appointment Booked</li>
              <li>First Medication Taken</li>
              <li>Frequent Visitor</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-6 mb-8">
            {[
              {
                label: "Stamina",
                value: "90%",
                icon: GiHealthPotion,
                color: "red-500",
                bgColor: "red-100",
              },
              {
                label: "Glucose Level",
                value: "60-80 mg/dl",
                icon: GiBodyHeight,
                color: "purple-500",
                bgColor: "purple-100",
              },
              {
                label: "Heart Rate",
                value: "90 BPM",
                icon: BsHeartPulse,
                color: "blue-500",
                bgColor: "blue-100",
              },
              {
                label: "Blood Pressure",
                value: "120/80 mmHg",
                icon: FaBriefcaseMedical,
                color: "teal-500",
                bgColor: "teal-100",
              },
            ].map(({ label, value, icon: Icon, color, bgColor }, index) => (
              <div
                key={index}
                className={`bg-${bgColor} rounded-lg p-4 text-center shadow-md`}
              >
                <Icon className={`text-${color} text-3xl mx-auto`} />
                <p className="text-sm text-gray-600 mt-2">{label}</p>
                <p className={`text-lg font-bold text-${color}`}>{value}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                label: "General Health",
                value: "78%",
                icon: AiOutlinePercentage,
              },
              { label: "Water Balance", value: "40%", icon: BiDroplet },
            ].map(({ label, value, icon: Icon }, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-md rounded-lg p-6 text-center"
              >
                <Icon className="text-gray-800 text-3xl mx-auto" />
                <p className="text-sm text-gray-600 mt-2">{label}</p>
                <p className="text-lg font-bold text-gray-800">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
