import React, { Component } from 'react';
import './App.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingUrl: '',
      audio: null,
      playing: false
    }
   }

  playAudio(previewUrl) {
   let audio = new Audio(previewUrl);
   if (!this.state.playing) {
    audio.play();
    this.setState({
      playing: true,
      playingUrl: previewUrl,
      audio
    })
  } else { // audio already playng
    if (this.state.playingUrl === previewUrl) { // pausing the same audio
      this.state.audio.pause();
      this.setState({
        playing: false
      })
    } else { // pausing the same audio and playing another track(audio)
      this.state.audio.pause();
      audio.play();
      this.setState({
       playing: true,
       playingUrl: previewUrl,
       audio
     })
    }
   }
  }

  render(){
    console.log('gallery props', this.props); // tracks={this.state.tracks} passed as props from App.jsx
    const tracks = this.props.tracks;

    return(
      <div>
        {
        tracks.map((track, k) => {
          console.log('track',track);
          const trackImg = track.album.images[0].url;
          return (
            <div
              key={k}
              className="track"
            >
              <img
                src={trackImg}
                className="track-img"
                alt="track"
                onClick={() => this.playAudio(track.preview_url)}
              />

              <p className="track-text">
                {track.name}
              </p>
            </div>
          )
        }
      )}
      </div>
    )
  }
}

export default Gallery;
