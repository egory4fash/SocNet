import React from "react";
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";


function MyPosts() {
    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div><textarea className={classes.item}></textarea></div>
            <div>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Posts message="Hi,how are you?" likes='15'/>
                <Posts message="It's my first post" likes='20'/>
            </div>
        </div>
    )
}

export default MyPosts;