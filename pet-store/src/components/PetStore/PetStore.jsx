import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import AboutPage from '../../pages/AboutPage';
import PetsPage from '../../pages/PetsPage';
import PetPage from '../../pages/PetPage';
import Nav from '../Nav/Nav';

const PetStore = () => (
  <div>
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={AboutPage} />
      <Route path="/pets/:id" exact component={PetPage} />
      <Route path="/pets" exact component={PetsPage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default PetStore;
