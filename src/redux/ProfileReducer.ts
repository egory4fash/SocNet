import { PostsType, ProfilePageType,} from "./State";

export const update_Message = "UPDATE-MESSAGE"
export const add_Post = "ADD-POST"

export type ProfilePageActionType = updateMessageACType | addPostACType
type updateMessageACType = ReturnType<typeof updateMessageAC>
type addPostACType = ReturnType<typeof addPostAC>

export const ProfileReducer = (state: ProfilePageType, action: ProfilePageActionType) => {
    switch (action.type) {
        case "UPDATE-MESSAGE": {
            state.newPostText = action.updateMessage
            return state
        }
        case "ADD-POST" : {
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ""
            return state
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


