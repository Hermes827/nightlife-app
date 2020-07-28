import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from 'react-bootstrap/Button'

class UserPage extends React.Component {

  render(){
  return (
    <div className="userpage">
      welcome to userpage
      <Link to="/" className="navbar-brand">
       <Button variant="primary">back</Button>
     </Link>
    </div>
  );
}
}

export default UserPage;
