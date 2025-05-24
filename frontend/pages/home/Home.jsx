import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Events from "../../components/events/Events";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to event management</h1>
          <button onClick={() => navigate("/create")} className="common-btn">
            Create an event
          </button>
        </div>
      </div>
      <Events />
    </div>
  );
};

export default Home;
