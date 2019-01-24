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

        this.props.searchThunk(this.state)
        console.log(this.state.gender)
    }


    render(){
        return(
<<<<<<< HEAD
            <div>
          <form>
            <div>
               <div className="form-title">
                  <h1> Search for a Missing Person</h1>
                </div>
                <div className="form-Missing">
                <div>
                    <label htmlFor="firstName" >First Name:</label>
                    <input type="text" placeholder="Corceil" onChange={this.handleChangeFName.bind(this)}/>
=======
            <div className ="row">
          <form  className = "col s12">
            <div className = "row">
                <div className="input-field col s6">

                    <input id="first_name" type="text" className="validate" onChange={this.handleChangeFName.bind(this)}/>
                    <label htmlFor="first_name">First Name:</label>

>>>>>>> 5958bcdb9920a6fe947c174cc80d279dcee223cc
                </div>
                <div className="input-field col s6">
                    <input id="middle_name" type="text" className="validate" onChange={this.handleChangeMName.bind(this)}/>
                    <label htmlFor="middle_name" >Middle Name:</label>
                </div>
                <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate" onChange={this.handleChangeLName.bind(this)}/>
                    <label htmlFor="last_name"  >Last Name:</label>

                </div>
                <div className="input-field col s6">
                    <input id="age" type="text" className="validate"  onChange={this.handleChangeAge.bind(this)}/>
                    <label htmlFor="age" >Age:</label>

                </div>
                <div className="input-field col s6">
                    <input id="dateoflastcontact" type="text" className="validate" onChange={this.handleChangeDate.bind(this)}/>
                    <label htmlFor="dateoflastcontact" >Date of Last Contact:</label>

                </div>

                <div className="input-field col s6">
                    <label htmlFor="cityoflastcontact" >City of Last Contact:</label>
                    <input type="text"  required onChange={this.handleChangeCity.bind(this)}/>
                </div>

                <div className="input-field col s6">
                    <label htmlFor="countydisplaynameoflastcontact" >County Display Name of Last Contact:</label>
                    <input type="text"  onChange={this.handleChangeCounty.bind(this)}/>
                </div>

                <div className="input-field col s6">
                    <label htmlFor="raceethnicity">Race/Ethnicity: </label>
<<<<<<< HEAD
                    <input type="text" placeholder="Black / African American" onChange={this.handleChangeRace.bind(this)}/>
=======
                    <input type="text"  onChange={this.handleChangeRace.bind(this)}/>
>>>>>>> 5958bcdb9920a6fe947c174cc80d279dcee223cc
                </div>

                <div className="input-field col s6">
                    <label htmlFor="statedisplaynameoflastcontact" >State Display Name of Last Contact: </label>
                    <input type="text"  onChange={this.handleChangeState.bind(this)}/>
                </div>


<<<<<<< HEAD
                <button type="button" className="button-missing" onClick={this.handleSearch.bind(this)}>Search</button>
              </div>
=======
                <div className="input-field col s6">
                    <select onChange={this.handleChangeGender.bind(this)}>
                    <option selected>Gender</option>
                   // <option value="" disabled selected>Choose your option</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    </select>
                    <label>Gender</label>
                </div>
>>>>>>> 5958bcdb9920a6fe947c174cc80d279dcee223cc

                <div>
                    <button type="button" className="button" onClick={this.handleSearch.bind(this)}>Search</button>
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