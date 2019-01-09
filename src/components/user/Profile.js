import React, { Component } from 'react'
import Axios from 'axios';
import {Link}  from "react-router-dom";

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      errors: {},
      success: false,
      password: ""
    };
  }
    
  onChange = e => {
    this.setState({
    [e.target.name]: e.target.value
  });
}

componentDidMount(){
  this.loggedIn();
}

loggedIn = async ()  => {
  const res = await Axios.post("/api/loggedIn");
   if(res.data === 0) {
    this.props.history.push("/login");
  } else{
      const {username, email, firstName,
      lastName, password, _id} =
      res.data;

      this.setState({
       username,
       email,
       firstName,
       lastName,
       password,
       _id
    }); 
  }
}


logout = async () => {
    await Axios.post("/api/logout");
    this.props.history.push("/login");
}

onSubmit = e => {
  e.preventDefault();
  const {
    username,
     email,
      firstName,
    lastName,
     password,
    _id 
  } = this.state;
    const newUser = {
     _id,
     username, 
     password,
     email,firstName,
     lastName
   };
   console.log(newUser)
   this.updateUser(newUser);
}

updateUser = async newUser => {
    await Axios.put("/api/user", newUser)
    this.setState({
      success: true
    });
};

  render() {
    const {
      _id,
      username, 
      email,
       firstName,
        lastName, 
        errors,
         success
    }= this.state;
        
    return (
    <div>
        <nav className="navbar navbar-dark bg-primary fixed-top">
          <Link to="/profile"
          className="navbar-brand">
          <b>Profile</b>
          </Link>         
           <button
            className= "btn color-white bg-transparent"
            type="submit"
             form="myForm">
             <i className="fas fa-check"></i>
             </button>
      </nav>
      <br/>                   
    
        <div className="container">
          <form id="myForm" onSubmit={this.onSubmit}>
              {errors.taken && (
                <div className= "alert alert-danger">
                  {errors.taken}
                </div> 
              )}

               {success && (      
              <div className= "alert alert-success">
              Update Successfully
             </div>
            )}


          <div className="form-group">
              <label><b>Username</b></label> 
              <input
               required 
               className="form-control"
                name= "username"
                 placeholder= "Enter Username..."
                 value = {username}
                 onChange = {this.onChange}
              />
          </div>

          {errors.username && (
          <div className= "alert alert-warning">
            {errors.username}
          </div>
          )}
         
          <div className="form-group">
              <label>
                <b>Email</b>
                </label>             
                <input
                 className="form-control"
                 name= "email"
                  placeholder= "Enter Email..."
                  value = {email}
                  onChange= {this.onChange}
              />
          </div>
          
          <div className="form-group">
              <label>
                <b>First Name</b>
                </label>
              <input
               className="form-control" 
                name= "firstName"
                 placeholder= "Enter First Name..."
                 value = {firstName}
                 onChange = {this.onChange}
              />
          </div>
         
          <div className="form-group">
              <label>
                <b>Last Name</b>
                </label>  
              <input className="form-control"
              name= "lastName"
               placeholder= "Enter Last Name..." 
               value = {lastName}
               onChange = {this.onChange}
              />
          </div>

           <Link to={`/user/${_id}/website`}
           className="btn btn-primary btn-block">Websites</Link>
          <button 
          type= "button"
           className="btn btn-danger btn-block"
           onClick = {this.logout}
          >
          Logout
          </button>
           <br />
            <Link to="/user-list"
             className="btn btn-outline-dark"
            >User List
            </Link>
          </form>
        </div>    
        <nav className="navbar navbar-dark bg-primary 
      fixed-bottom">
          <div className="full-width">               
                <Link to="/profile"
                className="color-white float-right">
                  <i className="fas fa-user"></i>
                </Link>
            </div>
        </nav> 
   </div>
    );
  }
}
