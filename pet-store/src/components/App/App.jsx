import React from 'react';
import { Route } from 'react-router-dom';
import PetStore from '../PetStore/PetStore';

const App = () => (
  <div>
    <Route component={PetStore} />
  </div>
);

export default App;
