import { combineReducers } from 'redux';
import openData from './openDataReducer';
import authReducer from './authReducer';

export default combineReducers({
    openData,
    auth: authReducer
})
