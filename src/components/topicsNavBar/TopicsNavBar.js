import React from "react";
import { Link } from "react-router-dom";
import "./topicsNavBar.css";

const TopicsNavBar = () => {
  return (
    <div className="topics-container">
      <Link to="/market">MARKET</Link>
      <Link to="#">SUBREDDITS</Link>
      <Link to="#">NEWS</Link>
    </div>
  );
};

export default TopicsNavBar;
