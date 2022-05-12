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
    newPostText: string,
    profile:ProfileType
}

export type ProfileType = {
    aboutMe: string,
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
    status: null | string,
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


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
    usersPage:GlobalUsersType
    auth: AuthGlobalDataType

}
export type DispatchActionType =
    DialogActionType | ProfilePageActionType | SidebarActionType


// type observerType = () => void

// export type StoreType = {
//     _state: RootStateType,
//     subscriber: (callback: () => void) => void
//     _callSubscriber: () => void
//     getState: () => RootStateType
//     dispatch: (action: DispatchActionType) => void
// }





// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: 1, message: "1st post", likesCount: 12},
//                 {id: 2, message: "2nd post bro", likesCount: 23},
//                 {id: 3, message: "need 3rd?", likesCount: 45}
//             ],
//             newPostText: 'egory4'
//         },
//         dialogsPage: {
//             messagesData: [
//                 {id: 1, message: "Hi"},
//                 {id: 2, message: "Wazzup"},
//                 {id: 3, message: "Yo"}
//             ],
//             dialogsData: [
//                 {id: 1, name: "Ivan"},
//                 {id: 2, name: "Sergey"},
//                 {id: 3, name: "John"},
//             ]
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log('State changed')
//     },
//
//     subscriber(observer: observerType) {
//         this._callSubscriber = observer
//     },
//     getState() {
//         return this._state
//     },
//
//     dispatch(action) {
//         this._state.profilePage = ProfileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = SidebarReducer(this._state.sidebar, action)
//         this._callSubscriber()
//     }
// }
