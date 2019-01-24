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
        return <ul><li><a href="/profile">My Profile</a></li><li><a href="/api/logout">Logout</a></li></ul>
    }
  }
  render(){
    console.log(this.props);
    return(
       <nav className="grey">
         <div className="nav-wrapper">
           <a href="/" className="left brand-logo">
             MissU
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
