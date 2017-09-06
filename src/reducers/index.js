import { combineReducers } from 'redux'
import { todos, itemsHasErrored, itemsIsLoading } from './todos'
import visibilityFilter from './visibilityFilter'
import counter from './counter'

const rootReducer = combineReducers({
  itemsIsLoading,
  itemsHasErrored,
  todos,
  visibilityFilter,
  counter
})

export default rootReducer