import React, {Component } from 'react';
import '../styles/App.css';
import "../styles/MissingCards.css";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";

export class MissingCards extends Component{
    render(){
        return (

            <div className="col-md-4" >
                 <div className="missing__card">

                <p><strong className="strong">First Name: </strong>{this.props.fN}</p>
                <p><strong className="strong">Middle Name: </strong>{this.props.mN}</p>
                <p><strong className="strong">Last Name:</strong> {this.props.lN}</p>
                <p><strong className="strong">Age: </strong>{this.props.age}</p>
                <p><strong className="strong">Date of Last Contact:</strong> {this.props.dt}</p>
                <p><strong className="strong">City of Last Contact:</strong> {this.props.lCity}</p>
                <p><strong className="strong">Country of Last Contact:</strong> {this.props.county}</p>
                <p><strong className="strong">Race/Ethnicity:</strong> {this.props.raceE}</p>
                <p><strong className="strong">State of Last Contact:</strong> {this.props.lState}</p>
                <p><strong className="strong">Gender:</strong> {this.props.gen}</p>
                <p><strong className="strong">Case Number:</strong> {this.props.namusId}</p>

                <Link to={'/case/'+ this.props.namusId}>
                <button type="submit" className="tip" >Add Tip</button>
                </Link>
                </div>

            </div>

        );
    }
}

class Cards extends Component{
    render(){
        return (
            <div className= "row row align-items-end" style={{marginBottom: "2rem"}}>
                
                <p>

                {

                
                        this.props.missingData.map((i={}) =>
                            {


                                    return <MissingCards  fN ={i.fields.firstname} mN = {i.fields.middlename} lN = {i.fields.lastname}
                                               age = {i.fields.computedmissingmaxage} dt = {i.fields.dateoflastcontact}
                                               lCity = {i.fields.cityoflastcontact} count = {i.fields.countydisplaynameoflastcontact}
                                               raceE = {i.fields.raceethnicity} lState = {i.fields.statedisplaynameoflastcontact}
                                               gen = {i.fields.gender} namusId = {i.fields.namus2number}/>

                            }
                        )
                        
                }

                </p>
            </div>
        
        );
    }
}

export default Cards;
