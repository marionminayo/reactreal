import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



///using .map
/*const people = ['Rowe','john','Gary']
const peopleList = people.map((person,i)=>
    <li key = {'person_'+ i}>{person}</li>
)
ReactDOM.render(<ul>{peopleList}</ul>, document.getElementById('root'))
*/


///using this
/*import SweetStuff from './this'

ReactDOM.render(<SweetStuff/>, document.getElementById('root'))
*/

///events
/*import Button from './events'
ReactDOM.render(<Button/>, document.getElementById('root'))
*/

///props
/*import Greeting from './prop'
ReactDOM.render(<Greeting name="Jane Doe"/>, document.getElementById('root'))
*/


//states
/*import Weather from './states'
ReactDOM.render(<Weather/>, document.getElementById('root'))
*/