import React from "react";
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";

function MyPosts() {
    return (

        <div>My posts
            <textarea className={classes.item}></textarea>
            <button>Add post</button>
            <Posts message = "Hi,how are you?" likes = '15'/>
            <Posts message = "It's my first post" likes = '20'/>
        </div>
    )
}

export default MyPosts;