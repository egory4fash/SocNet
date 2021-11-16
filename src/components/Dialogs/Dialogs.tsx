import React from 'react'
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    name:string,
    id:string
}

type MessagePropsType = {
    message: string
}



const DialogItem = (props: DialogItemProps) => {
    let path = '/dialogs/'+ props.id;
    return (<div className={classes.dialog}>
        <NavLink to={path}>
            {props.name}
        </NavLink>
    </div>)
}

const Message =(props: MessagePropsType) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}


const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name = 'Smth1' id = '1'/>
                <DialogItem name = 'Smth2' id = '2'/>
                <DialogItem name = 'Smth3' id = '3'/>

            </div>
            <div className={classes.messages}>
               <Message message='Msg1' />
               <Message message='Msg2' />
               <Message message='Msg3' />

            </div>
        </div>
    )
}


export default Dialogs;