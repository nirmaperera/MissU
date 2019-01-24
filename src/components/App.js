import React, { Component } from 'react';
import {BrowserRouter,browserHistory, Route, Switch} from "react-router-dom";
import Landing from "./Landing";

import View from "./View";
import MissingForm from "./FormConnect";
import MissingCards from "./CardsConnect";
import Login from "./Login";

import Case from "./Case"
import Errors from "./Errors";
import Header from "./Header";
import Profile from "./Profile";
import "../styles/App.css";
import { connect } from 'react-redux';
import * as actions from '../actions'

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (

      <div>
        <BrowserRouter>

            <div>
                <Header />
                <Route path="/" component={Landing} exact/>
                <Route path="/profile" component={Profile} />
                <Route path="/view" component={View} />
                <Route path ="/missingForm" component={MissingForm}/>
                <Route path = "/case/:case_id" component={Case}/>
                <Route path="/Login" component={Login} />
                <Route path="/case" component={Case}/>

              </div>
        </BrowserRouter>
      </div>

    );
  }

}





export default connect(null, actions)(App);
