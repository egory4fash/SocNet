import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./Login/Login"
import {useDispatch, useSelector} from "react-redux";
import {initializeAPPThunkCreator} from "./redux/AppReducer";
import {ReduxStateType} from "./redux/Redux-Store";
import {Preloader} from "./components/Preloader/Preloader";


function App() {
    const initialized = useSelector((state: ReduxStateType) => state.app.initialized)
    const isLoggedIn = useSelector((state: ReduxStateType) => state.auth.isLogined)
    const dispatch = useDispatch()

    const DialogsContainer = React.lazy(()=> import("./components/Dialogs/DialogsContainer"))
    const UsersContainer = React.lazy(()=> import("./components/Users/UsersContainer"))

    useEffect(() => {
        dispatch(initializeAPPThunkCreator())
    }, [dispatch])

    return (

        initialized ?
            <BrowserRouter>
                <div className="app-wrapper">
                    {isLoggedIn ? <>
                        <HeaderContainer/>
                        <Navbar/>
                        <div className='app-wrapper-content'>
                            <Switch>
                                <React.Suspense fallback={<Preloader/>}>
                                <Route exact path='/'
                                       render={() => <ProfileContainer/>}/>
                                <Route path="/Dialogs"
                                       render={() => <DialogsContainer/>}/>

                                <Route path="/Profile/:userId?"
                                       render={() => <ProfileContainer/>}/>

                                <Route path="/Users"
                                       render={() => <UsersContainer/>}/>

                                <Route path="/login"
                                       render={() => <Login/>}/>
                                </React.Suspense>
                            </Switch>
                        </div>
                    </> : <Login/> }

                </div>
            </BrowserRouter>
            :
            <Preloader/>
    )
}


export default App;
