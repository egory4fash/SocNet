import React from "react";
import Posts from "./Posts/Posts";
import classes from "./MyPosts.module.css";
import {DispatchActionType} from "../../../redux/State";

type myPostsPropsType = {
    postsData: Array<{ id: number, message: string, likesCount: number }>
    newPostText:string
    dispatch: (action:DispatchActionType) => void
}


function MyPosts(props: myPostsPropsType) {


    const postElements = props.postsData.map(elem =>
        <Posts id={elem.id} message={elem.message} likesCount={elem.likesCount}/>)

    const NewPostElement:React.RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {

        props.dispatch({type:"ADD-POST"})
        props.dispatch({type:"UPDATE-MESSAGE",updateMessage:''})
    }

    const onPostChange = () => {
        let text = NewPostElement.current ? NewPostElement.current.value : ""
        props.dispatch({type:"UPDATE-MESSAGE",updateMessage:text})
    }
    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div><textarea
                onChange={onPostChange} ref = {NewPostElement}
                           className={classes.item}
                           value={props.newPostText}>

            </textarea></div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;