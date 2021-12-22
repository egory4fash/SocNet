import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchActionType} from "../../redux/State";

type profilePropsType = {
    postsData: Array<{ id: number, message: string, likesCount: number }>
    newPostText: string
    dispatch: (action:DispatchActionType) => void
}

function Profile(props: profilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData}
                newPostText={props.newPostText}
                dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;