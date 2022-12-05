import {GlobalUsersType, UsersType} from "./State";
import {API} from "../API/API";
import {Dispatch} from "redux";

enum USERS_ACTIONS {
    CHANGE_FOLLOW = 'USERS/CHANGE-FOLLOW',
    SET_USERS = 'USERS/SET-USERS',
    SET_CURRENT_PAGE = 'USERS/SET-CURRENT-PAGE',
    SET_TOTAL_USERS = 'USERS/SET-TOTAL-USERS',
    CHANGE_FETCHING = 'USERS/CHANGE-FETCHING',
    FOLLOWING_IN_PROGRESS = 'USERS/FOLLOWING-IN-PROGRESS'
}


export type UsersActionType = ChangeFollowACType |
    SetUsersACType |
    SetCurrentPageACType |
    SetTotalUsersACType |
    ChangeFetchingACType |
    FollowingInProgressACType

export type ChangeFollowACType = ReturnType<typeof changeFollow>
export type SetUsersACType = ReturnType<typeof setUsers>
export type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersACType = ReturnType<typeof setTotalUsers>
export type ChangeFetchingACType = ReturnType<typeof changeFetching>
export type FollowingInProgressACType = ReturnType<typeof followingInProgressHandler>


let initialUsersState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
}

export const UsersReducer = (state: GlobalUsersType = initialUsersState, action: UsersActionType): GlobalUsersType => {
    switch (action.type) {
        case USERS_ACTIONS.CHANGE_FOLLOW : {
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload.id ? {...m, followed: !m.followed} : m)
            }
        }
        case USERS_ACTIONS.SET_USERS: {
            return {...state, users: action.payload.users}

        }
        case USERS_ACTIONS.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.payload.currentPage}
        }
        case USERS_ACTIONS.SET_TOTAL_USERS: {
            return {...state, totalUsersCount: action.payload.totalUsers}
        }
        case USERS_ACTIONS.CHANGE_FETCHING: {
            return {
                ...state, isFetching: action.payload.isFetching
            }
        }
        case USERS_ACTIONS.FOLLOWING_IN_PROGRESS: {

            return {
                ...state, followingInProgress: action.payload.followingInProgress
            }
        }
        default:
            return state
    }
}

export const changeFollow = (id: number) => {
    return {
        type: USERS_ACTIONS.CHANGE_FOLLOW,
        payload: {
            id,
        }
    } as const
}

export const setUsers = (users: UsersType) => {
    return {
        type: USERS_ACTIONS.SET_USERS,
        payload: {
            users,
        }
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: USERS_ACTIONS.SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    } as const
}

export const setTotalUsers = (totalUsers: number) => {
    return {
        type: USERS_ACTIONS.SET_TOTAL_USERS,
        payload: {
            totalUsers
        }
    } as const
}

export const changeFetching = (isFetching: boolean) => {
    return {
        type: USERS_ACTIONS.CHANGE_FETCHING,
        payload: {
            isFetching
        }
    } as const
}

export const followingInProgressHandler = (followingInProgress: boolean) => {
    return {
        type: USERS_ACTIONS.FOLLOWING_IN_PROGRESS,
        payload: {
            followingInProgress
        }
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(changeFetching(true))
        let data = await API.getUsers(currentPage, pageSize)
        dispatch(changeFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsers(data.totalCount))
    }
}

export const onPageChangeThunkCreator = (pageNumber: number, pageSize: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(changeFetching(true))
        let data = await API.getUsers(pageNumber, pageSize)
        dispatch(setUsers(data.items))
        dispatch(changeFetching(false))
    }
}

// export const unFollowThunkCreator = (userId: number, followed: boolean) => {
//     return async (dispatch: Dispatch) => {
//         dispatch(followingInProgressHandler(true))
//         try {
//             let data = await API.unfollow(userId)
//             if (data.resultCode === 0) {
//                 dispatch(changeFollow(userId))
//             }
//         } finally {
//             dispatch(followingInProgressHandler(false))
//         }
//     }
// }
export const fetchFollowThunkCreator = (userId: number, followed: boolean,APItype:string) => {
    return async (dispatch: Dispatch) => {
        dispatch(followingInProgressHandler(true))
        let ApiMethod= APItype === 'follow' ? API.follow :API.unfollow
        console.log(ApiMethod)
        try {
            let data = await ApiMethod(userId)
            if (data.resultCode === 0) {
                dispatch(changeFollow(userId))
            }
        } finally {
            dispatch(followingInProgressHandler(false))
        }
    }
}
