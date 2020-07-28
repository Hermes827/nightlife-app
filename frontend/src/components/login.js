import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router';

class Login extends React.Component {

  constructor(){
    super()

    this.state = {
      email: "",
      password: ""
    }
  }

captureText = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

onSubmit = (e) => {
  e.preventDefault()
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({"email":this.state.email,"password":this.state.password});

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

fetch("http://localhost:4000/api/auth/login", requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    if(result.token){localStorage.token = result.token}
      this.props.history.push('/userPage')
  })
  .catch(error => console.log('error', error));
}

  render(){
  return (
    <div className="login">
      <h1>login</h1>
        <form>
          <label>email</label>
          <input type="text" name="email" onChange={this.captureText}/><br/>
          <label>password</label>
          <input type="text" name="password" onChange={this.captureText}/><br/>
          <Button variant="primary" onClick={this.onSubmit}>login</Button>
        </form>
        <Link to="/" className="navbar-brand">
         <Button variant="primary">back</Button>
       </Link>
    </div>
  );
}
}

export default withRouter(Login);
