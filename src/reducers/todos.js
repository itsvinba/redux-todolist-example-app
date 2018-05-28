import { combineReducers } from 'redux'

const addToDos = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]    
    default:
      return state
  }
}

const todoApp = combineReducers({
  addToDos,
})

export default todoApp