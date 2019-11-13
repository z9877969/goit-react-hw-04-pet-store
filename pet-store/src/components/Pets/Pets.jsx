import React from 'react';
import PropTypes from 'prop-types';
import PetItem from '../PetItem/PetItem';
import style from './pets.module.css';

const Pets = ({ pets }) => (
  <div className={style.container}>
    <h1>Available pets</h1>
    <ul className={style.list}>
      {pets.map(pet => (
        <li key={pet.id}>
          <PetItem pet={pet} />
        </li>
      ))}
    </ul>
  </div>
);

Pets.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Pets;
