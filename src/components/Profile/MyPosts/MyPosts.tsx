import React from "react";
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";


type myPostsPropsType = {
    postsData: Array<{
        id: number,
        message: string,
        likesCount: number
    }>
    newPostText: string
    onPostChangeTest: (text: string) => void
    addPost: () => void
}


export function MyPosts(props: MyPostsPropsType) {


    const postElements = props.postsData.map(elem =>
        <Posts id={elem.id} message={elem.message} likesCount={elem.likesCount}/>)

    const NewPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        props.addPost()
    }

    const onPostChangeHandler = () => {
        let text = NewPostElement.current ? NewPostElement.current.value : ""
        props.onPostChange(text)
    }
    return (<div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div><textarea
            onChange={onPostChangeHandler} ref={NewPostElement}
            className={classes.item}
            value={props.newPostText}>

            </textarea></div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={classes.posts}>
            {postElements}
        </div>
    </div>)
}

