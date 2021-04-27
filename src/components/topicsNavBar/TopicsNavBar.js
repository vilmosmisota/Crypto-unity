import React from "react";
import { NavLink } from "react-router-dom";
import "./topicsNavBar.css";

const TopicsNavBar = () => {
  const activeStyleSetUp = {
    border: "1px solid black",
    borderRadius: "15px",
    padding: "0.5rem",
  };

  return (
    <div className="topics-container">
      <NavLink to="/market" activeStyle={activeStyleSetUp}>
        MARKET
      </NavLink>
      <NavLink exact to="/reddit" activeStyle={activeStyleSetUp}>
        SUBREDDITS
      </NavLink>
      <NavLink to="/news" activeStyle={activeStyleSetUp}>
        NEWS
      </NavLink>
    </div>
  );
};

export default TopicsNavBar;
