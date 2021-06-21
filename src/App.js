import React from 'react';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.moveCar = this.moveCar.bind(this);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
  }

  moveCar(car, side) {
    this.setState((prevState) => ({
      cars: {
        ...prevState.cars,
        [car]: side
      },
    }));
  }

  render() {
    const contextValue = {
      cars: this.state.cars,
      moveCar: this.moveCar,
    }

    return (
      <MyContext.Provider value={ contextValue }>
        <Cars />
      </MyContext.Provider>
    );
  }
}

export default App;
