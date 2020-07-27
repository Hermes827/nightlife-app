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

class App extends React.Component {



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
    <Route exact path="/login">
      <Login/>
    </Route>
    <Route path="/signup">
      <Signup/>
    </Route>
    </Switch>
    </div>
    </Router>
  );
}
}

export default App;
