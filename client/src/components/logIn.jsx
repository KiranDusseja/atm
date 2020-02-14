import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { Route, Redirect } from 'react-router';
import axios from 'axios';

class logIn extends React.Component {
  constructor() {
    super();
    this.state = {
      cardnumber: '',
      pin: '',
      servercardnumber: {
        message: '',
        status: ''
      },
      tries: 2,
      cardState: 1,
      error: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEvent = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async e => {
    e.preventDefault();
    console.log('number of tries is', this.state.tries);
    // get our form data out of state
    const { cardnumber, pin, cardState } = this.state;
    const data = { cardnumber, pin, cardState };
    const url = '/api/login';
    const serverResponse = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(data)
    });
    const json = await serverResponse.json();
    console.log(json);
    console.log('json status is: ', json.status);
    if (json.status === false) {
      this.state.tries++;
      this.state.error = json.message;
      console.log('message is:', this.state.servercardnumber.message);
    }
    if (this.state.tries === 5) {
      this.state.cardState = 0;
      const cardState = this.state.cardState;
      this.state.tries = false;
      console.log('3 failed attempts');
      axios({
        method: 'post',
        url: '/api/login',
        data: {
          cardState,
          cardnumber
        }
      }).then(this.props.history.push('/cardeaten'));
    }

    this.setState(
      prevState => {
        sessionStorage.setItem('cardnumber', json.message);

        console.log('json status is: ', json.status);
        return {
          servercardnumber: json.message,
          status: json.status
        };
      },
      () => {
        console.log(this.state.cardnumber);
      }
    );
  };

  render() {
    const { cardnumber, pin, status, tries, cardState, error } = this.state;
    return (
      <React.Fragment>
        {tries ? !<Redirect to="/selectaction" /> : null}
        {status ? <Redirect to="/selectaction" /> : null}
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <h1> Log in</h1>
        <form onSubmit={this.handleSubmit} method="POST" action="/api/formdata">
          <br />
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
          <TextField
            required
            id="standard-required"
            label="Card number"
            className="tekstfelt"
            margin="normal"
            defaultValue={cardnumber}
            name="cardnumber"
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 12);
            }}
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="PIN code"
            className="tekstfelt"
            margin="normal"
            type="password"
            defaultValue={pin}
            name="pin"
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 4);
            }}
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary" className="test">
            <div className="test">Log in</div>
          </Button>
        </form>
        <h2 className="error">{error}</h2>
      </React.Fragment>
    );
  }
}
export default logIn;
