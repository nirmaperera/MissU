import React, { Component } from 'react';
import "../styles/App.css";
import Cards from "./MissingCards";
import {NavLink} from "react-router-dom";
import axios from 'axios';

const API_KEY = "710ddfbf1a4611dfe147f8cb6416999f0a9008a6bf1a6b947d346f70";

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



            data:[]
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
        this.setState({gender:e.target.value});
    }
    handleChangeMName(e){
        this.setState({gender:e.target.value});
    }
    handleChangeLName(e){
        this.setState({gender:e.target.value});
    }
    handleChangeAge(e){
        this.setState({gender:e.target.value});
    }
    handleChangeDate(e){
        this.setState({gender:e.target.value});
    }

    apiCall() {
        let url = "https://public.opendatasoft.com/api/records/1.0/search/?dataset=namus-missings&sort=modifieddatetime&facet=cityoflastcontact&facet=countydisplaynameoflastcontact&facet=raceethnicity&facet=statedisplaynameoflastcontact&facet=gender&facet=firstname&facet=middlename&facet=lastname&facet=computedmissingmaxage&facet=dateoflastcontact"
        if(this.state.cityoflastcontact && this.state.cityoflastcontact !== ""){
            url = url +"&refine.cityoflastcontact="+this.state.cityoflastcontact;
        }
        if(this.state.countydisplaynameoflastcontact !== ""){
            url = url + "&refine.countydisplaynameoflastcontact=" + this.state.countydisplaynameoflastcontact;
        }
        if(this.state.statedisplaynameoflastcontact !== ""){
            url = url + "&refine.statedisplaynameoflastcontact=" + this.state.statedisplaynameoflastcontact;
        }
        if(this.state.gender !== ""){
            url = url + "&refine.gender=" + this.state.gender;
        }
        if(this.state.firstname !== ""){
            url = url + "&refine.firstname=" + this.state.firstname;
        }
        if(this.state.middlename !== ""){
            url = url + "&refine.middlename=" + this.state.middlename;
        }
        if(this.state.lastname !== ""){
            url = url + "&refine.lastname=" + this.state.lastname;
        }
        if(this.state.dateoflastcontact !== ""){
            url = url + "&refine.dateoflastcontact=" + this.state.dateoflastcontact;
        }
        if(this.state.raceethnicity !== ""){
            url = url + "&refine.raceethnicity=" + this.state.raceethnicity;
        }
        if(this.state.raceethnicity !== ""){
            const race = this.state.raceethnicity.split(" ").join("+");
            url = url + "&refine.raceethnicity=" + race;
        }
        if(this.state.computedmissingmaxage !== ""){
            url = url + "&refine.computedmissingmaxage=" + this.state.computedmissingmaxage;
        }

        return url;
    }
    handleSearch(e){
        e.preventDefault();

        let url = this.apiCall.call(this);
        axios.get(url)
            .then(response => {
                this.setState({data: response.data.records});

                console.log(response.data.records);
            })
            .catch(err => {
                this.setState({data: []})
                console.log(err)
            })
    }
    render(){
        return(
          <form>
            <div>
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

              <Cards
                  missingData = {this.state.data}
              />
            </div>
          </form>
        );
    }
}

export default MissingForm;