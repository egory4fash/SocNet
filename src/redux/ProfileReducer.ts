import {PostsType, ProfilePageType,} from "./State";

export const update_Message = "UPDATE-MESSAGE"
export const add_Post = "ADD-POST"

export type ProfilePageActionType = updateMessageACType | addPostACType

type updateMessageACType = ReturnType<typeof updateMessageAC>
type addPostACType = ReturnType<typeof addPostAC>

let initialProfileState = {
    postsData: [
        {id: 1, message: "1st post", likesCount: 12},
        {id: 2, message: "2nd post bro", likesCount: 23},
        {id: 3, message: "need 3rd?", likesCount: 45}
    ],
    newPostText: ''

}

export const ProfileReducer = (state: ProfilePageType = initialProfileState, action: ProfilePageActionType) => {
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
        default:
            return state
    }

}


export const updateMessageAC = (updateMessage: string) => {
    return {
        type: update_Message,
        updateMessage: updateMessage
    } as const
}


export const addPostAC = () => {
    return {
        type: add_Post,
    } as const
}


