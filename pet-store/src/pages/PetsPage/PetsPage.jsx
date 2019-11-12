import React from "react";
import Pets from "../../components/Pets/Pets";
import petsList from "../../json/pets.json";

export default class PetsPage extends React.Component {
  state = {
    pets: null
  };

  componentDidMount() {
    this.setState({ pets: petsList });
  }

  render() {
    const { pets } = this.state;
    console.log(this.props.history);
    return <div>{pets && <Pets pets={pets} />}</div>;
  }
}
