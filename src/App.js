import React from 'react';
import ReactPlayer from 'react-player';

import logo from './logo.svg';
import './App.css';
import TitleItem from './components/TitleItem';
import SubtitleItem from './components/SubtitleItem';
import Ingredients from './components/Ingredients';
import Steps from './components/Steps';
// import Player from './components/VideoItem';
import Photos from './components/Photos';

function App() {
  return (
    
    <div className="App">
      <TitleItem></TitleItem>
     
        <img src={logo} className="App-logo" alt="logo" />
        
      <SubtitleItem></SubtitleItem>
       <img id="cookies"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQslNt0Y1iSYZiPGjjn-s2yt9dEdE_aNfHBTQ&usqp=CAU"
                width="40%" />

      <Ingredients />
      <Steps />
      <ReactPlayer url='https://www.youtube.com/watch?v=MLLYcbjVwmw' />
      <Photos />
    </div>
  );
}

export default App;
