import {RootStateType, UsersType} from "./State";

export const getUsers = (state:RootStateType):UsersType => {
    return state.usersPage.users
}

export const getPageSize = (state:RootStateType):number => {
    return state.usersPage.pageSize
}

export const totalUsersCount = (state:RootStateType):number => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state:RootStateType):number => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state:RootStateType):boolean => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state:RootStateType):boolean => {
    return state.usersPage.followingInProgress
}