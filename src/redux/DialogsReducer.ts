import {DialogsPageType, MessagesType} from "./State";


export const add_Message = "ADD-MESSAGE"

export type DialogActionType = addMessageACType

type  addMessageACType = ReturnType<typeof addMessageAC>

let initialDialogState= {
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
}

export const DialogsReducer = (state: DialogsPageType = initialDialogState, action: DialogActionType):DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE" : {
            const newPostMessage: MessagesType = {
                id: 4,
                message: action.newMessage,
            }
            state.messagesData.push(newPostMessage)
            state.dialogsData.push({id: 4, name: "NewComer"})
            return state
        }
        default:
            return state
    }

}


export const addMessageAC = (newMessage: string) => {
    return {
        type: add_Message,
        newMessage: newMessage
    } as const
}



