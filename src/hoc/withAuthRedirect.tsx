import React, {ComponentType} from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {RootStateType} from "../redux/State";

type mapStateToPropsType = {
    isLoggined:boolean
}

const mapStateToProps = (state:RootStateType):mapStateToPropsType => {
    return {
    isLoggined:state.auth.isLogined}

}

export function WithAuthRedirect <T>(Component:ComponentType<T>)  {
    const RedirectComponent = (props:mapStateToPropsType) => {
        let {isLoggined,...restProps} = props
        if (!isLoggined) return <Redirect to='/login' />
        return <Component {...restProps as T}/>
    }

    let connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return connectedRedirectComponent
}