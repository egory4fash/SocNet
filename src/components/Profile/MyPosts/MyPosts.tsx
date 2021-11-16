import React from "react";
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";

type postType = {
    id: number
    message: string
    likesCount: number
}

type postDataType = Array<postType>


function MyPosts() {


    const postsData = [
        {id: 1, message: "1st post",likesCount :12},
        {id: 2, message: "2nd post bro",likesCount :23},
        {id: 3, message: "need 3rd?",likesCount :45}
    ]

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