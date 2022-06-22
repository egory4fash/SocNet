import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {CustomTextArea} from "../../../formControls/FormControls";
import {maxLenghtCreator, requiredField} from "../../../validators/validators";


export type AddMessageFormDataType = {
    message:string
}

let maxLength = maxLenghtCreator(20)
export const AddMessageForm:React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {


    return (

            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component ={CustomTextArea}
                           name = 'NewMessageBody'
                           placeholder='Enter your message'
                           validate={[requiredField,maxLength]}/>
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