import React from "react";
import PetCard from "../../components/PetCard/PetCard";

const PetPage = props => {
  const { pet, from } = props.location.state;

  console.log(props);
  return <PetCard pet={pet} from={from} />;
};

export default PetPage;
