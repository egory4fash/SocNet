import React from "react";
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddPostReduxForm} from "./Posts/AddPostForm";


type myPostsPropsType = {
    postsData: Array<{
        id: number,
        message: string,
        likesCount: number
    }>
    newPostText: string
    onPostChangeTest: (text: string) => void
    addPost: (newPost:string) => void
}


export function MyPosts(props: MyPostsPropsType) {


    const postElements = props.postsData.map(elem =>
        <Posts id={elem.id} message={elem.message} likesCount={elem.likesCount}/>)



    const addNewPost = (values: any) => {
        props.addPost(values.NewPostBody)
    }
    return (<div className={classes.postsBlock}>
        <h3>My posts</h3>
        <AddPostReduxForm onSubmit={addNewPost}/>
        <div className={classes.posts}>
            {postElements}
        </div>
    </div>)
}

