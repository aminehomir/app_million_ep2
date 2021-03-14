
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
    axios.post('http://localhost:8080/Admin/login', request)
    .then(res => {

       console.log(res);
       let tokenadmin= res.data.token;
      

       localStorage.setItem("tokenadmin",tokenadmin); 
      //  console.log(token);     
       
             window.location.replace('http://localhost:3000/listvalide');  
     
        // alert(res.data.message);  
      
        
    })
    
    }

    return ( 
        <div className="auth-inner">
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