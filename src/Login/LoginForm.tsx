import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {CustomInput} from "../formControls/FormControls";
import {requiredField} from "../validators/validators";
import s from './../formControls/FormControls.module.css'



export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({error,handleSubmit}) => {
    console.log(error)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    Email
                    <Field
                        placeholder='123456'
                        component={CustomInput}
                        name={'email'}
                        validate={[requiredField]}/>
                    Password
                </div>
                <div>
                    <Field
                        type={'password'}
                        component={CustomInput}
                        name={'password'}
                        validate={[requiredField]}/>
                </div>
                <div>
                    <Field
                        type={"checkbox"}
                        component={'input'}
                        name={'rememberMe'}/>remember me
                </div>

                {error && <div className = {s.summaryError}>{error}</div>}
                <div>
                    <button>Log In</button>
                </div>
            </form>
        </>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)