import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    console.log('this.props',this.props);
    let artist = {
                 name: '',
                 followers: {total: ''},
                 images: [{url: ''}],
                 genres: []
    };
    artist = this.props.artist !== null ? this.props.artist : artist; // set the value of artist if it has data

    return (
      <div>
        <div>{artist.name}</div>
        <div>{artist.followers.total} followers</div>
      </div>
    )
  }
}

export default Profile;
