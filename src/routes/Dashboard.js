import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Dashboard/Dashboard";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div>
      <Navbar screenName="Dashboard"/>
      <Main />
      <Footer />
    </div>
  );
};

export default Dashboard;
