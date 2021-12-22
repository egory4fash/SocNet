import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/State";




 const reRenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state = {store.getState()}
                 addPost={store.addPost.bind(store)}
                 addMessage={store.addMessage.bind(store)}
                 updateMessage={store.updateMessage.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}
reRenderEntireTree()

store.subscriber(reRenderEntireTree)

