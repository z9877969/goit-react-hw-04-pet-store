import React from "react";
import PetItem from "../../components/PetItem/PetItem";

const Pets = ({ pets }) => (
  <ul>
    {pets.map(pet => (
      <li key={pet.id}>
        <PetItem pet={pet} />
      </li>
    ))}
  </ul>
);

export default Pets;
