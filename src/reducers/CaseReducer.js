import {Post} from "../actions";

const initialState = [];

const caseReducer = (state=initialState,action) => {
    var temp = state;
    switch(action.type){
        case POST:
             temp.push(action.value);
             return Object.assign([],state,temp);
        default:
            return state;
    }
}

export default caseReducer;