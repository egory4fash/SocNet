import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {CustomInput} from "../formControls/FormControls";
import {requiredField} from "../validators/validators";



export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <>

            <form onSubmit={props.handleSubmit}>
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