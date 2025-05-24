import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isAuth }) => {
  const navigate = useNavigate();
  return (
    <header>
      <div
        style={{ cursor: "pointer" }}
        className="logo"
        onClick={() => navigate("/")}
      >
        Event Manager
      </div>

      <div className="link">
        <Link to={"/"}>Home</Link>
        <Link to={"/events"}>Events</Link>
        <Link to={"/attendees"}>Attendees</Link>
        {isAuth ? (
          <Link to={"/create"}>Create Event</Link>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
