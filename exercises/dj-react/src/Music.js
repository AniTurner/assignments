import React from 'react'
import soundFile from './music/sound.mp3'

class Music extends React.Component {
    constructor(){
    super() 
        this.state = {
            play: false
        }
            this.audio = new Audio(soundFile)
        // this.audio = null;

    }
    togglePlay = () => {
        // this.audio.play()
        this.setState({play: !this.state.play}, () => {
        this.state.play ? this.audio.play() : this.audio.pause();
        });
    }
    render() {
        return (
            <div>
                {/* <audio ref={audio => this.audio = audio}>
                    <source src={soundFile} ></source>
                </audio> */}
                <button style={{backgroundColor: 'blue', border: '2px dotted blue', fontWeight: 'bold', fontSize: 20}} onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
            </div>
        )
    }
}

export default Music;