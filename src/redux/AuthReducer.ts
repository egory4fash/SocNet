import {AuthDataType, AuthGlobalDataType} from "./State";
import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../API/API";
import {ReduxStateType} from "./Redux-Store";
import {ThunkAction} from "redux-thunk";

export type AuthActionType = SetUserDataType | ChangeAuthFetchingACType

export type SetUserDataType = ReturnType<typeof setUserData>
export type ChangeAuthFetchingACType = ReturnType<typeof changeAuthFetching>


let initialAuthData = {
    resultCode: 0,
    messages: [],
    data: {
        id: 1,
        email: '',
        login: ''
    },
    isFetching: true,
    isLogined: false
}

export const AuthReducer = (state: AuthGlobalDataType = initialAuthData, action: AuthActionType): AuthGlobalDataType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            let newState = {...state, data: action.payload.data, isLogined: action.payload.isLogined}
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


export const setUserData = (data: AuthDataType,isLogined:boolean) => {
    return {
        type: "SET-USER-DATA",
        payload: {
            data,
            isLogined
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


export const getAuthUserDataThunkCreator = () => {
    return (dispatch: Dispatch) => {
        authAPI.auth().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data,true))
                dispatch(changeAuthFetching(false))

            }
        })
    }
}

export type AppThunk = ThunkAction<void, ReduxStateType, unknown, AnyAction>

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean):AppThunk => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
            if (data.resultcode === 0) {
                dispatch(getAuthUserDataThunkCreator())

            }
        })
    }
}
export const logOutThunkCreator = () => {
    return (dispatch:Dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultcode === 0) {
                    dispatch(setUserData( {
                        id: 0,
                        email: '' ,
                        login: ''
                    },false))


                }
            })
    }
}