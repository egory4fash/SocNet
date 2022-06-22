import React from 'react'
import s from './FormControls.module.css'


export const CustomTextArea = (props: any) => {
    const errormode = props.meta.touched && props.meta.error

    return (
        <>
            <div>
                <textarea className={errormode && s.error} {...props.input} ></textarea>
            </div>
            {errormode && <span>{props.meta.error}</span>}
        </>
    )
}