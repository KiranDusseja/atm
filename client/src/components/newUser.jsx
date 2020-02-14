import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class newuser extends React.Component {
  constructor() {
    super();
    this.state = {
      Fname: '',
      Lname: '',
      balance: '',
      address: '',
      ssn: '',
      bankNumber: '',
      type: '',
      selectedOption: '',
      cardNumber: '',
      cvc: '',
      expirationDate: '',
      pin: ''
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEvent = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChange = e => {
    this.setState({ type: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const {
      Fname,
      Lname,
      balance,
      address,
      ssn,
      bankNumber,
      type,
      cardNumber,
      cvc,
      expirationDate,
      pin
    } = this.state;

    axios
      .post('/api/newUser', {
        Fname,
        Lname,
        balance,
        address,
        ssn,
        bankNumber,
        type,
        cardNumber,
        cvc,
        expirationDate,
        pin
      })
      .then(result => {
        console.log(this.cardNumber);
        console.log(cardNumber);
      });
  };

  render() {
    const {
      Fname,
      Lname,
      balance,
      address,
      ssn,
      bankNumber,
      type,
      cardNumber,
      cvc,
      expirationDate,
      pin
    } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <h1> New user</h1>
        <form onSubmit={this.handleSubmit} method="POST">
          <br />
          <TextField
            required
            id="standard-required"
            label="First name"
            className="tekstfelt"
            margin="normal"
            defaultValue={Fname}
            type="text"
            name="Fname"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="Last name"
            className="tekstfelt"
            margin="normal"
            defaultValue={Lname}
            type="text"
            name="Lname"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="Balance in NOK"
            className="tekstfelt"
            margin="normal"
            defaultValue={balance}
            name="balance"
            type="number"
            onChange={e => this.handleEvent(e)}
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 10);
            }}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="Address"
            className="tekstfelt"
            margin="normal"
            defaultValue={address}
            name="address"
            type="text"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="SSN"
            className="tekstfelt"
            margin="normal"
            defaultValue={ssn}
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 11);
            }}
            name="ssn"
            type="number"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="Bank number"
            className="tekstfelt"
            margin="normal"
            defaultValue={bankNumber}
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 12);
            }}
            name="bankNumber"
            type="number"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <h2> Card info:</h2>
          <Select value={this.state.type} defaultValue={type} onChange={this.handleChange}>
            <MenuItem value="visa">Visa</MenuItem>
            <MenuItem value="mastercard">Mastercard</MenuItem>
          </Select>
          <br />
          <TextField
            required
            id="standard-required"
            label="Card number"
            className="tekstfelt"
            margin="normal"
            defaultValue={cardNumber}
            name="cardNumber"
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 16);
            }}
            type="number"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="CVC"
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 3);
            }}
            className="tekstfelt"
            margin="normal"
            defaultValue={cvc}
            name="cvc"
            onChange={e => this.handleEvent(e)}
          />

          <br />
          <TextField
            required
            id="standard-required"
            label="PIN code"
            className="tekstfelt"
            margin="normal"
            onInput={e => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 4);
            }}
            defaultValue={pin}
            name="pin"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <TextField
            required
            id="standard-required"
            label="Expiration date"
            className="tekstfelt"
            margin="normal"
            defaultValue={expirationDate}
            name="expirationDate"
            type="date"
            onChange={e => this.handleEvent(e)}
          />
          <br />
          <br />
          <br />
          <Button type="submit" variant="contained" color="primary" className="Knapp">
            <div class="test">Register new user</div>
          </Button>
        </form>
        <br />
        <p>
          <h2>User information</h2>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>First name</TableCell>
                  <TableCell>Last name</TableCell>
                  <TableCell>Balance</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>SSN</TableCell>
                  <TableCell>Bank number</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell>{this.state.Fname}</TableCell>
                <TableCell>{this.state.Lname}</TableCell>
                <TableCell>{this.state.balance}</TableCell>
                <TableCell>{this.state.address}</TableCell>
                <TableCell>{this.state.ssn}</TableCell>
                <TableCell>{this.state.bankNumber}</TableCell>
              </TableBody>
            </Table>
          </Paper>
          <h2>Card information</h2>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Card type</TableCell>
                  <TableCell>Card number</TableCell>
                  <TableCell>CVC</TableCell>
                  <TableCell>PIN</TableCell>
                  <TableCell>Expiration date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell>{this.state.type}</TableCell>
                <TableCell>{this.state.cardNumber}</TableCell>
                <TableCell>{this.state.cvc}</TableCell>
                <TableCell>{this.state.pin}</TableCell>
                <TableCell>{this.state.expirationDate}</TableCell>
              </TableBody>
            </Table>
          </Paper>
        </p>
      </React.Fragment>
    );
  }
}
export default newuser;
