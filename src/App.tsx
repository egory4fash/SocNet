import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {DispatchActionType, RootStateType} from "./redux/State";

type Poststype = {
    id: number
    message: string
    likesCount: number
}
type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string

}

type ProfilePageType = {
    postsData: Array<Poststype>
    newPostText: string
}

type DialogsPageType = {
    messagesData: Array<MessagesType>
    dialogsData: Array<DialogsType>
}
type SidebarType = {}


type AppPropsType = {
   state:RootStateType
    dispatch: (action:DispatchActionType) => void
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs'
                           render={() =>
                               <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                        messagesData={props.state.dialogsPage.messagesData}
                                        dispatch={props.dispatch}/>}/>

                    <Route path='/Profile'
                           render={() => <Profile postsData={props.state.profilePage.postsData}
                                                  dispatch={props.dispatch}
                                                  newPostText={props.state.profilePage.newPostText}
                                                 />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
