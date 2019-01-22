import React, { Component } from 'react';
import "../styles/App.css";
import Cards from "./MissingCards";
import axios from 'axios';
import {searchThunk} from "../actions";
import CardsConnect from "./CardsConnect";

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
        console.log(this.state)
    }


    render(){
        return(
            <div>
          <form>
            <div>
                <div className="form">
                <div>
                    <label htmlFor="firstName" >First Name:</label>
                    <input type="text" placeholder="Corceil" onChange={this.handleChangeFName.bind(this)}/>
                </div>
                <div>
                    <label htmlFor="middlename" >Middle Name:</label>
                    <input type="text" placeholder="Ricardo" onChange={this.handleChangeMName.bind(this)}/>
                </div>
                <div>
                    <label htmlFor="lastname"  >Last Name:</label>
                    <input type="text" placeholder="Howard" onChange={this.handleChangeLName.bind(this)}/>
                </div>
                <div>
                    <label htmlFor="computedmissingmaxage" >Age:</label>
                    <input type="text" placeholder="28" onChange={this.handleChangeAge.bind(this)}/>
                </div>
                <div>
                    <label htmlFor="dateoflastcontact" >Date of Last Contact:</label>
                    <input type="text" placeholder="2003-06-01" onChange={this.handleChangeDate.bind(this)}/>
                </div>

                <div>
                    <label htmlFor="cityoflastcontact" >City of Last Contact:</label>
                    <input type="text" placeholder="Detroit" required onChange={this.handleChangeCity.bind(this)}/>
                </div>

                <div>
                    <label htmlFor="countydisplaynameoflastcontact" >County Display Name of Last Contact:</label>
                    <input type="text" placeholder="Wayne" onChange={this.handleChangeCounty.bind(this)}/>
                </div>

                <div>
                    <label htmlFor="raceethnicity">Race/Ethnicity: </label>
                    <input type="text" placeholder="Black African American" onChange={this.handleChangeRace.bind(this)}/>
                </div>

                <div>
                    <label htmlFor="statedisplaynameoflastcontact" >State Display Name of Last Contact: </label>
                    <input type="text" placeholder="MI" onChange={this.handleChangeState.bind(this)}/>
                </div>

                <div>
                    <label htmlFor="gender" >Gender: </label>
                    <input type="text" placeholder="Male" onChange={this.handleChangeGender.bind(this)}/>
                </div>

                <button type="button" className="button" onClick={this.handleSearch.bind(this)}>Search</button>
              </div>

            </div>
          </form>
            <CardsConnect/>
          </div>
        );
    }
}

export default MissingForm;