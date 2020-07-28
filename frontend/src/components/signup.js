import React from 'react';
import Button from 'react-bootstrap/Button'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {withRouter} from 'react-router';

class Signup extends React.Component {

  constructor(){
    super()

    this.state = {
      name: "",
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
  var raw = JSON.stringify({"name": this.state.name,"email": this.state.email,"password": this.state.password});
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:4000/api/auth/register", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      if(result.token){localStorage.token = result.token}
      this.props.history.push('/userPage')
    })
    .catch(error => console.log('error', error));
}

deleteToken(){
  delete localStorage.token
}

  render(){
  return (
    <div className="signup">
      <h1>signup</h1>
      <form>
        <label>email</label>
        <input type="text" name="email" onChange={this.captureText}/><br/>
        <label>name</label>
        <input type="text" name="name" onChange={this.captureText}/><br/>
        <label>password</label>
        <input type="text" name="password" onChange={this.captureText}/><br/>
        <Button variant="primary" onClick={this.onSubmit}>signup</Button>
      </form>
        <Link to="/" className="navbar-brand">
         <Button variant="primary">back</Button>
       </Link>
       {console.log(this.props.history)}
       {console.log(localStorage.token)}
       <button onClick={this.deleteToken}>delete token</button>
    </div>
  );
}
}

export default withRouter(Signup);
