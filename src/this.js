import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class SweetStuff extends Component{
    get food(){
        return 'icecream'
    }
    render(){
        return <h1>I like {this.food}</h1>
    }
}
 export default SweetStuff