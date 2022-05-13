import React from 'react'
import classes from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


const Dialogs = (props: DialogsPropsType) => {


    const dialogsElements = props.dialogsData.map((elem) =>
        <DialogItem key={elem.id} name={elem.name} id={elem.id}/>
    )


    const messageElements = props.messagesData.map((elem) =>
        <Message key={elem.id} message={elem.message}/>
    )
    const NewMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    const addMessage = () => {

        const newMessage = NewMessageElement.current ? NewMessageElement.current.value : ""
        props.addMessage(newMessage)
    }

// if (!props.isAuth ) return <Redirect to={'/login'} />

    return (


        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}
                <div>
                    <textarea
                        ref={NewMessageElement}
                        className={classes.item}
                        placeholder={'Enter your message'}>
                </textarea>
                </div>

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