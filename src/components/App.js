import React, { Component } from 'react';

import {BrowserRouter,browserHistory, Route, Switch} from "react-router-dom";
import Landing from "./Landing";
import About from "./About";
import View from "./View";
import MissingForm from "./FormConnect";
import MissingCards from "./CardsConnect";
import Login from "./Login";
import Signup from "./Signup";
import Case from "./Case"
import Errors from "./Errors";


import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
         
            
            <Switch>
              <Route path="/" component={Landing} exact/>
              <Route path="/view" component={View} />
              <Route path ="/missingForm" component={MissingForm}/>
              <Route path = "/case/:case_id" component={Case}/>
              <Route path="/Login" component={Login} />
               <Route path="/Signup" component={Signup} />
              <Route component={Errors} />

            </Switch>
       
      </BrowserRouter>
    );
  }

}





export default App;