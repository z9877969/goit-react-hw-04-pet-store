import React from "react";
import { Link, withRouter } from "react-router-dom";

const PetItem = props => {
  const { pet, location } = props;

  console.log(props);
  return (
    <Link
      to={{
        pathname: `/pets/${pet.id}`,
        state: { pet, from: location.pathname }
      }}
    >
      <div>
        <img src={pet.image} alt={pet.breed} />
        <h2>{pet.name}</h2>
      </div>
    </Link>
  );
};

export default withRouter(PetItem);
