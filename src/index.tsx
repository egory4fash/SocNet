import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/Redux-Store";




 const reRenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state = {store.getState()}
                 dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}
reRenderEntireTree()

// store.subscriber(reRenderEntireTree)

