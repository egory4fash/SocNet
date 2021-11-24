import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {State} from "./redux/State";
import {addPost} from "./redux/State";
import {addMessage} from "./redux/State";


ReactDOM.render(
  <React.StrictMode>
    <App dialogsPage={State.dialogsPage}
         profilePage={State.profilePage}
         sidebar={State.sidebar}
         addPost = {addPost}
      addMessage = {addMessage}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
