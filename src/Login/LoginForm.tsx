import React from 'react'


export const LoginForm = (props:any) => {
    return (
        <>

            <form>
                <div>
                    <input placeholder={'login'}/>
                </div>
                <div>
                    <input placeholder={'password'}/>
                </div>
                <div>
                    <input type={"checkbox"} />remember me
                </div>
                <div>
                    <button >Log In</button>
                </div>
            </form>
        </>
    )
}