import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MoneyForm from './moneyForm';
import logIn from './logIn';
import newuser from './newUser';
import AllUsers from './allUsers';
import selectAction from './selectAction';
import WithdrawalForm from './withdrawForm';
import otherAmount from './otherAmount';
import confirmWithdraw from './confirmWithdraw';
import takeCard from './takeCard';
import takeCash from './takeCash';
import confirmTransfer from './confirmTransfer';
import finish from './finish';
import takeCardTrasnfer from './takeCardTransfer';
import cardEaten from './cardEaten';

const BasicExample = () => (
  <Router>
    <div>
      {/* <ul>
        <b>Case 1: Withdraw</b>
        <li style={{ listStyle: 'none' }}>
          <Link style={{ textDecoration: 'none', color: '' }} to="/">
            Log in
          </Link>{' '}
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/selectaction">
            Select action
          </Link>{' '}
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/withdraw">
            Withdraw form
          </Link>{' '}
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/otheramount">
            Other ammount
          </Link>
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/confirmwithdraw">
            Confirm
          </Link>{' '}
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/takecash">
            Take cash
          </Link>
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/finish">
            Finish?
          </Link>
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/takecard">
            Take card
          </Link>{' '}
        </li>
        <b> Case 2: Withdraw</b>
        <li style={{ listStyle: 'none' }}>
          <Link style={{ textDecoration: 'none', color: '' }} to="/">
            Log in
          </Link>
          {'  '}
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/selectaction">
            Select action
          </Link>
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/moneyform">
            Money form
          </Link>{' '}
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/confirmtransfer">
            Confirm
          </Link>
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/finish">
            Finish?
          </Link>
          ->
          <Link style={{ textDecoration: 'none', color: '' }} to="/takecardtransfer">
            Take card
          </Link>{' '}
        </li>
        <b>Admin:</b>
        <li style={{ listStyle: 'none' }}>
          <Link style={{ textDecoration: 'none', color: '' }} to="/newuser">
            New user
          </Link>
        </li>
      </ul>
      */}
      <hr />

      <Route exact path="/" component={logIn} />
      <Route path="/moneyform" component={MoneyForm} />
      <Route path="/newuser" component={newuser} />
      <Route path="/allusers" component={AllUsers} />
      <Route path="/selectaction" component={selectAction} />
      <Route path="/withdraw" component={WithdrawalForm} />
      <Route path="/otheramount" component={otherAmount} />
      <Route path="/confirmwithdraw" component={confirmWithdraw} />
      <Route path="/takecard" component={takeCard} />
      <Route path="/takecash" component={takeCash} />
      <Route path="/confirmtransfer" component={confirmTransfer} />
      <Route path="/finish" component={finish} />
      <Route path="/takecardtransfer" component={takeCardTrasnfer} />
      <Route path="/cardeaten" component={cardEaten} />
    </div>
  </Router>
);
export default BasicExample;
