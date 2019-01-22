import { connect } from 'react-redux';
import {MissingCards} from './MissingCards';
import { search } from "../actions";


const mapStateToProps = (state) => {
    return{
        missingData: state.openData,
    }
}

const CardsConnect = connect(
    mapStateToProps,
    null
)(MissingCards);

export default CardsConnect;