import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {AddMessageForm, AddMessageFormDataType} from "../../../Dialogs/Message/AddMessageForm";


export type AddPostFormDataType = {
    message: string
}


export const AddPostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

                <Field
                    component='textarea' name='NewPostBody' placeholder='Post something'>
                </Field>

            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm<AddPostFormDataType>({
    form: 'profileAddPostForm'
})(AddPostForm)