import { combineReducers } from 'redux';
import openData from './openDataReducer';
//import eachCase from './CaseReducer'

export default combineReducers({
    openData,
    auth: authReducer
})
