import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './petItem.module.css';

const PetItem = props => {
  const { pet, match, height } = props;

  return (
    <Link
      to={{
        pathname: `${match.path}/${pet.id}`,
        state: { height: height, from: props.location },
      }}
    >
      <div className={style.container}>
        <img src={pet.image} alt={pet.breed} />
        <h2>{pet.name}</h2>
      </div>
    </Link>
  );
};

PetItem.propTypes = {
  pet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(PetItem);
