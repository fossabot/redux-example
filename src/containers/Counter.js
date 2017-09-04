import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { incrementCounter, decrementCounter } from '../actions'

let Counter = ({ counter, incrementCounter, decrementCounter }) => {
  function handleIncrement() {
    incrementCounter(1)
  }
  function handleDecrement() {
    decrementCounter(1)
  }
  return (
    <div>
      <h3>Total count is {counter}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired
}



const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: value => dispatch(incrementCounter(value)),
    decrementCounter: value => dispatch(decrementCounter(value))
  }
}

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default Counter