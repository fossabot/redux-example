export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case 'REMOVE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, removed: true }
          : todo
      )
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items
    default:
      return state
  }
}

export const itemsIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'ITEM_IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const itemsHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'ITEM_HAS_ERRORED':
      return action.hasErrored
    default:
      return state
  }
}
