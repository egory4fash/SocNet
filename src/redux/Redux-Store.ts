import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from "redux";
import {SidebarReducer} from "./SidebarReducer";
import {UsersReducer} from "./UsersReducer";
import thunk, {ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import AuthReducer from "./AuthReducer";
import DialogsReducer from "./DialogsReducer";
import AppReducer from "./AppReducer";
import ProfileReducer from "./ProfileReducer";
import { composeWithDevTools } from "redux-devtools-extension";





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

// export let store: Store<ReduxStateType> = createStore(reducersBatch,applyMiddleware(thunk))
export type AppThunk = ThunkAction<void, ReduxStateType, unknown, AnyAction>
export const store: Store<ReduxStateType> = createStore(reducersBatch, composeWithDevTools(
    applyMiddleware(thunk)))
//@ts-ignore
window.store = store



