import { combineReducers } from 'redux'
import todos from './todos'

const todoApp = combineReducers({
  addToDos,
})

export default todoApp