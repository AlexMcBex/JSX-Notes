import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
  <img
    src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg"
    alt="kitty"
    onClick={makeDoggy} />
);

ReactDOM.render(kitty, document.getElementById('app'));

// {if this && this happens}

// KEY instead of ID
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  // assembly the key like this with map
  <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'))

// Class Components
import React from 'react';
import ReactDOM from 'react-dom';  //import dependencies

class MyComponentClass extends React.Component { //make class
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
  <MyComponentClass />, //component
  document.getElementById('app')
);

// RENDER() in a class component
class Random extends React.Component {
  render() {
    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random() * 10 + 1); //logic must be inside a render() f
    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}

//EVENT LISTENERS
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() { //function of component
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button
      onClick={this.scream} //callling the function with the this.
    >AAAAAH!</button>;
  }
}

ReactDOM.render(
  <Button />,
  document.getElementById('app')
)

//ASSEMBLE COMPONENTS, EXPORT and IMPORT THEM
export class NavBar extends React.Component { } //on NavBar component

import { NavBar } from 'PATH' //on parent component

//PROPS

import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';


class Talker extends React.Component {
  talk() { //define function inside component
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  render() {
    return <Button talk={this.talk} />; //pass the function in the props of a component
    //use the {curly} unless the prop is a "string"
  }
}
//DEFAULT PROPS
Talker.defaultProps = { typeOfProp: prop }

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

//PROPS.CHILDREN
<Parent>
  <Child1 />
  <Child2 />
</Parent>
Parent.props.children === [Child1, Child2]

//THIS.SETSTATE
import React from 'react';
import ReactDOM from 'react-dom'

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { color: green }
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    const newColor = this.state.color == green ? yellow : green
    this.setState({ color: newColor })

  }
  render() {
    return (
      <div style={{ background: this.state.color }}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
ReactDOM.render(
  <Toggle />,
  document.getElementById('app')
)