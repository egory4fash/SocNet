import {ProfilePageType} from "./State";
import {addPost, deletePost, ProfileReducer} from "./ProfileReducer";

const testState:ProfilePageType =  {
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

let testMessage = 'hi test'


test('new message must be added', () => {
    let testAction = addPost(testMessage)
    let newState = ProfileReducer(testState,testAction)
    expect(newState.postsData.length).toBe(4)
})

test('new message must be correct', () => {
    let testAction = addPost(testMessage)
    let newState = ProfileReducer(testState,testAction)
    expect(newState.postsData[0].message).toBe('hi test')
})

test('post must be deleted', () => {
    let testAction = deletePost(1)
    let newState = ProfileReducer(testState,testAction)
    expect(newState.postsData.length).toBe(2)

})



