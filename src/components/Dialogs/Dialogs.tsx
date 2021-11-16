import React from 'react'
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    name: string,
    id: number
}

type MessagePropsType = {
    message: string
}

// type dialogData =  {
//   id: number,
//   name: string
// }
//
// type dialogsData = Array<dialogData>



const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/' + props.id;
    return (<div className={classes.dialog}>
        <NavLink to={path}>
            {props.name}
        </NavLink>
    </div>)
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}



const Dialogs = () => {

    const dialogsData = [
        {id: 1, name : "Ivan"},
        {id: 2, name : "Sergey"},
        {id: 3, name : "John"},
        {id: 4, name : "Egor"},
        {id: 5, name : "Anna"},]

    const dialogsElements =dialogsData.map( (elem) =>
        <DialogItem name={elem.name} id={elem.id}/>
    )

    const messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Wazzup"},
        {id: 3, message: "Yo"}
    ]

    const messageElements = messagesData.map( (elem) =>
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