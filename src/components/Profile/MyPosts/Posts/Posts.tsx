import classes from "./Posts.module.css";
import React from "react";

function Posts() {
    return (

        <div>
            <div className={classes.item}>post1</div>
            <div className={classes.item}>post2</div>
        </div>
    )
};

export default Posts;