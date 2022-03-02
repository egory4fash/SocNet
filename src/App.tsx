import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {DispatchActionType, RootStateType} from "./redux/State";
import {Store} from "redux";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import { Users } from './components/Users/Users';

// type Poststype = {
//     id: number
//     message: string
//     likesCount: number
// }
// type MessagesType = {
//     id: number
//     message: string
// }
// type DialogsType = {
//     id: number
//     name: string
//
// }

// type ProfilePageType = {
//     postsData: Array<Poststype>
//     newPostText: string
// }
//
// type DialogsPageType = {
//     messagesData: Array<MessagesType>
//     dialogsData: Array<DialogsType>
// }
// type SidebarType = {}


// export type AppPropsType = {
//     state: RootStateType
//     dispatch: (action: DispatchActionType) => void
//     store: Store
// }


function App() {

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs'
                           render={() =>
                               <DialogsContainer/>}/>

                    <Route path='/Profile'
                           render={() => <Profile/>}/>

                    <Route path='/Users'
                           render={() => <Users/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
