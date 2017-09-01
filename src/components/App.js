import React, { Component } from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Counter from './Counter';


class App extends Component {

  render() {
    return (
      <div>
        <Counter />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }

}

export default App;
