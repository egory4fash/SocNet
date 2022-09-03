import React, {ChangeEvent, useState} from 'react'
import {StatusPropsType} from "./StatusContainer";

export const StatusFunctional = (props:StatusPropsType) => {

    let [editMode,setEditMode] = useState(false)
    let [status,setStatus] = useState(props.status)


    const editModeOnHandler = () => {
        setEditMode(true)
    }
    const editModeOffHandler = () => {
        setEditMode(false)
    }
    const onChangeStatusHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
        // props.updateStatus(status?status:'')
    }

    let statusValue = status === null ? "no status yet" : props.status



    return (
        <>
            {!editMode ?
                <div>
                    status:
                    <div onDoubleClick={editModeOnHandler}>{statusValue || "------"}</div>
                </div> :
                <div>
                    <input
                        onChange={onChangeStatusHandler}
                        autoFocus={true}
                        onBlur={editModeOffHandler}
                        value={props.status === null ?"" : props.status}/>
                </div>
            }
        </>
    )
}