import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';

type AppPropsType = {
    dialogsData: Array<{ id: number, name: string }>,
    messagesData: Array<{ id: number, message: string }>,
    postsData: Array<{ id: number, message: string, likesCount: number }>
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
                               <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>

                    <Route path='/Profile'
                           render={() => <Profile postsData={props.postsData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
