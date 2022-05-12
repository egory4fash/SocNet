import React from "react";
import loader from "../../Assets/Loading_icon.gif";
import s from "../Users/UsersClass.module.css";

export const Preloader = () => {
    return (
        <img src = {loader} alt = "loading" className = {s.loading}/>
    )
}