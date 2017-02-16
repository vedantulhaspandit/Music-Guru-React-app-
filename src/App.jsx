import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App1 extends Component{
  render(){
    return(
      <div className="App">
        <div className="App-title">Music Guru</div>
        <div>
          <input placeholder="search the artist..."/>
          <button>Find</button>
        </div>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
           Gallery
        </div>
      </div>

    )
  }

}

export default App1;
