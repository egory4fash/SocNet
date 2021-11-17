import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type profilePropsType = {
    postsData: Array<{ id: number, message: string, likesCount: number }>
}

function Profile(props: profilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    )
}

export default Profile;