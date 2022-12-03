import {AuthDataType, AuthGlobalDataType} from "./State";
import {AnyAction, Dispatch} from "redux";
import {authAPI} from "../API/API";
import {ReduxStateType} from "./Redux-Store";
import {ThunkAction} from "redux-thunk";
import {stopSubmit} from "redux-form";

enum AUTH_ACTIONS {
    SET_USER_DATA='AUTH/SET-USER-DATA',
    CHANGE_AUTH_FETCHING='AUTH/CHANGE-AUTH-FETCHING'
}

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

 const AuthReducer = (state: AuthGlobalDataType = initialAuthData, action: AuthActionType): AuthGlobalDataType => {
    switch (action.type) {
        case AUTH_ACTIONS.SET_USER_DATA: {
            return {...state, data: action.payload.data, isLogined: action.payload.isLogined}
        }
        case AUTH_ACTIONS.CHANGE_AUTH_FETCHING: {
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
        type: AUTH_ACTIONS.SET_USER_DATA,
        payload: {
            data,
            isLogined
        }
    } as const
}

export const changeAuthFetching = (isFetching: boolean) => {
    return {
        type: AUTH_ACTIONS.CHANGE_AUTH_FETCHING,
        payload: {
            isFetching
        }
    } as const
}


export const getAuthUserDataThunkCreator = () => {
    return (dispatch: Dispatch) =>
        authAPI.auth().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(data.data,true))
                dispatch(changeAuthFetching(false))
            }
        })

}

export type AppThunk = ThunkAction<void, ReduxStateType, unknown, AnyAction>

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean):AppThunk => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserDataThunkCreator())
            }else {
                let errorMessage = data.messages.length > 0 ? data.messages[0] : "some error"
                dispatch(stopSubmit('login',{_error:errorMessage}))
            }
        })
    }
}
export const logOutThunkCreator = () => {
    return (dispatch:Dispatch) => {
        authAPI.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    console.log('123')
                    dispatch(setUserData( {
                        id: 0,
                        email: '' ,
                        login: ''
                    },false))


                }
            })
    }
}

export default AuthReducer