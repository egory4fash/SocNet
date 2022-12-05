import {DialogsPageType, MessagesType} from "./State";

enum DIALOGS_ACTIONS {
    ADD_MESSAGE='DIALOGS/ADD-MESSAGE'
}


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

 const DialogsReducer = (state: DialogsPageType = initialDialogState, action: DialogActionType):DialogsPageType => {
    switch (action.type) {
        case DIALOGS_ACTIONS.ADD_MESSAGE : {
            const newPostMessage: MessagesType = {
                id: 4,
                message: action.newMessage,
            }
            return {...state,messagesData:state.messagesData=[...state.messagesData,newPostMessage]}
        }
        default:
            return state
    }

}


export const addMessageAC = (newMessage: string) => {
    return {
        type: DIALOGS_ACTIONS.ADD_MESSAGE,
        newMessage: newMessage
    } as const
}

export default DialogsReducer



