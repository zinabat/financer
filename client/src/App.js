import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: [],
    id: 0,
    message: null,
  };

  componentDidMount() {
    this.getDataFromDb();
  }

  getDataFromDb = () => {
    axios.get('http://localhost:3001/user/login')
      .then(res => {
        const data = res.data;
        this.setState({data: data});
    });
  }

  render() {
    const { data } = this.state;

    
    
    return (
      <div>Hallo Wurld<br/>{this.state.data}</div>
    );
  }
}

export default App;
