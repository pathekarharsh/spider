import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import MyProfile from "./routes/MyProfile";
import UpdateProfile from "./routes/UpdateProfile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
      </Routes>
    </>
  );
}

export default App;
