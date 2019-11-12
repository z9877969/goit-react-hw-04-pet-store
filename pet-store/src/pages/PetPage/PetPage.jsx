import React, { Component } from "react";
import PetCard from "../../components/PetCard/PetCard";
import { getPetsList } from "../../services/api";

export default class PetPage extends Component {
  state = {
    pet: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const pet = getPetsList().find(pet => pet.id === id);

    this.setState({ pet });
  }

  handleGoBackToPets = () => {
    const { history, location } = this.props;
    if (!location.state) {
      return history.push("/pets");
    }
    history.goBack();
  };

  render() {
    const { pet } = this.state;

    window.scrollTo({ top: 0 });

    return (
      <div>
        {pet && <PetCard pet={pet} goBackToPets={this.handleGoBackToPets} />}
      </div>
    );
  }
}
