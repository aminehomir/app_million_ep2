
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";

import React, { Component }  from 'react';



const Login = () => {
  
    const Submit = (e) => {
        e.preventDefault();
    
    let request = {
        phone: document.getElementById("phone").value,
        password: document.getElementById("password").value
    }
    axios.post('http://localhost:8080/Participant/login', request)
    .then(res => {

       console.log(res);
       let token= res.data.token;
       let idparticipant= res.data.id;

       localStorage.setItem("token",token); 
       console.log(idparticipant);     
        localStorage.setItem("idParticipant", idparticipant);
             window.location.replace('http://localhost:3000/groupe');  
     
        // alert(res.data.message);  
      
        
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
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <form onSubmit={Submit} >
            <h3>Sign In</h3>

            <div className="form-group">
                <label>phone</label>
                <input type="text" className="form-control" id="phone" placeholder="phone" />
            </div>
           
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                 
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
         
        </form>
        </div>
     );
}

export default Login;