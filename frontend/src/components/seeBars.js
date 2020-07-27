import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from 'react-bootstrap/Button'

class SeeBars extends React.Component {

  componentDidMount(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 2QazQB9PrnUo8HuHa8cbSTs_CFIHsdNPFq-BeivH-OUglpDQ-NNgx1nF3YqD0jUZV5rOpPOl7ZTdd2T5SoQ2J7S_sMpN3HHOU5WoY0lbGs-kOsDB63YltvFG9ekeX3Yx");
    myHeaders.append("API_KEY", "2QazQB9PrnUo8HuHa8cbSTs_CFIHsdNPFq-BeivH-OUglpDQ-NNgx1nF3YqD0jUZV5rOpPOl7ZTdd2T5SoQ2J7S_sMpN3HHOU5WoY0lbGs-kOsDB63YltvFG9ekeX3Yx");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

  fetch("https://api.yelp.com/v3/businesses/search?latitude=37.786882&longitude=-122.399972&categories=bars", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

  render(){
  return (
    <div className="seeBars">
      <h1>See bars in my area</h1>
      <div>map display</div>
      <Link to="/" className="navbar-brand">
       <Button variant="primary">back</Button>
     </Link>
    </div>
  );
}
}

export default SeeBars;
