import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case 'PLUS_ONE':{

            return{
                ...state,
                result: state.result+1
            }
        }
        case 'MINUS_ONE':{
            return{
                ...state,
                result: state.result-1
            }

        }
        case 'RESET':{
            return{
                ...state,
                result: 0
            }
        }
        case 'PLUS_HUNDRED':
            return {
                ...state,
                result: state.result+100
            }
        case 'MINUS_HUNDRED':
            return {
                ...state,
                result: state.result-100
            }
        case 'ADD_NUM':
            return {
                ...state,
                result: state.result+action.payload
            }
        default:{
            return state
        }
    }
}

const initialState={
    result:0
}


const store=createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
