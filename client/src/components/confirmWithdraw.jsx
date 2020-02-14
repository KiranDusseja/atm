import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';

class confirmWithdraw extends React.Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEvent = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const amount = sessionStorage.getItem('amount');
    const serverCardNumber = sessionStorage.getItem('cardnumber');
    axios({
      method: 'post',
      url: '/api/whidrawal',
      data: {
        amount,
        serverCardNumber
      }
    }).then(this.props.history.push('/takecash'));
  };

  render() {
    const { redirect } = this.state;

    return (
      <React.Fragment>
        <div>
          Select action -> Withdraw -> <b>Confirm -></b> Take cash -> Finished? -> Take card{' '}
        </div>
        {/* <div>{sessionStorage.getItem('amount')}</div> */}
        <h1>Please confirm the withdraw of {sessionStorage.getItem('amount')} NOK </h1>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <form onSubmit={this.handleSubmit}>
          <br />
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
          <div className="container marginTop">
            <Button type="submit" variant="contained" color="primary" className="floatRight">
              <div className="test">Confirm</div>
            </Button>
            <Button type="submit" variant="contained" color="secondary" className="floatLeft">
              <div className="test">Cancel</div>
            </Button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default confirmWithdraw;
