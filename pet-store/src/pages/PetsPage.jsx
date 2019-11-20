import React from 'react';
import Pets from '../components/Pets/Pets';
import petsList from '../json/pets.json';

export default class PetsPage extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    pets: null,
    height: 0,
  };

  componentDidMount() {
    const { location } = this.props;
    const height = location.state ? location.state.height : 0;
    this.setState({ pets: petsList }, () => {
      this.returnPageOnLastPosition(height);
    });
    window.addEventListener('scroll', this.handlerScrollHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlerScrollHeight);
  }

  returnPageOnLastPosition = (positionHeight = 0) => {
    this.setState({ height: positionHeight ? positionHeight : 0 }, () =>
      window.scrollTo({
        top: positionHeight,
      }),
    );
  };

  handlerScrollHeight = () => this.setState({ height: window.pageYOffset });

  render() {
    const { pets, height } = this.state;

    return <div>{pets && <Pets pets={pets} height={height} />}</div>;
  }
}
