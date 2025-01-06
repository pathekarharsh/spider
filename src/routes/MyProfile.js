import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from "../components/MyProfile/MyProfile";

const MyProfile = () => {
  return (
    <div>
      <Navbar screenName="My Profile" />
      <Profile />
      <Footer />
    </div>
  );
};

export default MyProfile;
