import React, {Component} from 'react';
import Navbar from './Navbar';
import Timeline from './Timeline';

class App extends Component{
  constructor(){
    super();
    this.state = {
      color: 'red',
      people: ['Sandra','Carmen','Lupita']
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar color = {this.state.color} />
        <br />
        <Timeline people = {this.state.people} />
      </div>
    );
  }
}

export default App;
