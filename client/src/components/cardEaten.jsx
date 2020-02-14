import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import '../static/selectAction.css';

class cardEaten extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }
  onClick = () => {
    this.setState({
      loggedIn: false
    });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline /> {/*https://material-ui.com/style/css-baseline */}
        <h1> You have entered wrong pin too many times.</h1>
        <h2> Your card has been eaten.</h2>
        <h3> Please contact Mecano ATMS at number 91553956</h3>
        <Button variant="contained" color="secondary">
          <Link to="/" className="test">
            Back to login
          </Link>
        </Button>
      </React.Fragment>
    );
  }
}
export default cardEaten;
