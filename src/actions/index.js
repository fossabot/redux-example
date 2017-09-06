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

export const itemsIsLoading = (isLoading) => {
  return {
    type: 'ITEM_IS_LOADING',
    isLoading
  }
}

export const itemsHasErrored = (hasErrored) => {
  return {
    type: 'ITEM_HAS_ERRORED',
    hasErrored
  }
}

export const itemsFetchDataSuccess = (items) => {
  return {
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    items
  }
}

// Fetch Todo Data

export function itemsFetchData(url) {
  return (dispatch) => {
    console.log(dispatch)
    dispatch(itemsIsLoading(true))

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        dispatch(itemsIsLoading(false))

        return response
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)))
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
