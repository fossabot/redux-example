import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <h3>Total count is {this.state.count}</h3>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}
