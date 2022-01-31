import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SidebarReducer} from "./SidebarReducer";


export type ReduxStateType = ReturnType<typeof reducersBatch>


export let reducersBatch = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer,
    sidebar:SidebarReducer
})

export let store = createStore(reducersBatch)


