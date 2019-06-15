import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import NavBar from './components/common/NavBar';
import UserAuthForm from './components/UserAuthForm';


class App extends Component {
  render() {
    return (
      <Router>
        <NavBar mb={0.5}/>
        <Container maxWidth="sm">
        
          <UserAuthForm />
        
        </Container>
      </Router>
    );
  }
}

export default App;
