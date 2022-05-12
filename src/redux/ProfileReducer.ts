import {PostsType, ProfilePageType, ProfileType,} from "./State";
import {Dispatch} from "redux";
import {API} from "../API/API";


export type ProfilePageActionType = updateMessageACType | addPostACType | setUserProfile

type updateMessageACType = ReturnType<typeof updateMessage>
type addPostACType = ReturnType<typeof addPost>
type setUserProfile = ReturnType<typeof setUserProfile>

let initialProfileState = {
    postsData: [
        {id: 1, message: "1st post", likesCount: 12},
        {id: 2, message: "2nd post bro", likesCount: 23},
        {id: 3, message: "need 3rd?", likesCount: 45}
    ],
    newPostText: '',
    profile:{aboutMe: '',
        contacts: {
            facebook: null,
            website: null,
            vk:  null,
            twitter: null,
            instagram:  null,
            youtube:  null,
            github:  null,
            mainLink:  null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        userId: 1,
        photos: {
            small: null,
            large:  null
        }}

}

export const ProfileReducer = (state: ProfilePageType = initialProfileState, action: ProfilePageActionType):ProfilePageType => {
    switch (action.type) {
        case "UPDATE-MESSAGE": {
            let newState = {...state}
            newState.newPostText = action.updateMessage
            return newState
        }
        case "ADD-POST" : {
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let newState = {...state}
            newState.postsData.push(newPost)
            newState.newPostText = ''
            return newState
        }
        case "SET-USER-PROFILE": {
            return {...state,profile:action.payload.profile}
        }
        default:
            return state
    }

}


export const updateMessage = (updateMessage: string) => {
    return {
        type: "UPDATE-MESSAGE",
        updateMessage: updateMessage
    } as const
}


export const addPost = () => {
    return {
        type: "ADD-POST",
    } as const
}
export const setUserProfile = (profile:ProfileType) => {
    return {
        type:"SET-USER-PROFILE",
        payload: {
            profile
        }
    } as const
}

export const getUserProfileThunkCreator = (userId:string) => {
    return (dispatch:Dispatch) => {
        API.getProfile(Number(userId)).then(data => {
            dispatch(setUserProfile(data))
        })
    }

}

