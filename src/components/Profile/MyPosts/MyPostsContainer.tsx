import React from "react";
import classes from "./MyPosts.module.css";
import {addPostAC, ProfilePageActionType, updateMessageAC} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/State";
import { ReduxStateType} from "../../../redux/Redux-Store";
import {Store} from "redux";

type myPostsPropsType = {
  store:Store
}


export function MyPostsContainer(props: myPostsPropsType) {

    const state = props.store.getState()
    const addPost = () => {

        props.store.dispatch(addPostAC())
        props.store.dispatch(updateMessageAC(""))
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateMessageAC(text))
    }
    console.log(state.profilePage)

    return (

        <div className={classes.postsBlock}>
            <MyPosts
                postsData={state.profilePage.postsData}
                newPostText={state.profilePage.newPostText}
                onPostChangeTest={onPostChange}
                addPost={addPost}/>
        </div>
    )
}

