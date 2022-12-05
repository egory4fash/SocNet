import axios, {AxiosResponse} from "axios";
import {AuthDataType, ProfileType} from "../redux/State";




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
export type CommonResponseType = {
    data:AuthDataType ,
    messages: Array<string>,
    fieldsErrors: Array<string>,
    resultCode: number
}
type LoginType = {
    email:string
    password:string
    rememberMe?: boolean
    captcha?:boolean
}



export const API = {
    getUsers  (currentPage:number = 1,pageSize:number = 10)  {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
            return response.data})
    },

    follow (userId:number) {
        return instance.post<CommonResponseType>(`follow/${userId}`)
            .then(responce => {
            return responce.data
        })
    },

    unfollow (userId:number) {
        return instance.delete<CommonResponseType>(`follow/${userId}`)
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
        return instance.get<string>(`profile/status/${userId}`)
            .then(res => {
                return res.data
            }
        )

    },
    updateStatus(status:string) {
        return instance.put<{ status: string }, AxiosResponse<CommonResponseType>>(`profile/status`,{status:status})
    }
}

export const authAPI = {
    auth () {
        return instance.get<CommonResponseType>('auth/me')
            .then(responce => {
            return responce.data
        })
    },
    login (email:string,password:string,rememberMe:boolean) {
        return instance.post<LoginType,AxiosResponse<CommonResponseType>>('auth/login',{email,password,rememberMe })
            .then(res => {
                return res.data
            })
    },
    logout ()  {
        return instance.delete<CommonResponseType>('auth/login')
            .then(res => {
                return res.data
            })

}
}




