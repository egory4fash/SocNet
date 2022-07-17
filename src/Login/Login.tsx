import React from 'react'
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {loginThunkCreator} from "../redux/AuthReducer";
import {ReduxStateType} from "../redux/Redux-Store";
import {Redirect} from "react-router-dom";





export const Login = () => {

    const dispatch = useDispatch()
    const isLogined = useSelector<ReduxStateType,boolean>(state => state.auth.isLogined)

    const onSubmit = (formData:FormDataType) => {
        dispatch(loginThunkCreator(formData.email,formData.password,formData.rememberMe))
    }

    if (isLogined) {
        return <Redirect to={'/profile'} />
    }
        else {
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )}
}

