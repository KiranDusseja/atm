import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import { Link } from 'react-router-dom';

class finish extends React.Component {
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

    axios.post('/api/formdata', {}).then(result => {});
  };

  render() {
    return (
      <React.Fragment>
        <div>
          Select action -> Withdraw/transfer -> Confirm -> <b>Finished? -></b> Take card{' '}
        </div>
        <h1>Transaction completed</h1>
        <h1>Are you finished?</h1>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <form onSubmit={this.handleSubmit} method="POST" action="/api/formdata">
          <br />
          {/* Bytt ut med CSS block elementer eller noe slikt, bytt name på form fields til å hentes via JS  */}
          <div className="container marginTop">
            <Button type="submit" variant="contained" color="secondary" className="floatLeft">
              <Link to="/takecard" className="test">
                Log out
              </Link>
            </Button>
            <Button type="submit" variant="contained" color="primary" className="floatRight">
              <Link to="/selectaction" className="test">
                Another transaction
              </Link>
            </Button>
          </div>
          <br />
        </form>
      </React.Fragment>
    );
  }
}
export default finish;
