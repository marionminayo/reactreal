import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Greeeting extends Component{
    render(){
        return <h1>Hi {this.props.name}</h1>
    }
}

export default Greeeting