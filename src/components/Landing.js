import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import "../styles/App.css";




class Landing extends Component{
	render(){
		return(
		  <div className="App">
               <header className="App-header">
                 
                  		 <h1> Miss<span>U</span> </h1>
             </header>

			<div className="landing">
			    <div className="quote-container">
				     <p className="quotes"> "Approximately 2,300 Americans are reported missing every day. This includes both children and adults..." </p>
				     <p>-Carole Moore </p>
				 </div>
				     
				 <div className="btns">
				 	 <hr/>
                     

				     <button> <NavLink to ="/view"> View Missing People</NavLink></button>
					 <button> <NavLink to = "/missingForm"> Search Missing People</NavLink></button>
					 <button> <NavLink to ="/Login"> Login</NavLink> </button>
					 <button> <NavLink to ="/Signup"> Sign Up</NavLink> </button>


				 </div>
        		
        	</div>
        </div>

		);
	}
}

export default Landing;