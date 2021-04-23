import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Header from "./components/header/Header";
import FeedMarket from "./components/feedMarket/FeedMarket";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Route path="/" component={HomePage} />
        {/* <Route path="/market" component={FeedMarket} /> */}
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
