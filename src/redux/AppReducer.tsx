import {AppGlobalType} from "./State";

import {AppThunk, getAuthUserDataThunkCreator} from "./AuthReducer";



let initialAppState = {
    initialized: false
}

export type AppActionType = AppinitializedACType


type AppinitializedACType = ReturnType<typeof appInitializedAC>

export const AppReducer = (state: AppGlobalType = initialAppState, action: AppActionType): AppGlobalType => {
    switch (action.type) {
        case "APP-INITIALIZED": {

            return {...state, initialized: action.payload.initialized}

        }
        default:
            return state
    }
}

export const appInitializedAC = (initialized:boolean) => {
    return {type:"APP-INITIALIZED",
    payload:{
        initialized
    }} as const
}



export const initializeAPPThunkCreator = ():AppThunk => {
    return (dispatch) => {
        dispatch(getAuthUserDataThunkCreator()).then( () => {
            dispatch(appInitializedAC(true))

        })


    }
}