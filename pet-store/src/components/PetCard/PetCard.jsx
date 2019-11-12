import React from "react";
import style from "./petCard.module.css";

const PetCard = ({ pet, goBackToPets }) => (
  <div className={style.container}>
    <button type="button" onClick={goBackToPets}>
      &#x21E6; Return
    </button>
    <h2>All about {pet.name}</h2>
    <div className={style.imgBlock}>
      <img
        src={pet.image}
        alt={`${pet.breed} - ${pet.name}`}
        className={style.image}
      />
      <ul className={style.description}>
        <li>
          <p>
            <span>Age: </span>
            {pet.age}
          </p>
        </li>
        <li>
          <p>
            <span>Gender: </span>
            {pet.gender}
          </p>
        </li>
        <li>
          <p>
            <span>Color: </span>
            {pet.color}
          </p>
        </li>
        <li>
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

export default PetCard;
