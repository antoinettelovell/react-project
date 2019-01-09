import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from
"react-router-dom";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import WebsiteList from "./components/website/WebsiteList";
class App extends Component {
  render() {     
    return (
        <Router>
            <div className="body">
              <Switch>
              <Route exact path= "/login"
               component={Login} />
              <Route exact path= "/register"
               component={Register} /> 
              <Route exact path= "/profile" 
              component={Profile} />
              <Route exact path= "/user/:uid/website"
              component={WebsiteList}/>

              </Switch>
            </div> 
        </Router>
    );
  }
}

export default App;
