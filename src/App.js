import React, { Component } from 'react';

import './App.css';

import Dashboard from './dashboard/Dashboard';
import LandingPage from './invest/LandingPage';

class App extends Component {
  render() {
    return (
      <Dashboard />
      // <LandingPage />
    );
  }
}

export default App;
