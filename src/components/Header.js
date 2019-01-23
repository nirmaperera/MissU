import React from 'react';
import {NavLink} from "react-router-dom";
import "../styles/App.css";

const Header=()=>{
   return(
      <div className="Header-wrapper">
        <h1 className="title"> Miss<span>U</span></h1>
        <div className="links">
          <NavLink to ="/Signup" > Sign Up</NavLink>
          <NavLink to = "/Login" > Login</NavLink>
        </div>
     </div>

    );

}

export default Header;