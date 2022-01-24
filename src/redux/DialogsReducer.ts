import {DialogsPageType, MessagesType} from "./State";


export const add_Message = "ADD-MESSAGE"

export type DialogActionType = addMessageACType

type  addMessageACType = ReturnType<typeof addMessageAC>

export const DialogsReducer = (state: DialogsPageType, action: DialogActionType) => {
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



