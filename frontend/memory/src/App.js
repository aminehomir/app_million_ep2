import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import ProtectedRoute from './auth/ProtectedRoute';
import Login from "./participant/login";
import LoginAdmin from "./admin/Login";
import Listvalide from "./admin/ValidateParticipant";
import SignUp from "./participant/signup";
import Groupe from "./groupe/groupe";
import Addgroupe from "./groupe/addgroupe";
import Joingroup from "./groupe/joinGroup";
import game from "./game/gamestart";
import winner from "./game/Winner";

function App() {
  return (<Router>
    <div className="App">
     

      
      <div className="auth-wrapper">
        <div className="container">
      <Switch>
      <Route exact path='/listvalide' component={Listvalide} />
      <ProtectedRoute path='/groupe' exact component={Groupe} />
      {/* <Route exact path='/groupe' component={Groupe} /> */}
      <Route exact path='/addgroupe' component={Addgroupe} />
      <Route exact path='/joingroup' component={Joingroup} />
      <Route exact path='/game' component={game} />
      <Route exact path='/winner' component={winner} />
      </Switch>
      </div>
       
      
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/login" component={LoginAdmin} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
      
      </div>
    </div></Router>
  );
}

export default App;
