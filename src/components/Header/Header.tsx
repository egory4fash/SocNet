import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from "./Header.module.css";
import {AuthDataType} from "../../redux/State";
import HeaderContainer from "./HeaderContainer";

type HeaderPropsType = {
    email:string,
    login:string
}

function Header(props:HeaderPropsType) {

    console.log(props)
    return (
        <header className={classes.header}>
            <img
                src="https://image.freepik.com/free-psd/creative-studio-business-logo-psd-template-in-steel-texture_53876-123233.jpg"/>
            <div className={classes.login}>

                <NavLink to={'/login'}>
                    {props.login}
                </NavLink></div>
        </header>
    )
}

export default Header;

