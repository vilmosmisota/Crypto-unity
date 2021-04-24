import React from "react";
import { NavLink } from "react-router-dom";
import "./topicsNavBar.css";

const TopicsNavBar = () => {
  return (
    <div className="topics-container">
      <NavLink to="/market">MARKET</NavLink>
      <NavLink to="/subreddits">SUBREDDITS</NavLink>
      <NavLink to="/news">NEWS</NavLink>
    </div>
  );
};

export default TopicsNavBar;
