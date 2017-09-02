import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../actions';

let Counter = ({ counter, incrementCounter, decrementCounter }) => {
  function handleIncrement() {
    incrementCounter(1);
  }
  function handleDecrement() {
    decrementCounter(1);
  }
  return (
    <div>
      <h3>Total count is {counter}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};


const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    incrementCounter: value => dispatch(incrementCounter(value)),
    decrementCounter: value => dispatch(decrementCounter(value))
  }
}

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;