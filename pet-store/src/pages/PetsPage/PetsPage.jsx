import React from "react";
import Pets from "../../components/Pets/Pets";
import petsList from "../../json/pets.json";

export default class PetsPage extends React.Component {
  state = {};
  setPropsFromLocationState = () => {
    const { location } = this.props;
  };
  render() {
    const { location } = this.props;
    console.log(location);
    return (
      <div>
        <h1>Available pets</h1>
        <Pets pets={petsList} state={location.state} />
      </div>
    );
  }
}
