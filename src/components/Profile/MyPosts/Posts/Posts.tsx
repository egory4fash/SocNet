import classes from "./Posts.module.css";
import React from "react";

type postType = {
    id: number
    message: string
    likesCount: number
}

function Posts(props: postType) {


    return (

        <div className={classes.item}>
            <img
                src='https://www.nj.com/resizer/iqV2J-QFgh0227ybHBor4exTVBk=/800x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg' alt='user face'/>
            <div>{props.message}</div>
            <div><span>Likes: {props.likesCount}</span></div>

        </div>
    )
};

export default Posts;