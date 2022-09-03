import React from 'react'
import {useSelector} from "react-redux";
import {RootStateType} from "../../../../redux/State";
import {StatusFunctional} from "./StatusFunctional";


export type StatusPropsType = {
    status: string | null,
    updateStatus:(status:string) => void,
    myID:number
}

export const StatusContainer =(props:any) => {

    const myID = useSelector( (state:RootStateType ) =>state.auth.data.id)
    return (
        <StatusFunctional status={props.status} updateStatus={props.updateStatus} myID = {myID} />
    )
}