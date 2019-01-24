import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import Header from "./Header";
import "../styles/App.css";
import { connect } from 'react-redux';
import axios from "axios";


class Profile extends Component{
	renderContent(){
		axios.get('/api/current_user')
	  .then(res=>{
			return <h1>res.name</h1>
		});
	}
	render(){
		return(
		      <div className="App">
              <h1>Profile of </h1>{this.props.value.storeState.auth.name}
           </div>
        );
	}
}



export default Profile;
