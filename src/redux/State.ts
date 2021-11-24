
type PostsType = {
    id:number
    message: string
    likesCount: number
}
type MessagesType = {
    id:number
    message:string}
type DialogsType = {
    id:number
    name: string

}

type ProfilePageType = {
    postsData:Array<PostsType>
}

type DialogsPageType = {
    messagesData: Array<MessagesType>
    dialogsData:Array<DialogsType>
}
type SidebarType = {}

type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage: DialogsPageType
    sidebar:SidebarType
}



export const State : RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, message: "1st post", likesCount: 12},
            {id: 2, message: "2nd post bro", likesCount: 23},
            {id: 3, message: "need 3rd?", likesCount: 45}
        ]
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
}

export const addPost = (postMessage:string) => {
    const newPost:PostsType = {
        id:5,
        message: postMessage,
        likesCount:0
    }
    State.profilePage.postsData.push(newPost)
}

export const addMessage = (newMessage:string) => {
    const newPostMessage:MessagesType = {
        id:4,
        message: newMessage,
    }
    State.dialogsPage.messagesData.push(newPostMessage)
    State.dialogsPage.dialogsData.push({id:4,name:"NewComer"})
}