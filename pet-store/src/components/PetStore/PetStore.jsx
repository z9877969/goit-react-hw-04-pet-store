import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import queryString from "query-string";

// import style from "./app.module.css";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import PetsPage from "../../pages/PetsPage/PetsPage";
import PetPage from "../../pages/PetPage/PetPage";
import Nav from "../Nav/Nav";

const parsedUrl = url => queryString.parseUrl(url);

export default class PetStore extends Component {
  state = {};

  render() {
    const { location } = this.props;

    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/pets/:id" exact component={PetPage} />
          <Route path="/pets" component={PetsPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
