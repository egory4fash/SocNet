import React from 'react'
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageAC, DispatchActionType} from "../../redux/DialogsReducer"

type dialogsPropsType = {
    dialogsData: Array<{ id: number, name: string }>,
    messagesData: Array<{ id: number, message: string }>
    dispatch: (action:DispatchActionType) => void
}
const Dialogs = (props: dialogsPropsType) => {


    const dialogsElements = props.dialogsData.map((elem) =>
        <DialogItem name={elem.name} id={elem.id}/>
    )


    const messageElements = props.messagesData.map((elem) =>
        <Message message={elem.message}/>
    )
    const NewMessageElement:React.RefObject<HTMLTextAreaElement> = React.createRef()

    const addMessage = () => {
        const newMessage = NewMessageElement.current ? NewMessageElement.current.value : ""
        props.dispatch(addMessageAC(newMessage))
    }


    return (


        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}
                <div><textarea ref = {NewMessageElement} className={classes.item} placeholder={'Enter your message'}></textarea></div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>

            </div>
            <div className={classes.messages}>
                {messageElements}


            </div>
        </div>
    )
}


export default Dialogs;