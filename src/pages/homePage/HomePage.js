import React from "react";
import TopicsNavBar from "../../components/topicsNavBar/TopicsNavBar";
import "./homePage.css";
import { Route, useLocation } from "react-router-dom";
import FeedMarket from "../../components/feedMarket/FeedMarket";
import FeedSubreddits from "../../components/feedSubreddits/FeedSubreddits";
import FeedNews from "../../components/feedNews/FeedNews";

const HomePage = () => {
  const location = useLocation();

  const ShowLocation = () => {
    if (
      location.pathname !== "/news" &&
      location.pathname !== "/market" &&
      location.pathname !== "/subreddits"
    ) {
      return (
        <div className="home-page-msg-container">
          <h1>Hello,</h1>
          <h3>
            This is a platform that sources cryptocurrency market details, news
            and conversations from Reddit.
          </h3>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="home-page-container">
      <TopicsNavBar />
      <Route path="/market" component={FeedMarket} />
      <Route path="/subreddits" component={FeedSubreddits} />
      <Route path="/news" component={FeedNews} />
      <ShowLocation />
    </div>
  );
};

export default HomePage;
