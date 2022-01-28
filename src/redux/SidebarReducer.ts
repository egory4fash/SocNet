import {SidebarType} from "./State";

export type SidebarActionType = any

let initialSidebarState = {}

export const SidebarReducer = (state:SidebarType = initialSidebarState,action:SidebarActionType) => {
return state
}