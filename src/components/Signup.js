import React, { Component } from 'react';
import "../styles/Signup.css";

class Signup extends Component {
  constructor(props){
        super(props);
        this.state ={
            firstName: "",
            lastName: "",
            email: "",
            birthday:"",
            password:"",
            
        };
    }

    handleChangeFirstName(e) {
        this.setState({firstName: e.target.value});
    }
    handleChangeLastName(e) {
        this.setState({lastNamet: e.target.value});
    }
    handleChangeEmail(e) {
        this.setState({email: e.target.value});
    }
    handleChangeBirthday(e) {
        this.setState({birthday: e.target.value});
    }
    handleChangePassword(e){
        this.setState({password:e.target.value});
    }


    handleSubmit(e){
        e.preventDefault();

        
      
    }
  render() {
    return (
     <div >

       <h1 className="SignUpTitle"> Sign Up</h1>

        <div className="wrapper_sign">

      <form onSubmit={this.handleSubmit} >
      <div className="form-group">
        <label>
          First Name:
          <input type="text" placeholder="Enter the first name" class="form__input" onChange={this.handleChangeFirstName.bind(this)} />
        </label>
      </div>
      <div className="form-group">
         <label>
           Last Name:
          <input type="text" placeholder="Enter the Last name" class="form__input" onChange={this.handleChangeLastName.bind(this)} />
        </label>
       </div>
        <div className="form-group">
        <label>
          Birthday:
          <input type="text" placeholder="Enter your Birthday"class="form__input" onChange={this.handleChangeBirthday.bind(this)} />
        </label>
        </div>
       <div className="form-group">
         <label>
           email:
          <input type="text" placeholder="Enter the Email" class="form__input" onChange={this. handleChangeEmail.bind(this)} />
        </label>
       </div>
       <div className="form-group">
        <label>
          Password:
          <input type="text" placeholder="Enter Password"class="form__input"  onChange={this.handleChangePassword.bind(this)} />
        </label>
      </div>
       <div className="form-group">
        <input type="submit" value="Submit" />
      </div>
      </form>
    </div>
    </div>
    );
  }
}

export default Signup;