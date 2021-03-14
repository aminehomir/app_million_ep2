
import axios from 'axios';
import { Link, useHistory, withRouter } from "react-router-dom";
import React, { Component }  from 'react';




const addgroup = () => {
    // const usehistory = useHistory()
    const Submitaddgroup = (e) => {
        
        e.preventDefault();
     
        let participantToken = localStorage.getItem("token");
        let id_participant = localStorage.getItem('idParticipant');
        console.log(participantToken);
        let request = {
            groupe_code: document.getElementById("codegroupe").value,
            id_participant: id_participant
        }
        axios.post('http://localhost:8080/G_memebrs/add', request,{
            headers: {
              'Authorization': `Bearer ${participantToken}` 
            }})
        .then(res => {
            let group_id = res.data.id;
            console.log(group_id);
             localStorage.setItem("group_code", group_id);
         

           window.location.replace('http://localhost:3000/joingroup');       
        })
        .catch(err => {
            console.log(err);
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
        <form onSubmit={Submitaddgroup}>
            <h3>ajouter un groupe</h3>

         

            <div className="form-group">
                <label>code groupe</label>
                <input type="text" className="form-control" id="codegroupe" placeholder="Enter code groupe" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">add groupe</button>
         
        </form>
        </div>
     );
}

export default addgroup;