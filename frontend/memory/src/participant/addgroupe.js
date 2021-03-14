import React, { Component } from "react";
import axios from 'axios' ; 

export default class SignUp extends Component {
    render() {
        return (
            <div className="auth-inner">
                
            <form onSubmit={(e) => signup(e)}>
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
                    <label>Email address</label>
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
}

function signup(e){
    
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
    })
    .catch(err => {
        console.log(err);
    })
}