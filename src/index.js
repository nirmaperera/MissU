import 'materialize-css/dist/css/materialize.min.css';
import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./components/App";
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';


const middleware =  applyMiddleware(thunk)
const store = createStore(
    reducers,
        middleware
);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));
