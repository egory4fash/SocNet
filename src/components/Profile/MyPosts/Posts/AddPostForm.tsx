import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { maxLenghtCreator, requiredField} from "../../../../validators/validators";
import {CustomTextArea} from "../../../../formControls/FormControls";


export type AddPostFormDataType = {
    message: string
}

let maxLength = maxLenghtCreator(10)
export const AddPostForm: React.FC<InjectedFormProps<AddPostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

                <Field
                    component={CustomTextArea}
                    name='NewPostBody'
                    placeholder='Post something'
                    validate={[requiredField,maxLength]}>
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