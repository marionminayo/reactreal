import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
///variable attributes
let paLength = '700px'
const panda = (<img src ={logo} alt= "panda" height={paLength}/>)
class App extends Component {
   render(){
   return panda
 }
}

export default App;
