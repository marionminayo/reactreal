import React, { Component } from 'react';
import samurai from './samurai.jpg';

const image = {samurai}
class Button extends Component{
    scream(){
        alert('AAAAHHH!')
    }
    render(){
        return <button onClick={this.scream}>Button</button>
    }
}

export default Button