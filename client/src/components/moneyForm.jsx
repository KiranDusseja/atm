import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MoneyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      transferAmount: '',
      transferNumber: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEvent = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    sessionStorage.setItem('transfereAmount', this.state.transferAmount);
    sessionStorage.setItem('transfereNumber', this.state.transferNumber);
    this.props.history.push('/confirmtransfer');
  };

  render() {
    const { transferAmount, transferNumber } = this.state;
    return (
      <React.Fragment>
        <div>
          Select action -> <b>Transfer -></b> Confirm -> Finished? -> Take card
        </div>
        <h1> To whom and how much do you want to transfer?</h1>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <form onSubmit={this.handleSubmit} method="POST" action="/api/formdata">
          <br />
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
          <br />
          <TextField
            required
            id="standard-required"
            label="Transfer amount"
            className="tekstfelt"
            margin="normal"
            type="number"
            defaultvalue={transferAmount}
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 4);
            }}
            name="transferAmount"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="Reciver accountnumber"
            className="tekstfelt"
            margin="normal"
            type="number"
            defaultvalue={transferNumber}
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 12);
            }}
            name="transferNumber"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <br />
          <div className="marginTop container">
            <Button type="submit" variant="contained" color="primary" className="floatRight">
              <div class="test">Transfer</div>
            </Button>
            <Button variant="contained" color="secondary" className="floatLeft">
              <Link class="test" to="/selectaction">
                Main menu
              </Link>
            </Button>
          </div>
        </form>
        {/*  <p className="marginTop">
          Transfer amount: {this.state.transferAmount} <br />
          Reciver accountnumber: {this.state.transferNumber}
          Cardnumber: {sessionStorage.getItem('cardnumber')}
          </p>*/}
      </React.Fragment>
    );
  }
}
export default MoneyForm;
