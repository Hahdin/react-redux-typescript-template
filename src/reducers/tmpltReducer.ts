import { combineReducers } from 'redux'
import { Action } from '../actions/tmpltAction'
// States' definition
export interface RunTest {
   test: string
   accessToken?: string
}
export interface State {
   runTest: RunTest
}

const runTest = (state: RunTest = { test: 'test' }, action: Action): RunTest => {
   switch (action.type) {
      case 'TEST':
         return { ...state, test: action.type, accessToken: action.testString }
         break
      default:
         return { ...state }
   }
}

export default combineReducers<State>({
   runTest
})
