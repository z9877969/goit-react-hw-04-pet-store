import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PetCard from '../components/PetCard/PetCard';
import petsList from '../json/pets.json';

const getPathId = match => match.params.id;
const getPetFromUrl = (petsList, id) => petsList.find(pet => pet.id === id);

export default class PetPage extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    pet: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const id = getPathId(match);

    if (!getPetFromUrl(petsList, id)) {
      return this.goBackToHome();
    }

    this.setState({ pet: getPetFromUrl(petsList, id) });
    window.scrollTo({ top: 0 });
  }

  componentDidUpdate(prevProps, prevState) {
    const { match, location } = this.props;
    const id = getPathId(match);
    if (location !== prevProps.location && !getPetFromUrl(petsList, id)) {
      return this.goBackToHome();
    }
  }

  goBackToHome = () => {
    const { history } = this.props;
    history.push('/');
    window.scrollTo({ top: 0 });
  };

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
