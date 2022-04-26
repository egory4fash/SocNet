import axios from "axios";


const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY":'4c1f8e2e-911c-4c20-9e00-c61208faf7aa'
    }
})

export const API = {
    getUsers  (currentPage:number = 1,pageSize:number = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => {
            return response.data})
    },

    follow (userId:number) {
        return instance.post(`follow/${userId}`).then(responce => {
            return responce.data
        })
    },

    unfollow (userId:number) {
        return instance.delete(`follow/${userId}`).then(responce => {
            return responce.data
        })
    },

    auth () {
        return instance.get('auth/me').then(responce => {
            return responce.data
        })
    },

    getProfile (userId:string) {
        return instance.get(`profile/${userId}`).then(responce => {
            return responce.data
            debugger
        })
    }


}




