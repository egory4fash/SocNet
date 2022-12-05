import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/Redux-Store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";



const reRenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store} >
            <BrowserRouter>
            <App/>
            </BrowserRouter>
        </Provider>
        , document.getElementById('root')
    );

}
reRenderEntireTree()


// store.subscriber(reRenderEntireTree)

