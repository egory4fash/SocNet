import React from 'react'
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type dialogsPropsType = {
    dialogsData: Array<{ id: number, name: string }>,
    messagesData: Array<{ id: number, message: string }>
}

const Dialogs = (props.dialogsPropsType) => {



    const dialogsElements = dialogsData.map((elem) =>
        <DialogItem name={elem.name} id={elem.id}/>
    )



    const messageElements = messagesData.map((elem) =>
        <Message message={elem.message}/>
    )


    return (


        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messageElements}

            </div>
        </div>
    )
}


export default Dialogs;