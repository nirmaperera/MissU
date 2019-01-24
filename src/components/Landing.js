import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import Header from "./Header";
import "../styles/App.css";




class Landing extends Component{
	render(){
		return(
		  <div className="App">

   				<div className="landing">
			    	<div className="quote-container">
				     	<p className="quotes"> "Approximately 2,300 Americans are reported missing every day. This includes both children and adults..." </p>
				     	<p>-Carole Moore </p>
				 	</div>
					<div className="btns">
					<hr/>
                     <button className="waves-effect waves-light btn-large"> <NavLink to ="/view"> View Missing People</NavLink></button>
					 <button className="waves-effect waves-light btn-large"> <NavLink to = "/missingForm"> Search Missing People</NavLink></button>
			   		</div>
              	</div>
           </div>
        );
	}
}

export default Landing;
