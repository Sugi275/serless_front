import React, { Component } from 'react';
import AppBar from './component/appbar';
import ComplexGrid from './component/complexgrid';
import './index.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <ComplexGrid />
      </React.Fragment>
    );
  }
}

export default App;
