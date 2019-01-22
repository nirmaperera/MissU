import { connect } from 'react-redux';
import MissingForm from './MissingForm';
import { search } from "../actions";
import {searchThunk} from "../actions";


const mapsDispatchToProps = (dispatch) => {
    return{
        searchThunk: (searchParams) => {
            dispatch(searchThunk(searchParams));
        },
        onTextEntry: (value) => {
            dispatch({ type: 'nothing', text: value });
        }
    }
}

const FormConnect = connect(
    null,
    mapsDispatchToProps
)(MissingForm);

export default FormConnect;