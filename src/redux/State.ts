
export type PostsType = {
    id:number
    message: string
    likesCount: number
}
export type MessagesType = {
    id:number
    message:string
}

export type DialogsType = {
    id:number
    name: string
}

export type ProfilePageType = {
    postsData:Array<PostsType>
    newPostText:string
}

export type DialogsPageType = {
    messagesData: Array<MessagesType>
    dialogsData:Array<DialogsType>
}

export type SidebarType = {}

export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage: DialogsPageType
    sidebar:SidebarType
}


type observerType = () => void

export type StoreType = {
    _state:RootStateType,
    updateMessage:(updateMessage:string) => void
    addMessage :(newMessage:string) => void
    addPost : () => void
    subscriber: (callback: () => void) => void
    _reRenderEntireTree: () => void
    getState: () => RootStateType
}
export const store:StoreType = {
     _state : {
    profilePage: {
        postsData: [
            {id: 1, message: "1st post", likesCount: 12},
            {id: 2, message: "2nd post bro", likesCount: 23},
            {id: 3, message: "need 3rd?", likesCount: 45}
        ],
        newPostText:'egory4'
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
    sidebar:{}
},
    _reRenderEntireTree  ()  {
        console.log('State changed')
    },
    updateMessage (updateMessage: string) {
        this._state.profilePage.newPostText = updateMessage
        this._reRenderEntireTree()},
    addMessage (newMessage:string)  {
        const newPostMessage:MessagesType = {
            id:4,
            message: newMessage,}
        this._state.dialogsPage.messagesData.push(newPostMessage)
        this._state.dialogsPage.dialogsData.push({id:4,name:"NewComer"})
        this._reRenderEntireTree()},
    addPost  ()  {
        const newPost:PostsType = {
            id:5,
            message: this._state.profilePage.newPostText,
            likesCount:0
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ""
        this._reRenderEntireTree()},
    subscriber(observer:observerType)  {
        this._reRenderEntireTree=observer},
    getState() {
         return this._state
    }

}