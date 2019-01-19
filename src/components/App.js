import React, { Component } from 'react';
import Landing from "./Landing";
import About from "./About";
import "../styles/App.css";

class App extends Component{
	render(){
		return(
			<div className="App">
        		<header className="App-header">
            		<h1> MissU </h1>
        		</header>

        		<Landing/>
        		<About/>
        	</div>

		);
	}
}

export default App;