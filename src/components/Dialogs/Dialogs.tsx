import React from 'react'
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


type dialogsPropsType = {
    dialogsData: Array<{ id: number, name: string }>,
    messagesData: Array<{ id: number, message: string }>
    addMessage: (newMessage: string) => void
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
        props.addMessage(newMessage)
    }


    return (


        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}
                <div><textarea ref = {NewMessageElement} className={classes.item}></textarea></div>
                <div>
                    <button onClick={addMessage}>Add post</button>
                </div>

            </div>
            <div className={classes.messages}>
                {messageElements}


            </div>
        </div>
    )
}


export default Dialogs;