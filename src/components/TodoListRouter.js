import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import RouterTodoList from '../containers/RouterTodoList'


const TodoListRouter = ({ basePath }) => {
  return (
    <div>
      <Route path={`${basePath}/:pathId`} component={RouterTodoList} />
      <Route exact path={basePath} component={RouterTodoList} />
    </div>
  )
}

TodoListRouter.propTypes = {
  basePath: PropTypes.string.isRequired
}

export default TodoListRouter