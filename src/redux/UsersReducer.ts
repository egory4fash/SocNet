import {GlobalUsersType, UsersType} from "./State";

export type UsersActionType = ChangeFollowACType |
    SetUsersACType

export type ChangeFollowACType = ReturnType<typeof changeFollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>

export const changeFollow = "CHANGE-FOLLOW"
export const setUsers = "SET-USERS"


let initialUsersState = {
    users: [
        {
            id: 1,
            photoURL: 'https://www.clipartmax.com/png/small/248-2487966_matthew-man-avatar-icon-png.png',
            followed: true,
            fullName: "Egor",
            status: "No brain-no pain",
            location: {city: "Verkhnedvinsk", country: "Belarus"}
        },
        {
            id: 2,
            photoURL: 'https://www.clipartmax.com/png/small/248-2487966_matthew-man-avatar-icon-png.png',
            followed: false,
            fullName: "Anna",
            status: "Anime RULEZ",
            location: {city: "Vitebsk", country: "Belarus"}
        },
        {
            id: 3,
            photoURL: 'https://www.clipartmax.com/png/small/248-2487966_matthew-man-avatar-icon-png.png',
            followed: true,
            fullName: "Dina",
            status: "------",
            location: {city: "Kyiv", country: "Ukraine"}
        },
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

