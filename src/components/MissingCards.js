import React, {Component } from 'react';
import '../styles/App.css';
import "../styles/MissingCards.css";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";

export class MissingCards extends Component{
    render(){
        return (

            <div className="container" >


                <p>First Name: {this.props.fN}</p>
                <p>Middle Name: {this.props.mN}</p>
                <p>Last Name: {this.props.lN}</p>
                <p>Age: {this.props.age}</p>
                <p>Date of Last Contact: {this.props.dt}</p>
                <p>City of Last Contact: {this.props.lCity}</p>
                <p>Country of Last Contact: {this.props.county}</p>
                <p>Race/Ethnicity: {this.props.raceE}</p>
                <p>State of Last Contact: {this.props.lState}</p>
                <p>Gender: {this.props.gen}</p>
                <p>Case Number: {this.props.namusId}</p>

                <Link to={'/case/'+ this.props.namusId}>
                <button type="button">Add Tip</button>
                </Link>

            </div>

        );
    }
}

class Cards extends Component{
    render(){
        return (
            <div className= "row row align-items-end" style={{marginBottom: "2rem"}}>
                <div className="missing__card">
                <p>

                {

                    this.props.missingData.length
                        ?
                        this.props.missingData.map((i={}) =>
                            {


                                    return <MissingCards  fN ={i.fields.firstname} mN = {i.fields.middlename} lN = {i.fields.lastname}
                                               age = {i.fields.computedmissingmaxage} dt = {i.fields.dateoflastcontact}
                                               lCity = {i.fields.cityoflastcontact} count = {i.fields.countydisplaynameoflastcontact}
                                               raceE = {i.fields.raceethnicity} lState = {i.fields.statedisplaynameoflastcontact}
                                               gen = {i.fields.gender} namusId = {i.fields.namus2number}/>

                            }
                        )
                        :
                        "Waiting for data"
                }

                </p>
            </div>
            </div>
        );
    }
}

export default Cards;
