import React, { Image, Button } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/landing.js'
import Greeting from './components/greeting.js'
import CharacterButton from './components/character-btn.js'
import me from './me-crop.png'
import chevr from './chevron-right.svg'
import chevl from './chevron-left.svg'

function App() {
  return (
    <div className="App" style={{marginLeft: '10%', marginTop: '10%'}}>
      <div style={{display:'flex',
                    flex: 2,
                    alignItems: 'center',
                    flexDirection: 'right'}}>
        <div className="Image">
          <img src={me}
            alt="me"
            width='300'
            height='300' />
        </div>
        <div className="Words" style={{marginLeft: 50}}>
          <Greeting />
          <p style={{fontFamily: 'Assistant', margin:5}}>welcome to my website!</p>
          <p style={{fontFamily: 'Assistant', margin:5}}>who goes there?</p>
          <div style={{ display:'flex', justifyContent: 'center', marginTop: 10}}>
            <img src={chevl} alt='chevl' />
            <CharacterButton marginTop/>
            <img src={chevr} alt='chevr' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
