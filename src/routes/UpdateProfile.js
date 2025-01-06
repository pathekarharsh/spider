import React from "react";
import Update from "../components/UpdateProfile/UpdateProfile";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const UpdateProfile = () => {
  return (
    <div>
      <Navbar screenName="Update Profile"/>
      <Update />
      <Footer />
    </div>
  );
};

export default UpdateProfile;
