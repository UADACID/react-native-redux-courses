import { combineReducers } from 'redux'
import todos from './todos'
import task from './task'


export default combineReducers({
  todos,
  task
})
