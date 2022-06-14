import React from 'react'
import {Field, reduxForm} from "redux-form";
import {FormDataType, LoginForm} from "../../../Login/LoginForm";


export const AddMessageForm = (props:any) => {
    return (

            <form onSubmit={props.handleSubmit}>
                    <Field component = 'textarea' name = 'NewMessageBody' placeholder='Enter your message'>
                </Field>
            </form>

    )
}

export const AddMessageReduxForm = reduxForm<FormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)