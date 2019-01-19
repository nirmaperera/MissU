import React, { Component } from 'react';
import {BrowserRouter,browserHistory, Route, Switch} from "react-router-dom";
import Landing from "./Landing";
import About from "./About";
import View from "./View";
import Search from "./Search";
import Errors from "./Errors";


import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
         
            
            <Switch>
              <Route path="/" component={Landing} exact/>
              <Route path="/view" component={View} />
              <Route path="/search" component={Search} />
              <Route component={Errors} />
            </Switch>
       
      </BrowserRouter>
    );
  }
}





export default App;