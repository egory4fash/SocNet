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
    newPostText: string
}

export type DialogsPageType = {
    messagesData: Array<MessagesType>
    dialogsData: Array<DialogsType>
}

export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

type observerType = () => void

export type StoreType = {
    _state: RootStateType,
    subscriber: (callback: () => void) => void
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action: DispatchActionType) => void
}


export type DispatchActionType =
    ReturnType<typeof updateMessageAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof addPostAC>



export const updateMessageAC = (updateMessage:string) => {
    return {
        type:"UPDATE-MESSAGE",
        updateMessage: updateMessage
    } as const
}

export const addMessageAC = (newMessage:string)=> {
    return {
        type:"ADD-MESSAGE",
        newMessage:newMessage
    } as const
}

export const addPostAC = ()=> {
    return {
        type:"ADD-POST",
    } as const
}

export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "1st post", likesCount: 12},
                {id: 2, message: "2nd post bro", likesCount: 23},
                {id: 3, message: "need 3rd?", likesCount: 45}
            ],
            newPostText: 'egory4'
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "Wazzup"},
                {id: 3, message: "Yo"}
            ],
            dialogsData: [
                {id: 1, name: "Ivan"},
                {id: 2, name: "Sergey"},
                {id: 3, name: "John"},
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    subscriber(observer: observerType) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        debugger
        if (action.type === "UPDATE-MESSAGE") {
            this._state.profilePage.newPostText = action.updateMessage
            this._callSubscriber()
        } else if (action.type === "ADD-MESSAGE") {
            const newPostMessage: MessagesType = {
                id: 4,
                message: action.newMessage,
            }
            this._state.dialogsPage.messagesData.push(newPostMessage)
            this._state.dialogsPage.dialogsData.push({id: 4, name: "NewComer"})
            this._callSubscriber()
        } else if (action.type === "ADD-POST") {
            const newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber()
        }
    }
}
