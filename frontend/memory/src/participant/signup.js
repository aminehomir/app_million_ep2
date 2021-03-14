
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import React, { Component }  from 'react';



const signup = () => {
    const Submitsignup = (e) => {
        e.preventDefault();
        let request = {
            full_name: document.getElementById("fullname").value,
            age: document.getElementById("age").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            password: document.getElementById("password").value
        }
        axios.post('http://localhost:8080/Participant/add', request)
        .then(resp => {
            alert(resp.data.message); 
            window.location.replace('http://localhost:3000/sign-in');       
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
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <form onSubmit={Submitsignup}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Full name</label>
                <input type="text" className="form-control" id="fullname" placeholder="Full name" />
            </div>

            <div className="form-group">
                <label>age</label>
                <input type="text" className="form-control" id="age" placeholder="Age" />
            </div>

            <div className="form-group">
                <label>email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>

            <div className="form-group">
                <label>Phone</label>
                <input type="phone" className="form-control" id="phone" placeholder="Phone" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
         
        </form>
        </div>
     );
}

export default signup;