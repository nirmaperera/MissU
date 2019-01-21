import React, { Component } from 'react';
import "../styles/App.css";
import {NavLink} from "react-router-dom";



class Landing extends Component{
	render(){
		return(
			<div className="landing">
			    <div className="quote">
				     <p> Quote </p>
				 </div>
				     
				 <div className="btns">
				 	 <hr/>
					 <button>  View Missing People</button>
				     <button> <NavLink to = "/missingForm"> Search Missing People</NavLink></button>
			     </div>
        		
        	</div>

		);
	}
}

export default Landing;