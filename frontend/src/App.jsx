import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../components/header";
import Home from "../pages/home/home";
import { useUserData } from "../context/userContext";
import Login from "../pages/auth/login";
import Register from "../pages/auth/Register";

function App() {
  const { isAuth } = useUserData();

  return (
    <>
      <Router>
        <Header isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
