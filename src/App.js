import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Screens/Home';
import Footer from './Components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
