import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux'
import rootReducer from './store/reducers/root'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk';

import axios from 'axios';
import {BASE_URL} from "./api-urls";
axios.defaults.baseURL = BASE_URL;


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();