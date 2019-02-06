import React, { Component } from 'react';
import "../styles/App.css";
import Cards from "./MissingCards";
import axios from 'axios';

import {searchThunk} from "../actions";
import CardsConnect from "./CardsConnect";
import {Link} from "react-router-dom";


class MissingForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            cityoflastcontact: "",
            countydisplaynameoflastcontact: "",
            raceethnicity: "",
            statedisplaynameoflastcontact:"",
            gender:"",
            firstname: "",
            middlename: "",
            lastname: "",
            computedmissingmaxage: "",
            dateoflastcontact: "",
            showResults:true,
            namus2number: ""

        };
    }
    handleChangeCity(e) {
        this.setState({cityoflastcontact: e.target.value});
    }
    handleChangeCounty(e) {
        this.setState({countydisplaynameoflastcontact: e.target.value});
    }
    handleChangeRace(e) {
        this.setState({raceethnicity: e.target.value});
    }
    handleChangeState(e) {
        this.setState({statedisplaynameoflastcontact: e.target.value});
    }
    handleChangeGender(e){
        this.setState({gender:e.target.value});
    }
    handleChangeFName(e){
        this.setState({firstname:e.target.value});
    }
    handleChangeMName(e){
        this.setState({middlename:e.target.value});
    }
    handleChangeLName(e){
        this.setState({lastname:e.target.value});
    }
    handleChangeAge(e){
        this.setState({computedmissingmaxage:e.target.value});
    }
    handleChangeDate(e){
        this.setState({dateoflastcontact:e.target.value});
    }


    handleSearch(e){
        e.preventDefault();
        this.setState({ showResults: false});
        this.props.searchThunk(this.state)
        console.log(this.state)
    }


    render(){
        return(
             <div>
                 <form>
                     <div>
                         <div className="form-title">
                            <h1> Search for a Missing Person</h1>
                            <hr className="missing"/>
                         </div>
                         <div className="form-Missing">
                                <div>
                                    <label htmlFor="firstName" >First Name:</label>
                                    <input type="text" placeholder="Corceil" onChange={this.handleChangeFName.bind(this)}/>
                                </div>
                                <div>
                                    <label htmlFor="lastname"  >Last Name:</label>
                                    <input type="text" placeholder="Howard" onChange={this.handleChangeLName.bind(this)}/>
                                </div>
                    
                                <div>
                                    <label htmlFor="statedisplaynameoflastcontact" >State Display Name of Last Contact: </label>
                                    <input type="text" placeholder="MI" onChange={this.handleChangeState.bind(this)}/>
                               </div>
                                <div>
                                    <label htmlFor="gender" >Gender: </label>
                                    <input type="text" placeholder="Male" onChange={this.handleChangeGender.bind(this)}/>
                                </div>
                                <div>
                                    <button type="button" className="button-missing" onClick={this.handleSearch.bind(this)}>Search</button>
                                    
                                </div>
                             </div>

                         </div>
                     </form>


                    <div className="card-content">
                        <CardsConnect/>
                    </div>

                 </div>
        );
    }
}

export default MissingForm;