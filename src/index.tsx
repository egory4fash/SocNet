import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {State, subscriber, updateMessage} from "./redux/State";
import {addPost} from "./redux/State";
import {addMessage} from "./redux/State";


 const reRenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App dialogsPage={State.dialogsPage}
                 profilePage={State.profilePage}
                 sidebar={State.sidebar}
                 addPost={addPost}
                 addMessage={addMessage}
                 updateMessage={updateMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}
reRenderEntireTree()

subscriber(reRenderEntireTree)

