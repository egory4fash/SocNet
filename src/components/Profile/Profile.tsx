import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/State";


export type ProfilePropsType = {
    profile:ProfileType,
    status:string | null


}



function Profile(props:ProfilePropsType) {


    return (
        <div>
            <ProfileInfo profile = {props.profile}
            status = {props.status}/>
            <MyPostsContainer  />
        </div>
    )
}

export default Profile;