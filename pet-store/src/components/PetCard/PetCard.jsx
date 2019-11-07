import React from "react";
import { withRouter } from "react-router-dom";

const PetCard = props => {
  const { pet, from, history } = props;
  const handleGoBackToPets = () => history.push(from);
  return (
    <div>
      <button type="button" onClick={handleGoBackToPets}>
        Return
      </button>
      <h2>All about {pet.name}</h2>
      <div>
        <img
          src={pet.image}
          alt={`${pet.breed} - ${pet.name}`}
          className="image"
        />
        <ul className="description">
          <li>
            <p>
              <span>Age: </span>
              {pet.age}
            </p>
            <p>
              <span>Gender: </span>
              {pet.gender}
            </p>
            <p>
              <span>Color: </span>
              {pet.color}
            </p>
            <p>
              <span>Breed: </span>
              {pet.breed}
            </p>
          </li>
        </ul>
      </div>
      <p>{pet.description}</p>
    </div>
  );
};

export default withRouter(PetCard);
