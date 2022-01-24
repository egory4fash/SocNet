import {DialogsPageType, DispatchActionType, MessagesType} from "./State";




export const add_Message = "ADD-MESSAGE"


export const DialogsReducer = (state: DialogsPageType, action: DispatchActionType) => {
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



