import React, { Component } from 'react';

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
      <form onSubmit={this.handleSubmit} >
       <div className="form-group">
        <label>
           email:
          <input type="text" placeholder="Enter the Email" class="form__input" onChange={this.handleGetEmail.bind(this)} />
        </label>
       </div>
       <div className="form-group">
        <label>
          Password:
          <input type="text" placeholder="Enter Password"class="form__input"  onChange={this.handleGetPassword.bind(this)} />
        </label>
      </div>
       <div className="form-group">
        <input type="submit" value="Submit" />
      </div>

      </form>

    	);
    }


}


export default Login;