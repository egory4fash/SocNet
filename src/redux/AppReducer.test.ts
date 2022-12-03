import {appInitializedAC, AppReducer} from "./AppReducer";


test ('`initialized` must be reverted',() => {
    const testState = {
        initialized: false
    }
    let newState = AppReducer(testState,appInitializedAC(true))
    expect(newState.initialized).toBe(true)
    let newState2 = AppReducer(testState,appInitializedAC(false))
    expect(newState2.initialized).toBe(false)

})