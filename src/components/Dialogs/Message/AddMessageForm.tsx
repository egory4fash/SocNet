import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type AddMessageFormDataType = {
    message:string
}


export const AddMessageForm:React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return (

            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component = 'textarea' name = 'NewMessageBody' placeholder='Enter your message'/>
                </div>
                <div>
                    <button>send</button>
                </div>
            </form>

    )
}

export const AddMessageReduxForm = reduxForm<AddMessageFormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)