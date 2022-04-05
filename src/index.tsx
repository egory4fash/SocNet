import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/Redux-Store";
import {Provider} from "react-redux";



const reRenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store} >
            <App/>
        </Provider>
        , document.getElementById('root')
    );

}
reRenderEntireTree()


// store.subscriber(reRenderEntireTree)

