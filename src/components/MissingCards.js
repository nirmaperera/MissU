import React, {Component } from 'react';
import '../styles/App.css';

class MissingCards extends Component{
    render(){
        return (
            <div>
                {/*"cityoflastcontact",
                "countydisplaynameoflastcontact",
                "raceethnicity",
                "statedisplaynameoflastcontact",
                "gender",
                */}
                <p>{this.props.fN}</p>
                <p>{this.props.mN}</p>
                <p>{this.props.lN}</p>
                <p>{this.props.age}</p>
                <p>{this.props.dt}</p>
                <p>{this.props.lCity}</p>
                <p>{this.props.county}</p>
                <p>{this.props.raceE}</p>
                <p>{this.props.lState}</p>
                <p>{this.props.gen}</p>

            </div>
        );
    }
}

class Cards extends Component{
    render(){
        return (
            <div>
                <p>
                {
                    this.props.missingData.length
                        ?
                        this.props.missingData.map((i={}) =>
                            {



                                 return <MissingCards  fN ={i.firstname} mN = {i.fields.middlename} ln = {i.fields.lastname}
                                               age = {i.fields.computedmissingmaxage} dt = {i.fields.dateoflastcontact}
                                               lCity = {i.fields.cityoflastcontact} count = {i.fields.countydisplaynameoflastcontact}
                                               raceE = {i.fields.raceethnicity} lState = {i.fields.statedisplaynameoflastcontact}
                                               gen = {i.fields.gender}/>
                            }
                        )
                        :
                        "No Results Found"
                }
                </p>
            </div>
        );
    }
}

export default Cards;
