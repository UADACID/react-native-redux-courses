import { ON_CHANGE_TASK, CLEAR_TASK } from '../statics/task'

const initialState = ''

export default (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE_TASK:{
        const valueFromTextInput = action.payload
        return valueFromTextInput
    }
    break;
    case CLEAR_TASK: {
      return initialState
    }
    break;
    default:
      return state
  }
}
