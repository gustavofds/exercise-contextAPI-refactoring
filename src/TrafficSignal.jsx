// src/TrafficSignal.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSignal } from './redux/actionCreators';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import CarSignalContext from './CarSignalContext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = () => {
  return (
    <CarSignalContext.Consumer>
      { (value) => (
        <div>
          <div className="button-container">
            <button onClick={() => value.changeSignal('red')} type="button">
              Red
            </button>
            <button onClick={() => value.changeSignal('yellow')} type="button">
              Yellow
            </button>
            <button onClick={() => value.changeSignal('green')} type="button">
              Green
            </button>
          </div>
          <img className="signal" src={renderSignal(value.signal.color)} alt="" />
        </div>
      )}
    </CarSignalContext.Consumer>
  );
};

// const mapStateToProps = (state) => ({
//   signalColor: state.trafficReducer.signal.color
// });

// const mapDispatchToProps = { changeSignal };

// TrafficSignal.propTypes = {
//   changeSignal: PropTypes.func.isRequired,
//   signalColor: PropTypes.string.isRequired,
// };

export default TrafficSignal;
