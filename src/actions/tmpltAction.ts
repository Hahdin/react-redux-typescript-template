import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
export interface TestAction {
   type: 'TEST'
   testString: string
}
//export type Action = SetAction | SetFetcing <- to combine
export type Action = TestAction

//creators
export const test = (testString: string): TestAction => {
   return { type: 'TEST', testString }
}
export const runTest = (testString: string):
   ThunkAction<Promise<void>, {}, {}, AnyAction> => {
   return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
      return new Promise<void>((resolve) => {
         dispatch(test(testString))
         resolve();
      })
   }
}

