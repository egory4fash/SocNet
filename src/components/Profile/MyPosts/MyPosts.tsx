import React from "react";
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";

function MyPosts() {
    return (

        <div>My posts
            <textarea className={classes.item}></textarea>
            <button>Add post</button>
            <Posts/>
        </div>
    )
}

export default MyPosts;