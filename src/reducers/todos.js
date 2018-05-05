import { ADD_TODO, REMOVE_TODO } from '../statics/todos'

const dummyValue = ['Beli Rumah', 'Beli Mobil']

const initialState = [...dummyValue]

export default ( state = initialState, action ) => {
  switch (action.type) {
    case ADD_TODO:
      const taskValue = action.payload
      const newState = state.concat([taskValue])
      return newState
      break;
    case REMOVE_TODO:{
      const indexSelectedForRemove = action.payload
      const filterByIndex = state.filter((item, index) => index != indexSelectedForRemove)
      return filterByIndex
    }
    break;
    default:
      return state
  }
}
