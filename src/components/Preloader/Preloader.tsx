import React from "react";
import loader from "../../Assets/Loading_icon.gif";
import s from "../Users/UsersClass.module.css";

export const Preloader = () => {
    return (
        <img src = {loader} height={'200px'} width={'200px'} alt = "loading" className = {s.loading}/>
    )
}