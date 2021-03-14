import {  useHistory,withRouter } from "react-router-dom";

// import axios from 'axios';
import React, { Component }  from 'react';
import { Link } from "react-router-dom";




const groupe = () => {
  
  

    return ( 
        <div className="row justify-content-md-center">
           <div className="col-md-3">
             <div clasName="square-service-block">
             
             <Link to={'/addgroupe'}>
                 <button className="button-grp"><i class="fas fa-user"></i>créer un nouveau groupe
               
                </button>
                </Link>
             </div>
           </div>
          
           <div className="col-md-3">
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
             <div className="square-service-block">
             <Link to={'/joingroup'}>
                 <div className="ssb-icon"> <i className="fa fa-globe" aria-hidden="true"></i> </div>
                 <button className="button-grp" >rejoindre un groupe
                 </button>
                 </Link>
             </div>
          </div>
             </div>
     );
}

export default groupe;