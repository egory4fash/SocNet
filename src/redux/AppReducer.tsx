import {AppGlobalType} from "./State";
import {getAuthUserDataThunkCreator} from "./AuthReducer";
import {AppThunk} from "./Redux-Store";

enum APP_ACTIONS {
    APP_INITIALIZED = 'APP/App-INITIALIZED'
}

let initialAppState = {
    initialized: false
}

type AppActionType = AppinitializedACType


type AppinitializedACType = ReturnType<typeof appInitializedAC>

const AppReducer = (state: AppGlobalType = initialAppState, action: AppActionType): AppGlobalType => {
    switch (action.type) {
        case APP_ACTIONS.APP_INITIALIZED: {
            return {...state, initialized: action.payload.initialized}
        }
        default:
            return state
    }
}

export const appInitializedAC = (initialized: boolean) => {
    return {
        type: APP_ACTIONS.APP_INITIALIZED,
        payload: {
            initialized
        }
    } as const
}

export const initializeAPPThunkCreator = (): AppThunk => {
    return async (dispatch) => {
        await dispatch(getAuthUserDataThunkCreator())
        dispatch(appInitializedAC(true))
    }
}

export default AppReducer