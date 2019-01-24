import { combineReducers } from 'redux';
import openData from './openDataReducer';
import authReducer from './authReducer';
//import eachCase from './CaseReducer'

export default combineReducers({
    openData,
    auth: authReducer
})
