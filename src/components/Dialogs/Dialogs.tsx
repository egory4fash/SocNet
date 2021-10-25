import React from 'react'
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsPropsType = { message: string }
const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/1'>
                        Smth1
                    </NavLink>
                </div>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/2'>
                        Smth2
                    </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>
                        Smth3
                    </NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>message1</div>
                <div className={classes.message}>message2</div>
                <div className={classes.message}>message3</div>

            </div>
        </div>
    )
}


export default Dialogs;