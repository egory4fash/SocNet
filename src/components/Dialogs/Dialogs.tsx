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

    const messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Wazzup"},
        {id: 3, message: "Yo"}
    ]


    return (


        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>


            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>


            </div>
        </div>
    )
}


export default Dialogs;