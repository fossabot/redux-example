import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, onRemove, completed, text, removed }) => (
  <li>
    <span
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </span>
    {completed && !removed && <button type="button" onClick={onRemove}>x</button>}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  removed: PropTypes.bool
}

export default Todo