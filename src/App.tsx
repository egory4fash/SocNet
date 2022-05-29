import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./Login/Login"
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";



function App() {

    return (
        <BrowserRouter>

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/Profile/:userId?'
                           render={() => <ProfileContainer/>}/>

                    <Route path='/Users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
