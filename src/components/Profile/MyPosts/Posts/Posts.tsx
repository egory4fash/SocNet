import classes from "./Posts.module.css";
import React from "react";

function Posts(props: any) {
    return (

        <div className={classes.item}>
            <img src='https://www.nj.com/resizer/iqV2J-QFgh0227ybHBor4exTVBk=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg' />
            <div>{props.message}</div>
            <div><span>'likes: {props.likes}</span></div>

        </div>
    )
};

export default Posts;