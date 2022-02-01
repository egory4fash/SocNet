import React from "react";
import classes from "./MyPosts.module.css";
import {addPostAC, ProfilePageActionType, updateMessageAC} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../redux/State";
import {ReduxStateType} from "../../../redux/Redux-Store";
import {Store} from "redux";
import {StoreContext} from "../../../StoreContext";

// type myPostsPropsType = {
//   store:Store
// }


export function MyPostsContainer() {

    // const state = props.store.getState()
    // const addPost = () => {
    //
    //     props.store.dispatch(addPostAC())
    //     props.store.dispatch(updateMessageAC(""))
    // }
    //
    // const onPostChange = (text: string) => {
    //     props.store.dispatch(updateMessageAC(text))
    // }
    //

    // @ts-ignore
    return (
        <StoreContext.Consumer> {
            (store) => {
                const state = store.getState()
                const addPost = () => {

                    store.dispatch(addPostAC())
                    store.dispatch(updateMessageAC(""))
                }

                const onPostChange = (text: string) => {
                    store.dispatch(updateMessageAC(text))
                }

                return <div className={classes.postsBlock}>

                    <MyPosts
                        postsData={state.profilePage.postsData}
                        newPostText={state.profilePage.newPostText}
                        onPostChangeTest={onPostChange}
                        addPost={addPost}/>
                </div>
            }}
        </StoreContext.Consumer>
    )
}

