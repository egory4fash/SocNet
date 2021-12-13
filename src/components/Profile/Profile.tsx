import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type profilePropsType = {
    postsData: Array<{ id: number, message: string, likesCount: number }>
    addPost: () => void
    newPostText: string
    updateMessage: (updateMessage: string) => void
}

function Profile(props: profilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postsData={props.postsData}
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateMessage={props.updateMessage}/>
        </div>
    )
}

export default Profile;