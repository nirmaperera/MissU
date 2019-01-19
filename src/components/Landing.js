import React, { Component } from 'react';
import "../styles/App.css";



class Landing extends Component{
	render(){
		return(
			<div className="landing">
			    <div className="quote">
				     <p> Quote </p>
				 </div>
				     
				 <div className="btns">
				 	 <hr/>
				     <button> View Missing People</button>
				     <button> Search Missing People</button>
			     </div>
        		
        	</div>

		);
	}
}

export default Landing;