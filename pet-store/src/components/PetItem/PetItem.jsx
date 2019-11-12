import React from "react";
import { Link, withRouter } from "react-router-dom";
import style from "./petItem.module.css";

const PetItem = props => {
  const { pet, match } = props;

  return (
    <Link
      to={{
        pathname: `${match.path}/${pet.id}`,
        state: { lastLink: window.innerHeight }
      }}
    >
      <div className={style.container}>
        <img src={pet.image} alt={pet.breed} />
        <h2>{pet.name}</h2>
      </div>
    </Link>
  );
};

export default withRouter(PetItem);
