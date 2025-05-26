import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/home/home";
import { useUserData } from "./context/userContext";
import Login from "./pages/auth/login";
import Register from "./pages/auth/Register";
import Account from "./pages/account/Account";

function App() {
  const { isAuth, user } = useUserData();

  return (
    <>
      <Router>
        <Header isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account user={user} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
