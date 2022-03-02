import {UsersType} from "./State";

export type UsersActionType = ChangeFollowACType
export type ChangeFollowACType = ReturnType<typeof changeFollowAC>

export const changeFollow = "CHANGE-FOLLOW"


let initialUsersState = [
    {id:1,followed:true,fullName:"Egor",status:"No brain-no pain",location:{city:"Verkhnedvinsk",country:"Belarus"}},
    {id:2,followed:false,fullName:"Anna",status:"Anime RULEZ",location:{city:"Vitebsk",country:"Belarus"}},
    {id:3,followed:true,fullName:"Dina",status:"------",location:{city:"Kyiv",country:"Ukraine"}},
]

export const SidebarReducer = (state:UsersType = initialUsersState,action:UsersActionType) => {
    switch (action.type) {
        case changeFollow :{
            let newState = [...state]
            return newState.map(m => m.id === action.payload.id ? {...m,followed:!followed}:{...m})
        }
    }
    return state
}

export const changeFollowAC=(id:number) => {
    return {
        type:changeFollow,
        payload:{
            id,
        }
    }
}

