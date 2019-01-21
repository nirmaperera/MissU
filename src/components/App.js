import React, { Component } from 'react';
import {BrowserRouter, browserHistory, Route, Switch} from "react-router-dom";
import Landing from "./Landing";
import "../styles/App.css";
import MissingForm from "./MissingForm";
import Cards from "./MissingCards";

class App extends Component {
	render() {
		return (
			<BrowserRouter>


				<Switch>
					<Route path="/" component={Landing} exact/>
					<Route path ="/missingForm" component={MissingForm}/>
					{/*<Route path = "/cards" component = {Cards}/>*/}
				</Switch>

			</BrowserRouter>
		);
	}
}

export default App;