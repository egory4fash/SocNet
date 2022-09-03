import { ProfilePageActionType} from "./ProfileReducer";
import { DialogActionType} from "./DialogsReducer";
import {SidebarActionType} from "./SidebarReducer";



export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type MessagesType = {
    id: number
    message: string
}

export type DialogsType = {
    id: number
    name: string
}

export type ProfilePageType = {
    postsData: Array<PostsType>
    profile:ProfileType,
    serverStatus:string | null

}

export type ProfileType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: number,
    photos: {
        small: string | null,
        large: string | null
    }
}

export type DialogsPageType = {
    messagesData: Array<MessagesType>
    dialogsData: Array<DialogsType>
}

export type SidebarType = {}

export type GlobalUsersType = {
    users:UsersType,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
    isFetching:boolean,
    followingInProgress:boolean
}
export type UsersType = Array<UserType>
export type UserType = {
    name: string,
    id: number,
    photos: {
        small: null | string,
        large: null |string
    },
    status: string | null,
    followed: boolean
}

export type AuthGlobalDataType = {
    resultCode: number
    messages?: string [],
    data: AuthDataType,
    isFetching:boolean,
    isLogined:boolean
}
export type AuthDataType = {
    id: number,
    email: string ,
    login: string
}

export type AppGlobalType = {
    initialized:boolean
}


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage:GlobalUsersType
    auth: AuthGlobalDataType

}
export type DispatchActionType =
    DialogActionType | ProfilePageActionType | SidebarActionType


