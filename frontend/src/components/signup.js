import React from 'react';
import Button from 'react-bootstrap/Button'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Signup extends React.Component {

  render(){
  return (
    <div className="signup">
      <h1>signup</h1>
        <Link to="/" className="navbar-brand">
         <Button variant="primary">back</Button>
       </Link>
    </div>
  );
}
}

export default Signup;
