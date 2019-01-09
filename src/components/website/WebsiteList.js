import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from "axios";

export default class Websitelist extends Component {

  constructor(props){
    super(props);
    this.state = {
      websites: []
    };
  }

  componentDidMount(){
    const uid = this.props.match.params.uid;
    this.getWebsites(uid);
  }

  getWebsites = async uid => {
    const res = await axios.get(`/api/user/${uid}/website`);
    this.setState({
      websites: res.data
    });
   
  }

  render() {
    const {websites} = this.state;

    return (
  <div>

  <nav className="navbar navbar-dark bg-primary fixed-top">
    <Link to="/profile" className="color-white">
   <i className="fas fa-chevron-left"/>
    </Link>
    <div className="sw-90-width">   
    <button className= 
    "navbar-brand float-left btn bg-transparent">
    <b>Website</b>
    </button>
  </div>
    <Link to="/" className="color-white">
    <i className="fas fa-plus"></i>
    </Link>
  </nav>
    <div className="container-fluid">
    {/* <ul className="list-group">
        <li className="list-group-item">
        <Link to="/">                 
          website.name
        </Link>
            <Link to="/" className="float-right">
            <i className="fas fa-cogs"></i>
            </Link> 
        </li>
    // </ul> */}
    <ul className= "list-group">
      {websites.map(website=> (
       <li key={website._id} className="list-group-item">        
        <Link to="/">{website.name}</Link>            
        <Link to="/" className="float-right">
            <i className="fas fa-cogs"/>
        </Link> 
      </li>
  ))}    
       
    </ul>

    
</div>                                       
     
<nav className="navbar navbar-dark bg-primary fixed-bottom">
        <div className="full-width">               
            <Link to="/profile" className=
            "color-white float-right">
            <i className="fas fa-user">
            </i>
            </Link>
        </div>
</nav>   
        
</div>
    )
  }
}
