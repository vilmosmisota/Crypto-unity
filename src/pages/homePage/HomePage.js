import React from "react";
import TopicsNavBar from "../../components/topicsNavBar/TopicsNavBar";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <TopicsNavBar />
      <div className="home-page-msg-container">
        <h1>Hello,</h1>
        <h2>
          This is a platform that sources cryptocurrency market details, news
          and conversations from Reddits.
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
