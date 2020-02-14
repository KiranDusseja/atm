import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

class otherAmount extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEvent = e => {
    // Updates the state in accordance with the math "regex"
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    // Sets session stored amount to amount set by user
    sessionStorage.setItem('amount', this.state.amount);
    // Pushes to confirmwidraw page
    this.props.history.push('/confirmwithdraw');
  };

  render() {
    const { amount } = this.state;
    return (
      <React.Fragment>
        <div>
          Select action ->
          <b>Withdraw -></b> Confirm -> Take cash -> Finished? -> Take card{' '}
        </div>
        <h1> Please enter wanted amount</h1>
        <CssBaseline />
        <form onSubmit={this.handleSubmit} method="POST" action="/api/formdata">
          <br />
          <TextField
            required
            id="standard-required"
            label="Amount to withdraw"
            className="tekstfelt"
            margin="normal"
            defaultValue={amount}
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 4);
            }}
            name="amount"
            type="number"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <br />
          <div className="container marginTop">
            <Button type="submit" variant="contained" color="secondary" className="floatLeft">
              <Link to="/selectaction" className="test">
                <div class="test">Main menu</div>
              </Link>
            </Button>
            <Button type="submit" variant="contained" color="primary" className="floatRight">
              <div class="test">Withdraw</div>
            </Button>
          </div>
        </form>
        {/*<p className="marginTop">
          Amount: {this.state.amount} <br />
          </p> */}
      </React.Fragment>
    );
  }
}
export default otherAmount;
