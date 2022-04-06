import {AuthDataType, AuthGlobalDataType} from "./State";

export type AuthActionType = SetUserDataType

export type SetUserDataType = ReturnType<typeof setUserData>

let initialAuthData = {
    resultCode: 1,
    messages: [],
    data: {
        id: 1,
        email: '',
        login: ''
    }
}

export const AuthReducer = (state: AuthGlobalDataType = initialAuthData, action: AuthActionType) => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.payload.data
            }
        }
        default:
            return state
    }
}


export const setUserData = (data:AuthDataType) => {
    return {
        type: "SET-USER-DATA",
        payload: {
            data
        }
    } as const
}