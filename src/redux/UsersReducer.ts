import {GlobalUsersType, UsersType} from "./State";
import {API} from "../API/API";
import {Dispatch} from "redux";

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
        case "CHANGE-FOLLOW" : {
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload.id ? {...m, followed: !m.followed} : m)
            }
        }
        case "SET-USERS": {
            return {...state, users: action.payload.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.payload.currentPage}
        }
        case "SET-TOTAL-USERS": {
            return {...state, totalUsersCount: action.payload.totalUsers}
        }
        case "CHANGE-FETCHING": {
            return {
                ...state, isFetching: action.payload.isFetching
            }
        }
        case "FOLLOWING-IN-PROGRESS": {

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
        type: "CHANGE-FOLLOW",
        payload: {
            id,
        }
    } as const
}

export const setUsers = (users: UsersType) => {
    return {
        type: "SET-USERS",
        payload: {
            users,
        }
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: {
            currentPage
        }
    } as const
}

export const setTotalUsers = (totalUsers: number) => {
    return {
        type: "SET-TOTAL-USERS",
        payload: {
            totalUsers
        }
    } as const
}

export const changeFetching = (isFetching: boolean) => {
    return {
        type: "CHANGE-FETCHING",
        payload: {
            isFetching
        }
    } as const
}

export const followingInProgressHandler = (followingInProgress: boolean) => {
    return {
        type: "FOLLOWING-IN-PROGRESS",
        payload: {
            followingInProgress
        }
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(changeFetching(true))
        API.getUsers(currentPage, pageSize).then(data => {
            dispatch(changeFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsers(data.totalCount))
        })
    }
}

export const onPageChangeThunkCreator = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(changeFetching(true))
        API.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(changeFetching(false))
        })
    }
}
export const unFollowThunkCreator = (userId: number, followed: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(followingInProgressHandler(true))
        API.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(changeFollow(userId))
            }
        }).finally(() => dispatch(followingInProgressHandler(false)))
    }
}
export const followThunkCreator = (userId: number, followed: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(followingInProgressHandler(true))
        API.follow(userId).then
        (data => {
            if (data.resultCode === 0) {
                dispatch(changeFollow(userId))
            }
        }).finally(() => dispatch(followingInProgressHandler(false)))
    }
}
