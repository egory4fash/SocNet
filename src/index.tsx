import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/Redux-Store";
import { StoreContext } from './StoreContext';




 const reRenderEntireTree = () => {
    ReactDOM.render(
<StoreContext.Provider value={store}>
            <App />
</StoreContext.Provider>
        ,
        document.getElementById('root')
    );

}
reRenderEntireTree()

// store.subscriber(reRenderEntireTree)

