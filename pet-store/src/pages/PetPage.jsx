import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PetCard from '../components/PetCard/PetCard';
import petsList from '../json/pets.json';

const getPathId = match => match.params.id;

export default class PetPage extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    pet: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const { history } = this.props;
    const id = getPathId(match);
    const petFromUrl = petsList.find(pet => pet.id === id);

    if (!petFromUrl) {
      return history.push('/');
    }

    this.setState({ pet: petFromUrl });

    return window.scrollTo({ top: 0 });
  }

  handleGoBackToPets = () => {
    const { history, location } = this.props;
    if (!location.state) {
      return history.push('/pets');
    }
    return history.goBack();
  };

  render() {
    const { pet } = this.state;

    return (
      <div>
        {pet && <PetCard pet={pet} goBackToPets={this.handleGoBackToPets} />}
      </div>
    );
  }
}

PetPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.bool,
  }).isRequired,
};
