import React from 'react';

const Form =props=>(
 <div className="form">
      <form onSubmit={props.getMissing} style={{marginBottom:"2rem"}}> 
        <input className="form__input"type="text" name="firstName" placeholder="Enter First Name"/>
       
        
        <button className="form__button"> Search</button>

      </form>
            
  </div>


);

export default Form;