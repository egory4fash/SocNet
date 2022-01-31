import React from "react";
import classes from "./MyPosts.module.css";
import {addPostAC, ProfilePageActionType, updateMessageAC} from "../../../redux/ProfileReducer";

type myPostsPropsType = {
    postsData: Array<{ id: number, message: string, likesCount: number }>
    newPostText: string
    dispatch: (action: ProfilePageActionType) => void
}


function MyPosts(props: myPostsPropsType) {


    const addPost = () => {
        props.dispatch(addPostAC())
        props.dispatch(updateMessageAC(""))
    }

    const onPostChange = (text: string) => {
        props.dispatch(updateMessageAC(text))
    }


    return (

        <div className={classes.postsBlock}>
            <MyPosts
                postsData={props.postsData}
                newPostText={props.newPostText}
                onPostChange={onPostChange}
                addpost={addPost}/>
        </div>
    )
}

export default MyPosts;