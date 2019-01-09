import React, { Component } from 'react'
import {Link} from "react-router-dom";
import axios from "axios";


export default class Login extends Component {


  constructor(props){
        super(props);
        this.state= {
            username: "",
            password:"",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({
        [e.target.name]: e.target.value
    });
 }

 onSubmit= e => {

    const {username, password} = this.state


    e.preventDefault();
    if(this.state.username === "") {
        this.setState({
        errors: {username: "Username is required"}
       });

       return;
    }

    if(this.state.password ===""){
        this.setSate({
            errors: {password: "Password is required"}
        });

        return;
    }
   this.login(username, password);
}
   login =async(username, password) => {
        const user = {
            username,
            password
        };
        try {
            await axios.post("/api/login", user);
            this.props.history.push("/profile");
        } catch {
            this.setState({
                errors: {
                    match: "Username and Password are not matched"
                }
            })
        }
    };
 
     
  render() {
      const{username, password, errors} = this.state

    return (
    <div className="container login">
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
           {errors.match && (
           <div className= "alert alert-danger">
            {errors.match}
            </div>
        )}

   <div className="form-group">
            <input
             className="form-control"
             required 
              name= "username" 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange= {this.onChange}
        />
    </div> 
            {errors.username && (
           <div className= "alert alert-warning">
           {errors.username}
        </div>
       )}

        <div className="form-group">
            <input 
            className="form-control"
            required
            name= "password"
              type="password"
               placeholder="Password"
               value= {password}
               onChange= {this.onChange}
         />
        </div>
         {errors.password && (
           <div className= "alert alert-warning">
           {errors.password}
        </div>
        )}

        <button type= "submit" 
            className="btn btn-primary btn-block">Login
            </button>
            <Link to="/register"
             className="btn btn-success btn-block">Register
            </Link>
        </form>
    </div>
    );
  }
};
