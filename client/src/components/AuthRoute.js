import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// checks if user is in local storage, but won't reveal secure data
export const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/user/login', state: { from: props.location } }} />
  )} />
)