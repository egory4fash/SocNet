import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



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
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Dialogs'
                           render={() =>
                               <DialogsContainer/>}/>

                    <Route path='/Profile/:userId?'
                           render={() => <ProfileContainer/>}/>

                    <Route path='/Users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/Login'
                           render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
