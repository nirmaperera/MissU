import React  from 'react';

const MissingCard =props=>(
 <div className="container">
    <div className="row">
       {props.records.map((record)=>{

          return (
              <div key={record.recordid} className="col-md-4" style={{ marginBottom:"2rem" }}>
                <div className="missing__card">
                  <p><strong>First Name: </strong>{record.fields.firstname} </p>
                  <p><strong>Last Name: </strong> {record.fields.lastname} </p> 
                  <p><strong>Last seen on: </strong> {record.fields.dateoflastcontact}</p>
                  <p><strong>Last seen in: </strong> {record.fields.cityoflastcontact},{record.fields.statedisplaynameoflastcontact} </p>
                  <p><strong>For more information visit:</strong> <a> {record.fields.link} </a> </p>
                  <button className="tip"> Leave a tip </button>

                 </div>
              </div>

            );
         })}

      
     </div>
  </div>

);

export default MissingCard;