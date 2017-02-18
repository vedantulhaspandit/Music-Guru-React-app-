import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';

class App1 extends Component{
  constructor(props){
    super(props);
    this.state = {
      query:"",
      artist:null,
      tracks:[]
    }
  }

  search(){
   console.log('this.state',this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';
  //const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
    console.log("FETCH_URL",FETCH_URL);

    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log('json',json);
      const artist = json.artists.items[0];
      //console.log('artist',artist);
      this.setState({artist:artist});
      //https://api.spotify.com/v1/artists/{id}/top-tracks
      FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
      fetch(FETCH_URL, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => {
        console.log('artist\'s top tracks:', json);
        const { tracks } = json; // const tracks = json.tracks
        this.setState({tracks});
      })
    })
    .catch(error => console.log(error));

 }


  render(){
    return(
      <div className="App">
        <div className="App-title">Music Guru</div>
        <FormGroup>
           <InputGroup>
             <FormControl
               type="text"
               placeholder="Search for an Artist"
               value={this.state.query}
               onChange={event => {this.setState({query: event.target.value})}}
               onKeyPress={event => {
                           console.log('event-key',event.key)
                           if(event.key === 'Enter'){
                             this.search();
                           }
               }}
             />
             <InputGroup.Addon onClick={() => this.search()}>
               <Glyphicon glyph="search"></Glyphicon>
             </InputGroup.Addon>
           </InputGroup>
        </FormGroup>
        {
          this.state.artist !== null
          ? <div>
              <Profile
                artist={this.state.artist}
              />
              <div className="Gallery">
                Gallery
              </div>
            </div>
           : <div></div>
        }
      </div>

    )
  }

}

export default App1;
