import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from "./Header.module.css";


type HeaderPropsType = {
    email: string,
    login: string,
    isLogined: boolean
    logOut: () => void

}

function Header(props: HeaderPropsType) {


    return (
        <header className={classes.header}>
            <img
                src="https://image.freepik.com/free-psd/creative-studio-business-logo-psd-template-in-steel-texture_53876-123233.jpg"
                alt={'logo'}/>
            <div className={classes.login}>
                {props.isLogined ?
                    <div>
                        {props.login}
                        <div><button onClick={props.logOut}>Log out</button></div>
                    </div>
                    :
                    <NavLink to={'/login'}>

                    </NavLink>
                }
            </div>

        </header>
    )
}

export default Header;

