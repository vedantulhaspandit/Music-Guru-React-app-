import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App1 extends Component{
  render(){
    return(
      <div className="App">
        <div className="App-title">Music Guru</div>
          <FormGroup>
           <InputGroup>
             <FormControl
               type="text"
               placeholder="Search for an Artist"
             />
             <InputGroup.Addon>
               <Glyphicon glyph="search"></Glyphicon>
             </InputGroup.Addon>
           </InputGroup>
         </FormGroup>
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
