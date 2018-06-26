import React from 'react'
import ReactDOM from 'react-dom'

const people = ['Rowe','john','Gary']
const peopleList = people.map((person,i)=>
    <li key = {'person_'+ i}>{person}</li>
)
ReactDOM.render(<ul>{peopleList}</ul>, document.getElementById('root'))