import React from "react";
import "./account.css";
import { useUserData } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { GrEdit } from "react-icons/gr";

const Account = ({ user }) => {
  const { setUser, setIsAuth } = useUserData();
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    setIsAuth(false);
    setUser([]);
    navigate("/login");
  };
  return (
    <div>
      {user && (
        <div className="account">
          <h2>My Profile</h2>
          <div className="profile-info">
            <p>
              <strong>Name: {user.name}</strong>
            </p>
            <p>
              <strong>Email: {user.email}</strong>
            </p>
            <p>
              <strong>Role: {user.role}</strong>
            </p>
            <button className="common-btn">
              <GrEdit /> Edit profile
            </button>
            <br />
            <button
              onClick={logoutHandler}
              className="common-btn"
              style={{ background: "red" }}
            >
              <IoIosLogOut /> LogOut
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
