import React from 'react'
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {useDispatch} from "react-redux";
import {loginThunkCreator} from "../redux/AuthReducer";





export const Login = () => {

    const dispatch = useDispatch()

    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
        dispatch(loginThunkCreator(formData.email,formData.password,formData.rememberMe))

    }
    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

