import React from "react";
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";

type myPostsPropsType = {
    postsData: Array<{ id: number, message: string, likesCount: number }>
}


function MyPosts(props: myPostsPropsType) {


    const postElements = props.postsData.map(elem =>
        <Posts id={elem.id} message={elem.message} likesCount={elem.likesCount}/>)


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