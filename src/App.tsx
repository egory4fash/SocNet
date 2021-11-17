import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';

type Poststype = {
    id:number
    message: string
    likesCount: number
}
type MessagesType = {
    id:number
    message:string}
type DialogsType = {
    id:number
    name: string

}

type ProfilePageType = {
    postsData:Array<Poststype>
}

type DialogsPageType = {
    messagesData: Array<MessagesType>
    dialogsData:Array<DialogsType>
}
type SidebarType = {}


type AppPropsType = {
    profilePage:ProfilePageType
    dialogsPage: DialogsPageType
    sidebar:SidebarType
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
                               <Dialogs dialogsData={props.dialogsPage.dialogsData}
                                        messagesData={props.dialogsPage.messagesData}/>}/>

                    <Route path='/Profile'
                           render={() => <Profile postsData={props.profilePage.postsData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
