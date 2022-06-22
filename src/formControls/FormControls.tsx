import React from 'react'
import s from './FormControls.module.css'


export const CustomTextArea = (props: any) => {
    const errorMode = props.meta.touched && props.meta.error

    return (
        <>
            <div>
                <textarea className={errorMode && s.error} {...props.input} > </textarea>
            </div>
            {errorMode && <span>{props.meta.error}</span>}
        </>
    )
}


export const CustomInput = (props: any) => {
    const errorMode = props.meta.touched && props.meta.error

    return (
        <>
            <div>
                <input className={errorMode && s.error} {...props.input} />
            </div>
            {errorMode && <span>{props.meta.error}</span>}
        </>
    )
}