import {AuthDataType, AuthGlobalDataType} from "./State";

export type AuthActionType = SetUserDataType | ChangeAuthFetchingACType

export type SetUserDataType = ReturnType<typeof setUserData>
export type ChangeAuthFetchingACType = ReturnType<typeof changeAuthFetching>

let initialAuthData = {
    resultCode: 1,
    messages: [],
    data: {
        id: 1,
        email: '',
        login: ''
    },
    isFetching: true
}

export const AuthReducer = (state: AuthGlobalDataType = initialAuthData, action: AuthActionType):AuthGlobalDataType => {
    switch (action.type) {
        case "SET-USER-DATA": {

            let newState = {...state, data: action.payload.data}
            debugger
            return newState


        }
        case "CHANGE-AUTH-FETCHING": {
            return {
                ...state, isFetching: action.payload.isFetching
            }
        }
        default:
            return state
    }
}


export const setUserData = (data: AuthDataType) => {
    return {
        type: "SET-USER-DATA",
        payload: {
            data
        }
    } as const
}

export const changeAuthFetching = (isFetching: boolean) => {
    return {
        type: "CHANGE-AUTH-FETCHING",
        payload: {
            isFetching
        }
    } as const
}