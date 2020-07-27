import React from 'react';
import logo from './logo.svg';
import './App.css';
import CenterConsole from './components/centerConsole.js'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

class App extends React.Component {

  render(){
  return (
    <div className="App">

        <h1 className="appH1">welcome to nightlife app</h1>
        <Button className="appSeeBarsButton">See all the bars in my area</Button>

      <div className="appButtonContainerDiv">
      <Button block>Log in</Button>
      <Button block>Sign up</Button>
      </div>
    </div>
  );
}
}

export default App;
