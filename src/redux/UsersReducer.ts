import {GlobalUsersType, UsersType} from "./State";

export type UsersActionType = ChangeFollowACType |
    SetUsersACType

export type ChangeFollowACType = ReturnType<typeof changeFollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>

export const changeFollow = "CHANGE-FOLLOW"
export const setUsers = "SET-USERS"


let initialUsersState = {
    users: [

    ]
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
            return {...state, users: [...state.users, ...action.payload.users]}
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

