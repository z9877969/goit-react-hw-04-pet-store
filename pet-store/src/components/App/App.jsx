import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import faker from "faker";
import style from "./app.module.css";
// import HomePage from "../../pages/HomePage/HomePage";
// import AboutPage from "../../pages/AboutPage/AboutPage";
// import PetsPage from "../../pages/PetsPage/PetsPage";
// import PetPage from "../../pages/PetPage/PetPage";
// import Nav from "../Nav/Nav";

// const random = value => {
//   return faker.lorem.words(value);
// };

// console.log(random(40));

import PetStore from "../PetStore/PetStore";

const App = () => (
  <div className={style.app}>
    <Route component={PetStore} />
    {/* <Nav />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/pets/:id" exact component={PetPage} />
      <Route path="/pets" component={PetsPage} />
      <Redirect to="/" />
    </Switch> */}
  </div>
);

export default App;
