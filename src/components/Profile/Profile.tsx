import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageActionType} from "../../redux/ProfileReducer";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {Store} from "redux";


// export type profilePropsType = {
//     // postsData: Array<{ id: number, message: string, likesCount: number }>
//     // newPostText: string
//     // dispatch: (action:ProfilePageActionType) => void
//     store: Store
// }

function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}
//-------
export default Profile;