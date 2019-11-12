import React from "react";
import PetItem from "../../components/PetItem/PetItem";
import style from "./pets.module.css";

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

export default Pets;
