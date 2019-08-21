import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers/history';
import { alertActions } from './actions/alertActions';
import Container from '@material-ui/core/Container';

import NavBar from './components/common/NavBar';
import UserAuthForm from './components/UserAuthForm';


function App(props) {
  const { dispatch } = props;
  const { alert } = props;
  history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
  });

  return (
    <Router history={ history }>
      <NavBar />
      {alert.message && 
        <div className={`alert ${alert.type}`}>{alert.message}</div>
      }
      <Container maxWidth="sm">
        <Route path="/login" component={Login} />
      </Container>
    </Router>
  );
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App}; 

function Login() {
  return (
    <UserAuthForm />
  );
}