import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/State";




 const reRenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App dialogsPage={store._state.dialogsPage}
                 profilePage={store._state.profilePage}
                 sidebar={store._state.sidebar}
                 addPost={store.addPost}
                 addMessage={store.addMessage}
                 updateMessage={store.updateMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}
reRenderEntireTree()

store.subscriber(reRenderEntireTree)

