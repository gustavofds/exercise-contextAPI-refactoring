// src/Cars.jsx

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CarSignalContext from './CarSignalContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { moveCar } from './redux/actionCreators';

function Cars({ redCar, blueCar, yellowCar, moveCar }) {
  return (
    <CarSignalContext.Consumer>
      { (value) => {
        console.log(value);
        return (
          <div>
            <div>
              <img
                className={value.cars.red ? 'car-right' : 'car-left'}
                src={carRed}
                alt="red car"
              />
              <button
                onClick={() => value.moveCar('red', !value.cars.red)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={value.cars.blue ? 'car-right' : 'car-left'}
                src={carBlue}
                alt="blue car"
              />
              <button
                onClick={() => value.moveCar('blue', !value.cars.blue)}
                type="button"
              >
                Move
              </button>
            </div>
            <div>
              <img
                className={value.cars.yellow ? 'car-right' : 'car-left'}
                src={carYellow}
                alt="yellow car"
              />
              <button
                onClick={() => value.moveCar('yellow', !value.cars.yellow)}
                type="button"
              >
                Move
              </button>
            </div>
          </div>
      )}
      }
    </CarSignalContext.Consumer>
  );
}

// Cars.propTypes = {
//   moveCar: PropTypes.func.isRequired,
//   blueCar: PropTypes.bool.isRequired,
//   redCar: PropTypes.bool.isRequired,
//   yellowCar: PropTypes.bool.isRequired,
// };

// const mapStateToProps = (state) => ({
//   redCar: state.carReducer.cars.red,
//   blueCar: state.carReducer.cars.blue,
//   yellowCar: state.carReducer.cars.yellow});

// const mapDispatchToProps = { moveCar };

export default Cars;