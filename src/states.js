import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Weather extends Component{
    constructor(props){
        super(props)
        this.state = {elements:'sunny'}
        this.changeWeather = this.changeWeather.bind(this)
        
    }
    changeWeather(){
        const newElement = this.state.elements == 'sunny' ? 'windy' : 'sunny'
        this.setState({ elements: newElement });
    }


    render(){
        return  <div>
                    <h1>I'm feeling {this.state.elements}!</h1>
                    <button onClick={this.changeWeather}>
                        Click To Change Weather
                    </button>
                </div>
    }
}
export default Weather