import { combineReducers } from 'redux'
import testReducer from '../../features/testarea/testReducer'

console.log(testReducer)

const rootReducer = combineReducers({
  test: testReducer,
})

export default rootReducer
