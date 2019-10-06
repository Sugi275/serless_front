import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from './component/appbar';
import ComplexGrid from './component/complexgrid';
import ImageGrid from './component/imagegrid';
import ImageGridList from './component/imagegridlist';
import './index.css';

ReactDOM.render(
  <React.Fragment>
    <AppBar />
    <ComplexGrid />
  </React.Fragment>,
  document.getElementById('root')
);
