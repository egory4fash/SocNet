import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./Login/Login"
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {useDispatch, useSelector} from "react-redux";
import {initializeAPPThunkCreator} from "./redux/AppReducer";
import {ReduxStateType} from "./redux/Redux-Store";
import {Preloader} from "./components/Preloader/Preloader";



function App() {
const initialized = useSelector( (state:ReduxStateType) =>state.app.initialized)
    const dispatch = useDispatch()

    useEffect( () => {
dispatch(initializeAPPThunkCreator())
    },[dispatch])

    return (
        initialized?
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


            :<Preloader/>
    )
}


export default App;
