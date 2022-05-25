import {PostsType, ProfilePageType, ProfileType,} from "./State";
import {Dispatch} from "redux";
import {profileAPI} from "../API/API";


export type ProfilePageActionType = updateMessageACType |
    addPostACType |
    setUserProfileACType |
    setProfileStatusACType


type updateMessageACType = ReturnType<typeof updateMessage>
type addPostACType = ReturnType<typeof addPost>
type setUserProfileACType = ReturnType<typeof setUserProfile>
type setProfileStatusACType = ReturnType<typeof setProfileStatus>


let initialProfileState = {
    postsData: [
        {id: 1, message: "1st post", likesCount: 12},
        {id: 2, message: "2nd post bro", likesCount: 23},
        {id: 3, message: "need 3rd?", likesCount: 45}
    ],
    newPostText: '',
    profile: {
        aboutMe: '',
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        userId: 1,
        photos: {
            small: null,
            large: null
        },
        serverStatus: null
    }


}

export const ProfileReducer = (state: ProfilePageType = initialProfileState, action: ProfilePageActionType): ProfilePageType => {
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
            return {...state, profile: action.payload.profile}
        }
        case "SET-PROFILE-STATUS": {
            return {...state, profile: {...state.profile, serverStatus: action.payload.status}}
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
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        payload: {
            profile
        }
    } as const
}
export const setProfileStatus = (status: string | null) => {
    return {
        type: "SET-PROFILE-STATUS",
        payload: {
            status
        }
    } as const
}



export const getUserProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(Number(userId)).then(data => {
            dispatch(setUserProfile(data))
        })

        profileAPI.getStatus(Number(userId)).then(status => {
            dispatch(setProfileStatus(status))
        })
    }
}

export const updateStatusThunkCreator = (status:string) => {
    return (dispatch:Dispatch) => {
        profileAPI.updateStatus(status).then(res => {
            if (res.data.resultCode === 0)
            {dispatch(setProfileStatus(status))}

        })
    }
}

