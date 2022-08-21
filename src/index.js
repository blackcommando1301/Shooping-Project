import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {createStore} from "redux";
import reducer from "./Redux/reducer";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
 let myStore=createStore(reducer);
root.render(
  <Provider store={myStore}>
    <App />
    </Provider>
);

