import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import "../styles/Login.css";

class Login extends Component {
	constructor(props){
        super(props);
        this.state ={
            
            email: "",
            password:"",
            
        };
    }

  handleGetEmail(e) {
        this.setState({email: e.target.value});
    }
  handleGetPassword(e) {
        this.setState({password: e.target.value});
    }

	handleSubmit(e){
        e.preventDefault();

        
      
    }
    render(){
    	return(
        <div>
        <h1 className="LoginTitle"> Login</h1>
        <div className="wrapper">
      <div>
      <form onSubmit={this.handleSubmit}  className="LoginForm">
       <div className="form-group">
        <label>
           Email:
          <input type="text" placeholder="Enter Email" class="form__input" onChange={this.handleGetEmail.bind(this)} />
        </label>
       </div>
       <div className="form-group">
        <label>
          Password:
          <input type="text" placeholder="Enter Password"class="form__input"  onChange={this.handleGetPassword.bind(this)} />
        </label>
      </div>
       <div className="form-group">
        <input type="submit" value="Gmail Login" className="loginBtn" />
      </div>

       <div class="form-group">
         <NavLink to ="/Signup" > Have an account already?</NavLink>
       </div>

      </form>

      </div>
    </div>

    </div>

    	);
    }


}


export default Login;