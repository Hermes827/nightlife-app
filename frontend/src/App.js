import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login.js'
import Signup from './components/signup.js'
import Userpage from './components/userPage.js'

class App extends React.Component {

loggedIn = () => {
  if(localStorage.token){
    console.log(this.props.history)
    return (
      <Userpage/>
    )
  }
}

  render(){
  return (
    <Router>
    <div className="App">
        <h1 className="appH1">welcome to nightlife app</h1>
      <div className="appButtonContainerDiv">
        <Link to="/login">
          <Button block>Log in</Button>
        </Link><br/>
        <Link to="/signup">
          <Button block>Sign up</Button>
        </Link>
      </div>
    <Switch>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/signup">
      <Signup/>
    </Route>
    <Route path="/userpage">
      <Userpage/>
    </Route>
    </Switch>

    </div>
    </Router>
  );
}
}

export default App;
