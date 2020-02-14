import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import { Link } from 'react-router-dom';

class confirmTransfer extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEvent = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // get our form data out of state
    const transfereAmount = sessionStorage.getItem('transfereAmount');
    const transfereNumber = sessionStorage.getItem('transfereNumber');
    const bankNumber = sessionStorage.getItem('cardnumber');
    axios({
      method: 'post',
      url: '/api/transfere',
      data: {
        transfereAmount,
        transfereNumber,
        bankNumber
      }
    }).then(this.props.history.push('/finish'));
  };

  render() {
    return (
      <React.Fragment>
        <div>
          Select action -> Transfer -> <b>Confirm -></b> Finished? -> Take card
        </div>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <form onSubmit={this.handleSubmit} method="POST" action="/api/formdata">
          <h2>
            Please confirm the withdraw of {sessionStorage.getItem('transfereAmount')} NOK to
            account
            {' ' + sessionStorage.getItem('transfereNumber')}
          </h2>
          <br />
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
          <div className="container marginTop">
            <Button type="submit" variant="contained" color="primary" className="floatRight">
              <div className="test">Confirm</div>
            </Button>
            <Button type="submit" variant="contained" color="secondary" className="floatLeft">
              <Link to="/selectaction" className="test">
                Cancel
              </Link>
            </Button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
export default confirmTransfer;
