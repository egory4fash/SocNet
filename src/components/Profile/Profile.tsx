import React from "react";
import classes from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageActionType} from "../../redux/ProfileReducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type profilePropsType = {
    postsData: Array<{ id: number, message: string, likesCount: number }>
    newPostText: string
    dispatch: (action:ProfilePageActionType) => void
}

function Profile(props: profilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                postsData={props.postsData}
                newPostText={props.newPostText}
                dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;