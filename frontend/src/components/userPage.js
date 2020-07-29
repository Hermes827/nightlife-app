import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'

class UserPage extends React.Component {

  componentDidMount(){
    console.log("hello")

    var myHeaders = new Headers();
myHeaders.append("x-access-token", localStorage.token);
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://localhost:4000/users/getbars", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  }

  render(){
  return (
    <div className="userpage">

    <ul>
    <li><a>find bars</a></li>
    <li><a>settings</a></li>
    <li><a>log out</a></li>
    </ul>

      <h1>welcome to userpage</h1>
      <Link to="/" className="navbar-brand">
       <Button variant="primary">back</Button>
     </Link>
    </div>
  );
}
}

export default UserPage;
