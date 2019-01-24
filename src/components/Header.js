import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "../styles/App.css";
import { connect } from 'react-redux';

class Header extends Component{
  renderContent(){
    switch(this.props.auth){
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>
      default:
        return <li><a href="/api/logout">Logout</a></li>
    }
  }
  render(){
    console.log(this.props);
    return(
       <nav className="grey">
         <div className="nav-wrapper">
           <a href="/" className="center brand-logo">
             Miss<span>U </span>
           </a>
           <ul className="right">
             {this.renderContent()}
           </ul>
         </div>
      </nav>
    );
  }
}
function mapStateToProps({auth}){
  return { auth };
}
export default connect(mapStateToProps)(Header);
