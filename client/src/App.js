import React, { Component } from 'react';
import './App.css';
import './components/moneyForm';
import 'typeface-roboto';
import BasicExample from './components/router';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi() //henter callApi metoden fra denne filen
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.response}</p>
        <BasicExample />
      </div>
    );
  }
}

export default App;
