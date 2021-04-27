import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Header from "./components/header/Header";
import RedditPostPage from "./pages/homePage/RedditPostPage";
import TopicsNavBar from "./components/topicsNavBar/TopicsNavBar";
import FeedMarket from "./components/feedMarket/FeedMarket";
import FeedSubreddits from "./components/feedSubreddits/FeedSubreddits";
import FeedNews from "./components/feedNews/FeedNews";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <div className="home-page-container">
          <TopicsNavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/market" component={FeedMarket} />
            <Route exact path="/reddit" component={FeedSubreddits} />
            <Route path="/news" component={FeedNews} />
            <Route
              path="/reddit/post/:subreddit/:id"
              component={RedditPostPage}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
