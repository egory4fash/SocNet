import React from 'react'
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";
import {AddMessageReduxForm} from "./Message/AddMessageForm";




const Dialogs = (props: DialogsPropsType) => {


    const dialogsElements = props.dialogsData.map((elem) =>
        <DialogItem key={elem.id} name={elem.name} id={elem.id}/>
    )


    const messageElements = props.messagesData.map((elem) =>
        <Message key={elem.id} message={elem.message}/>
    )




// if (!props.isAuth ) return <Redirect to={'/login'} />

    const addNewMessage = (values:any) => {
        console.log(values.NewMessageBody)
        props.addMessage(values.NewMessageBody)
    }

    return (


        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
                <AddMessageReduxForm onSubmit = {addNewMessage}/>
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    )
}


export default Dialogs;