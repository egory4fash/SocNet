import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import {AppReducer} from "./AppReducer";




export type ReduxStateType = ReturnType<typeof reducersBatch>
export type StoreType = typeof store


export let reducersBatch = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer,
    sidebar:SidebarReducer,
    usersPage:UsersReducer,
    auth:AuthReducer,
    form: formReducer,
    app:AppReducer
})

export let store: Store<ReduxStateType> = createStore(reducersBatch,applyMiddleware(thunk))

//@ts-ignore
window.store = store



