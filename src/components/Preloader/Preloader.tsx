import React from "react";
import loader from "../../Assets/logo192.png";
import s from "../Users/UsersClass.module.css";

export const Preloader = () => {
    return (
        <img src = {loader} alt = "loading" className = {s.loading}/>
    )
}