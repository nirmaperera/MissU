import {SEARCH} from "../actions"


const initialState = [];


const openDataReducers = (state = initialState, action) => {
    // var temp = state;

    switch(action.type){
        case SEARCH:
            // temp.push(action.value);
            // return Object.assign([],state,temp);
            return action.value.data.records;
        default:
            return state;
    }
};



export default openDataReducers;