import React, { Component } from 'react';
import Pets from '../components/Pets/Pets';
import petsList from '../json/pets.json';

export default class PetsPage extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    pets: null,
  };

  componentDidMount() {
    this.setState({ pets: petsList });
    window.scrollTo({ top: 0 });
  }

  render() {
    const { pets } = this.state;
    return <div>{pets && <Pets pets={pets} />}</div>;
  }
}
