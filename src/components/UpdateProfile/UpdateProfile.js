import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import Profile from "../../assets/profile.jpg";

export default function UpdateProfile() {
  const [profileData, setProfileData] = useState({
    image: "",
    name: "Harsh Pathekar",
    patientId: "721098",
    gender: "Male",
    bloodGroup: "B+ve",
    age: 20,
    contact: "+91 87703 34658",
    email: "pathekarharsh@gmail.com",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileData({ ...profileData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Logic to save updated data to the backend
    console.log("Updated Profile Data:", profileData);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-5 mb-5">
      {/* Profile Image and Header */}
      <div className="flex items-center bg-gray-100 p-4 rounded-lg border border-gray-300">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500">
          <img
            src={Profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <label className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full cursor-pointer">
            <FiEdit className="text-sm" />
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div className="ml-6">
          <h2 className="text-xl font-bold text-gray-800">{profileData.name}</h2>
          <p className="text-sm text-gray-500">Patient ID: {profileData.patientId}</p>
        </div>
      </div>

      {/* Editable Fields */}
      <div className="mt-6 space-y-4">
        {[
          { label: "Name", name: "name", value: profileData.name },
          { label: "Gender", name: "gender", value: profileData.gender },
          { label: "Blood Group", name: "bloodGroup", value: profileData.bloodGroup },
          { label: "Age", name: "age", value: profileData.age },
          { label: "Contact", name: "contact", value: profileData.contact },
          { label: "Email", name: "email", value: profileData.email },
        ].map(({ label, name, value }, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-gray-200 pb-3"
          >
            <label className="text-sm font-semibold text-gray-600 w-1/3">
              {label}:
            </label>
            <input
              type="text"
              name={name}
              value={value}
              onChange={handleInputChange}
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            <button className="ml-4 text-blue-500 text-sm font-medium hover:underline">
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Save Changes Button */}
      <div className="mt-6 text-right">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
