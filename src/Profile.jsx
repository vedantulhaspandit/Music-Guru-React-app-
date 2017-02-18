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
      <div className='profile'>
        <img
          alt="Profile"
          className="profile-img"
          src={artist.images[0].url}
        />
        <div className="profile-info">
          <div className="profile-name">{artist.name}</div>
          <div className="profile-followers">{artist.followers.total} followers</div>
          <div className="profile-genres">
              {
                artist.genres.map((genre, key) => {
                  genre = genre !== artist.genres[artist.genres.length-1] // checking whether the genre item is last in array or not. if last, donot add comma, else add
                                ? ` ${genre},`
                                : ` ${genre}`;
                  return (
                    <span key={key}>{genre}</span>
                  )
                })
              }
            </div>
        </div>
      </div>
    )
  }
}

export default Profile;
