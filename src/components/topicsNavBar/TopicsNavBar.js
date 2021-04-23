import React from "react";
import { Link } from "react-router-dom";
import "./topicsNavBar.css";

const TopicsNavBar = () => {
  return (
    <div className="topics-container">
      <Link to="/market">MARKET</Link>
      <Link to="/subreddits">SUBREDDITS</Link>
      <Link to="/news">NEWS</Link>
    </div>
  );
};

export default TopicsNavBar;
