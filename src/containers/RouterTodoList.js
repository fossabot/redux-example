import { connect } from 'react-redux'
import { toggleTodo, removeTodo, itemsFetchData } from '../actions'
import TodoList from '../components/TodoList'


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'active':
      return todos.filter(t => !t.completed)
    case 'completed':
      return todos.filter(t => t.completed && !t.removed)
    case 'removed':
      return todos.filter(t => t.removed)
    default:
      return todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id)),
    onTodoRemove: id => dispatch(removeTodo(id)),
    fetchData: url => dispatch(itemsFetchData(url))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, ownProps.match.params.pathId)
  }
}

const RouterTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default RouterTodoList