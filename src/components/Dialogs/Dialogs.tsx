import React from 'react'
import classes from "./Dialogs.module.css";

type DialogsPropsType = {message: string}
const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    Smth1
                </div>
                <div className={classes.dialog+ ' '+classes.active}>
                    Smth2
                </div>
                <div className={classes.dialog}>
                    Smth3
                </div>
            </div>
            <div className={classes.messages}>
                <div className = {classes.message}>message1</div>
                <div className = {classes.message}>message2</div>
                <div className = {classes.message}>message3</div>

            </div>
        </div>
    )
}


export default Dialogs;