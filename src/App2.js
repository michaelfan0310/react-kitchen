import React from 'react';
import ReactPlayer from 'react-player';


import './App.css';
import TitleItem2 from './components/TitleItem2';
import SubtitleItem2 from './components/SubtitleItem2';
import Ingredients2 from './components/Ingredients2';
import Steps2 from './components/Steps2';
// import Container from './components/Container';
import Photos2 from './components/Photos2';

function App2() {
  return (<div>
    
    <div id="container" className="App2">
      {/* <Container /> */}
      <TitleItem2 />           
      <SubtitleItem2 />
       <img id="cookiesB"
                src="https://images-gmi-pmc.edge-generalmills.com/dcd4f799-7353-4e56-ba50-623581cba3bc.jpg"
                width="45%" alt="choccookies"/>
      <Ingredients2 />
      <Steps2 />
      <ReactPlayer url='https://www.youtube.com/watch?v=ED7ZFDvPy4U' width={90%{}} />
    
      <Photos2 />
      {/* <ReactPlayer url='https://www.youtube.com/watch?v=9nTGnYjTS88' width={30%{}} /> */}

    </div>
   </div>
  );
}

export default App2;