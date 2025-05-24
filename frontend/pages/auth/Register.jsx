import React, { useState } from "react";
import "./login.css";
import { useUserData } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { btnLoading, registerUser, setIsAuth } = useUserData();
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleRole = (e) => {
    setRole(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    registerUser(name, email, password, role, navigate);
    setIsAuth(true);
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Register</h2>
        <form action="" onSubmit={submitHandler}>
          <label htmlFor="text">Name</label>
          <input
            type="text"
            required
            value={name}
            placeholder="Enter your email"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="role">
            <label>Select your role</label>
            <label>Attendee</label>
            <input
              type="radio"
              name="role"
              value="attendee"
              checked={role === "attendee"}
              onChange={handleRole}
              style={{
                accentColor: "violet",
                width: "16px",
                height: "16px",
                cursor: "pointer",
              }}
            />

            <label>Organizer</label>
            <input
              type="radio"
              name="role"
              value="organizer"
              checked={role === "organizer"}
              onChange={handleRole}
              style={{
                accentColor: "violet",
                width: "16px",
                height: "16px",
                cursor: "pointer",
              }}
            />
          </div>

          <button disabled={btnLoading} className="common-btn">
            {btnLoading ? "Please wait.." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
