import {PostsType, ProfilePageType, ProfileType,} from "./State";
import {Dispatch} from "redux";
import {profileAPI} from "../API/API";

enum PROFILE_ACTIONS {
    ADD_POST='PROFILE/ADD-POST',
    SET_USER_PROFILE='PROFILE/SET-USER-PROFILE',
    SET_PROFILE_STATUS='PROFILE/SET-PROFILE-STATUS',
    DELETE_POST='PROFILE/DELETE-POST'
}


export type ProfilePageActionType =
    addPostACType |
    setUserProfileACType |
    setProfileStatusACType |
    deletePostACType




type addPostACType = ReturnType<typeof addPost>
type setUserProfileACType = ReturnType<typeof setUserProfile>
type setProfileStatusACType = ReturnType<typeof setProfileStatus>
type deletePostACType = ReturnType<typeof deletePost>


let initialProfileState = {
    postsData: [
        {id: 1, message: "1st post", likesCount: 12},
        {id: 2, message: "2nd post bro", likesCount: 23},
        {id: 3, message: "need 3rd?", likesCount: 45}
    ],
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
        }
    },serverStatus: null


}

 const ProfileReducer = (state: ProfilePageType = initialProfileState, action: ProfilePageActionType): ProfilePageType => {
    switch (action.type) {

        case PROFILE_ACTIONS.ADD_POST : {
            const newPost: PostsType = {
                id: 5,
                message: action.payload.newPostText,
                likesCount: 0
            }
            return {...state, postsData: [newPost,...state.postsData]}
        }
        case PROFILE_ACTIONS.SET_USER_PROFILE: {
            return {...state, profile: action.payload.profile}
        }
        case PROFILE_ACTIONS.SET_PROFILE_STATUS: {
            return  {...state, serverStatus: action.payload.status}
        }
        case PROFILE_ACTIONS.DELETE_POST: {
            return  {...state,postsData:[...state.postsData].filter( f => f.id !== action.payload.postId)}
        }
        default:
            return state
    }
}


export const addPost = (newPostText:string) => {
    return {
        type: PROFILE_ACTIONS.ADD_POST,
        payload: {
            newPostText
        }

    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: PROFILE_ACTIONS.SET_USER_PROFILE,
        payload: {
            profile
        }
    } as const
}
export const setProfileStatus = (status: string | null) => {
    return {
        type: PROFILE_ACTIONS.SET_PROFILE_STATUS,
        payload: {
            status
        }
    } as const
}
export const deletePost = (postId:number) => {
    return {
        type: PROFILE_ACTIONS.DELETE_POST,
        payload: {
            postId
        }
    } as const
}



export const getUserProfileThunkCreator = (userId: string) => {
    return async (dispatch: Dispatch) => {
        let data = await profileAPI.getProfile(Number(userId))
            dispatch(setUserProfile(data))
        let status = await profileAPI.getStatus(Number(userId))
            dispatch(setProfileStatus(status))
    }
}

export const updateStatusThunkCreator = (status:string) => {
    return async (dispatch:Dispatch) => {
        let res = await profileAPI.updateStatus(status)
            if (res.data.resultCode === 0)
            {dispatch(setProfileStatus(status))}
    }
}

export default ProfileReducer
