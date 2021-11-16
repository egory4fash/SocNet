import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const dialogsData: Array<{id:number,name:string}> = [
    {id: 1, name: "Ivan"},
    {id: 2, name: "Sergey"},
    {id: 3, name: "John"},
    {id: 4, name: "Egor"},
    {id: 5, name: "Anna"},]

const messagesData: Array<{id:number,message:string}> = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Wazzup"},
    {id: 3, message: "Yo"}
]

const postsData: Array<{id:number,message:string,likesCount:number}> = [
    {id: 1, message: "1st post",likesCount :12},
    {id: 2, message: "2nd post bro",likesCount :23},
    {id: 3, message: "need 3rd?",likesCount :45}
]

ReactDOM.render(
  <React.StrictMode>
    <App
    dialogsData = {dialogsData}
    messagesData = {messagesData}
    postsData = {postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
