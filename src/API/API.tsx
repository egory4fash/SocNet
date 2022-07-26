import axios from "axios";
import {ProfileType} from "../redux/State";



const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY":'4c1f8e2e-911c-4c20-9e00-c61208faf7aa'
    }
})



type UsersType = {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: {
        small: string | null,
        large: string | null
    },
    status: string | null,
    followed: boolean
}

type GetUsersResponseType = {
    items:Array<UsersType>,
    totalCount: number,
    error: string | null
}

export const API = {
    getUsers  (currentPage:number = 1,pageSize:number = 10)  {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
            return response.data})
    },

    follow (userId:number) {
        return instance.post(`follow/${userId}`)
            .then(responce => {
            return responce.data
        })
    },

    unfollow (userId:number) {
        return instance.delete(`follow/${userId}`)
            .then(responce => {
            return responce.data
        })
    },



    getProfile (userId:number) {
        return profileAPI.getProfile(userId)
        }

}

export const profileAPI = {

    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(responce => {
            return responce.data
        })
    },
    getStatus(userId:number) {
        return instance.get(`profile/status/${userId}`)
            .then(res => {
                return res.data
            }
        )

    },
    updateStatus(status:string) {
        return instance.put(`profile/status`,{status:status})
    }
}

export const authAPI = {
    auth () {
        return instance.get('auth/me')
            .then(responce => {
            return responce.data
        })
    },
    login (email:string,password:string,rememberMe:boolean) {
        return instance.post('auth/login',{email,password,rememberMe })
            .then(res => {
                return res.data
            })
    },
    logout ()  {
        return instance.delete('auth/login')
            .then(res => {
                return res.data
            })

}
}




