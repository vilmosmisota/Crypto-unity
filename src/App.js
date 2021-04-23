import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/header/header/Header";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
