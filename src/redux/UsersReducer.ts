import {GlobalUsersType, UsersType} from "./State";

export type UsersActionType = ChangeFollowACType |
    SetUsersACType |
    SetCurrentPageACType |
    SetTotalUsersACType

export type ChangeFollowACType = ReturnType<typeof changeFollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>
export type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersACType = ReturnType<typeof setTotalUsersAC>

export const changeFollow = "CHANGE-FOLLOW"
export const setUsers = "SET-USERS"
export const setCurrentPage = "SET-CURRENT-PAGE"
export const setTotalUsers = "SET-TOTAL-USERS"


let initialUsersState = {
    users: [],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1
}

export const UsersReducer = (state: GlobalUsersType = initialUsersState, action: UsersActionType) => {
    switch (action.type) {
        case changeFollow : {
            return {
                ...state,
                users: state.users.map(m => m.id === action.payload.id ? {...m, followed: !m.followed} : m)
            }
        }
        case setUsers: {
            return {...state, users: action.payload.users}
        }
        case setCurrentPage: {
            return {...state,currentPage:action.payload.currentPage}
        }
        case "SET-TOTAL-USERS": {
            return {...state,totalUsersCount:action.payload.totalUsers}
        }
        default:
            return state
    }
}

export const changeFollowAC = (id: number) => {
    return {
        type: changeFollow,
        payload: {
            id,
        }
    } as const
}

export const setUsersAC = (users: UsersType) => {
    return {
        type: setUsers,
        payload: {
            users,
        }
    } as const
}

export const setCurrentPageAC = (currentPage:number) => {
    return {
        type:setCurrentPage,
        payload: {
            currentPage
        }
    } as const
}

export const setTotalUsersAC = (totalUsers:number) => {
    return {
        type:setTotalUsers,
        payload: {
            totalUsers
        }
    } as const
}

