import React ,{Component} from 'react';
import Cards from "./MissingCards";
import {connect} from 'react-redux';
import {addThunk} from "../actions";

import "../styles/Tips.css";

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
                <p><strong>First Name:</strong> {this.props.data.fields.firstname}</p>
                <p><strong>Middle Name: </strong>{this.props.data.fields.middlename}</p>
                <p><strong>Last Name:</strong> {this.props.data.fields.lastname}</p>
                <p><strong>Age:</strong> {this.props.data.fields.computedmissingmaxage}</p>
                <p><strong>Date of Last Contact:</strong> {this.props.data.fields.dateoflastcontact}</p>
                <p><strong>City of Last Contact:</strong> {this.props.data.fields.cityoflastcontact}</p>
                <p><strong>Country of Last Contact:</strong> {this.props.data.fields.countydisplaynameoflastcontact}</p>
                <p><strong>Race/Ethnicity:</strong> {this.props.data.fields.raceethnicity}</p>
                <p><strong>State of Last Contact: </strong>{this.props.data.fields.statedisplaynameoflastcontact}</p>
                <p><strong>Gender:</strong> {this.props.data.fields.gender}</p>
                <p><strong>Case Number: </strong>{this.props.data.fields.namus2number}</p>

            </div>
        ):(
            <div className = "center">Loading post ...</div>
        )

        return (
            <div>
                <h1 className="tip-title"> Have you seen {this.props.data.fields.firstname}?</h1>
                 <div className="tip-wrapper">
                <h4>{data}</h4>
                <form className="data" onSubmit={this.handleAdd}>
                    <textarea form="tip-form" col="19" rows="8" placeholder="Add a tip here" onChange={this.handleChange.bind(this)} value={this.state.tip}></textarea>
                    <button type="submit" className="tip">Submit</button>
                </form>
                </div>
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
