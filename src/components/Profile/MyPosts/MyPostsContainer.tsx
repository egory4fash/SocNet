import React from "react";
import {addPost} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import { PostsType, RootStateType} from "../../../redux/State";


import {connect} from "react-redux";
import {Dispatch} from "redux";




export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    postsData: Array<PostsType>

}
type mapDispatchToPropsType = {
    // onPostChange: (text: string) => void
    addPost: (newPost:string) => void
}


const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        // onPostChange: (text: string) => {
        //     dispatch(updateMessage(text))
        // },
        addPost: (newPost:string) => {
            console.log('newPost, ',newPost)
            dispatch(addPost(newPost))

        }
    }

}

export const MyPostsContainer = connect<mapStateToPropsType,mapDispatchToPropsType,
    {},
        RootStateType >(mapStateToProps, mapDispatchToProps)(MyPosts)
