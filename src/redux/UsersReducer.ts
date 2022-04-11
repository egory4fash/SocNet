import {GlobalUsersType, UsersType} from "./State";

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
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,
    isFetching:false,
    followingInProgress:false
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
            return {...state,currentPage:action.payload.currentPage}
        }
        case "SET-TOTAL-USERS": {
            return {...state,totalUsersCount:action.payload.totalUsers}
        }
        case "CHANGE-FETCHING": {
            return {
              ...state,isFetching:action.payload.isFetching
            }
        }
        case "FOLLOWING-IN-PROGRESS": {

            return {
                ...state,followingInProgress:action.payload.followingInProgress
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

export const setCurrentPage = (currentPage:number) => {
    return {
        type:"SET-CURRENT-PAGE",
        payload: {
            currentPage
        }
    } as const
}

export const setTotalUsers = (totalUsers:number) => {
    return {
        type:"SET-TOTAL-USERS",
        payload: {
            totalUsers
        }
    } as const
}

export const changeFetching = (isFetching:boolean) => {
    return {
        type:"CHANGE-FETCHING",
        payload: {
            isFetching
        }
    } as const
}

export const followingInProgressHandler = (followingInProgress:boolean) => {
    return {
        type:"FOLLOWING-IN-PROGRESS",
        payload: {
            followingInProgress
        }
    } as const
}


