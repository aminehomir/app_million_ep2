import { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import React, { Component }  from 'react';

const JoinGroup = () => {

 

    const history = useHistory()

    const handleSubmit = (e) => {
      e.preventDefault();
     let codegroupe =   document.getElementById("codegroupe").value;
     console.log(codegroupe);
      let token = localStorage.getItem("token");

      let id_participant = localStorage.getItem("idParticipant");



  
   
  
      axios.put(`http://localhost:8080/G_memebrs/${codegroupe}`, {id_participant: id_participant} , {
        headers: {
          'Authorization': `Bearer ${token}` 
        }}
      )
      .then(res => {

        console.log(res.data);
        history.push('/game')
       
        
       
      })
  
    }


    return ( 
        <div className="auth-inner">
           <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            <h1>Join Group</h1>

            <form onSubmit={handleSubmit}>
       
            <div className="form-group">
                <label>code groupe</label>
                <input type="text" className="form-control" id="codegroupe" placeholder="Enter code groupe" />
            </div>

      
        
        <button type="submit" className="btn" className="btn btn-primary btn-block">Join group </button>
      </form>
        </div>
     );
}
 
export default JoinGroup;