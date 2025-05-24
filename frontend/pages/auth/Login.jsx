import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { btnLoading, login, setIsAuth } = useUserData();

  const navigate = useNavigate();

  const submithandler = async (e) => {
    e.preventDefault();
    await login(email, password, navigate);
    setIsAuth(true);
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <form action="" onSubmit={submithandler}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">password</label>
          <input
            type="text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <button disabled={btnLoading} className="common-btn">
            {btnLoading ? "Please wait..." : "Login"}
          </button>
        </form>
        <p>
          Don't have an account?
          <Link to={"/register"}> Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
