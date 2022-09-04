import React, {ChangeEvent, useEffect, useState} from 'react'


type StatusFucnPropsType = {
    status: string | null,
    updateStatus: (status: string) => void,
    myID: number,
    profileID: number
}

export const StatusFunctional = (props: StatusFucnPropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)


    const editModeOnHandler = () => {
        if (props.myID === props.profileID) {
            setEditMode(true)
        }
    }
    const editModeOffHandler = () => {

        setEditMode(false)
        props.updateStatus(status ? status : '')
    }
    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)

    }

    let statusValue = status === null ? "no status yet" : props.status

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


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
                        value={status === null ? "" : status}/>
                </div>
            }
        </>
    )
}