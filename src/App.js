import React, { Component } from 'react';
import { Container, NavBar } from './components';
import logo from './logo.svg';
import imgPortada from './img/telefono-got.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>AL TOKE!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={imgPortada} className="App-image" alt="imagen portada" />
        <NavBar/>
        <Container/>
      </div>
    );
  }
}

export default App;