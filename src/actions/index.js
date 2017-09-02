// Todo Actions

let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}

// Counter Actions

export const incrementCounter = (value) => {
  return {
    type: 'INCREMENT_COUNTER',
    value
  }
}

export const decrementCounter = (value) => {
  return {
    type: 'DECREMENT_COUNTER',
    value
  }
}