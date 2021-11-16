import React from "react";
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";




function MyPosts() {




    const postElements = postsData.map( elem =>
        <Posts id = {elem.id} message={elem.message} likesCount ={elem.likesCount}/>)



    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div><textarea className={classes.item}></textarea></div>
            <div>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;