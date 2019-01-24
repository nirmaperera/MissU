import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import Header from "./Header";
import "../styles/App.css";
import axios from 'axios';



class Profile extends Component{
	constructor(props){
	    super(props);
	    this.state = {
				nameOfProfile: "",
				data:[]
	    }

	  }

	componentDidMount(){
    this.initialFetch();
		this.fetchAllTips();
  }

	initialFetch(){
    fetch(`/api/current_user`)
        .then( (response) => (response.json()))
        .then( (myResponse) => {
					console.log(myResponse);
					this.setState({nameOfProfile: myResponse.name});
          // const urlArr = myResponse.data.map( (obj) => {
          //   return <li>obj</li>
          // });

        })
        .catch( err => console.log("Error", err) );
  }
	fetchAllTips(){
		fetch(`/api/missingpeoples/tips/mine`)
				.then( (response) => (response.json()))
				.then( (myResponse) => {

					this.setState({data: myResponse});
					console.log(this.state.data);


				})
				.catch( err => console.log("Error", err) );
	}

	render(){
		const allTips = this.state.data.map( (obj) => {
			 return <li className="collection-item">Case Number: {obj.caseNumber}  Update at:  {obj.updatedAt}</li>
		});
		return(
		      <div className="App">
							<ul className="collection with-header"><li class="collection-header"><h4>Welcome, {this.state.nameOfProfile}</h4></li><li class="collection-header"><h4>Tips given:</h4></li>{allTips}</ul>
							<h3>Add More Tips</h3>
							<a class="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">Add</i></a>
           </div>
        );
	}
}

export default Profile;
