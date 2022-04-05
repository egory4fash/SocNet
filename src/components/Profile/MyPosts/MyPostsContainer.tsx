import React from "react";
import {addPost, updateMessage} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import { PostsType, RootStateType} from "../../../redux/State";


import {connect} from "react-redux";
import {Dispatch} from "redux";




export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    postsData: Array<PostsType>
    newPostText:string
}
type mapDispatchToPropsType = {
    onPostChange: (text: string) => void
    addPost: () => void
}


const mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onPostChange: (text: string) => {
            dispatch(updateMessage(text))
        },
        addPost: () => {
            dispatch(addPost())
            dispatch(updateMessage(""))
        }
    }

}

export const MyPostsContainer = connect<mapStateToPropsType,mapDispatchToPropsType,
    {},
        RootStateType >(mapStateToProps, mapDispatchToProps)(MyPosts)
