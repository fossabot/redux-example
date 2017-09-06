import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


export default class TodoList extends Component {
  componentDidMount() {
    this.props.fetchData('http://localhost:4000/api/todo/list')
  }
  render() {

    return (
      <ul>
        {this.props.todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.props.onTodoClick(todo.id)}
            onRemove={() => this.props.onTodoRemove(todo.id)}
          />
        ))}
      </ul>
    )
  }
}


TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      removed: PropTypes.bool
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired
}

// export default TodoList