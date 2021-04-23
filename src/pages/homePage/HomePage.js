import React from "react";
import TopicsNavBar from "../../components/topicsNavBar/TopicsNavBar";
import "./homePage.css";
import { Route } from "react-router-dom";
import FeedMarket from "../../components/feedMarket/FeedMarket";
import FeedSubreddits from "../../components/feedSubreddits/FeedSubreddits";
import FeedNews from "../../components/feedNews/FeedNews";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <TopicsNavBar />
      <Route path="/market" component={FeedMarket} />
      <Route path="/subreddits" component={FeedSubreddits} />
      <Route path="/news" component={FeedNews} />

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
