import React ,{Component} from 'react';
import Cards from "./MissingCards";
import {connect} from 'react-redux';
import {addThunk} from "../actions";

class Case extends Component{
    constructor(props){
        super(props);
        this.state = {
            tip: "",
            caseNumber: props.data.fields.namus2number
        }
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleChange(e) {
        this.setState({tip: e.target.value});
    }
    handleAdd(e){
        e.preventDefault();
        // console.log("I'VE BEEN CLICKED");
        this.props.addThunk(this.state);
        //console.log(this.props.data.fields.namus2number)


        console.log(this.state);
        console.log(typeof(this.state));
        this.handleReset();

    }

    handleReset(e) {
        this.setState({
            tip: ""
        })
    }

    render(){
        const data = this.props.data ? (
            <div className = "data">
                <p>First Name: {this.props.data.fields.firstname}</p>
                <p>Middle Name: {this.props.data.fields.middlename}</p>
                <p>Last Name: {this.props.data.fields.lastname}</p>
                <p>Age: {this.props.data.fields.computedmissingmaxage}</p>
                <p>Date of Last Contact: {this.props.data.fields.dateoflastcontact}</p>
                <p>City of Last Contact: {this.props.data.fields.cityoflastcontact}</p>
                <p>Country of Last Contact: {this.props.data.fields.countydisplaynameoflastcontact}</p>
                <p>Race/Ethnicity: {this.props.data.fields.raceethnicity}</p>
                <p>State of Last Contact: {this.props.data.fields.statedisplaynameoflastcontact}</p>
                <p>Gender: {this.props.data.fields.gender}</p>
                <p>Case Number: {this.props.data.fields.namus2number}</p>

            </div>
        ):(
            <div className = "center">Loading post ...</div>
        )

        return (
            <div>
                <h4>{data}</h4>
                <form id="tip-form" onSubmit={this.handleAdd}>
                    <textarea form="tip-form" col="19" rows="8" placeholder="Add a tip here" onChange={this.handleChange.bind(this)} value={this.state.tip}></textarea>
                    <button type="submit" className="tip">Submit</button>
                </form>
            </div>
        );

    }
}
const mapStatetoProps = (state,ownProps) => {
    let id = ownProps.match.params.case_id;
    let matchingRecords = state.openData.filter(data => data && data.fields && data.fields.namus2number === id);
    let matchingRecord = false;
    if(matchingRecords && matchingRecords.length && matchingRecords[0]){
        matchingRecord = matchingRecords[0];
    }
    return {
        data: matchingRecord
    }

}

const mapsDispatchToProps = (dispatch) => {
    return{
        addThunk: (params) => {
            dispatch(addThunk(params));
        },
        onTextEntry: (value) => {
            dispatch({ type: 'nothing', text: value });
        }
    }
}

export default connect(mapStatetoProps,mapsDispatchToProps)(Case);
