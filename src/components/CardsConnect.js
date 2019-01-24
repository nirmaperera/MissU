import { connect } from 'react-redux';
import Cards from "./MissingCards";


const mapStateToProps = (state) => {
    return{
        missingData: state.openData,
    }
}

const CardsConnect = connect(
    mapStateToProps,
    null
)(Cards);

export default CardsConnect;