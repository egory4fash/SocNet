import React from "react";
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";



function MyPosts() {

    const postsData = [
        {id: 1, message: "1st post",likesCount :12},
        {id: 2, message: "2nd post bro",likesCount :23},
        {id: 3, message: "need 3rd?",likesCount :45}
    ]

    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div><textarea className={classes.item}></textarea></div>
            <div>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Posts message={postsData[0].message} likes ={postsData[0].likesCount}/>
                <Posts message={postsData[1].message} likes ={postsData[1].likesCount}/>
                <Posts message={postsData[2].message} likes ={postsData[2].likesCount}/>

            </div>
        </div>
    )
}

export default MyPosts;