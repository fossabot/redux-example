import React from 'react'
import PropTypes from 'prop-types'

import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'
import TodoListRouter from './TodoListRouter'
const TodoApp = ({ match }) => {
  // console.log(match);
  return (
    <div>
      <AddTodo />
      {/* <VisibleTodoList /> */}
      <TodoListRouter basePath={match.url} />
      <Footer basePath={match.url} />
    </div>
  )
}

TodoApp.propTypes = {
  match: PropTypes.object.isRequired
}

export default TodoApp