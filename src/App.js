import React from 'react';
import ReactPlayer from 'react-player';


import './App.css';
import TitleItem from './components/TitleItem';
import SubtitleItem from './components/SubtitleItem';
import Ingredients from './components/Ingredients';
import Steps from './components/Steps';
// import Container from './components/Container';
import Photos from './components/Photos';

function App() {
  return (<div>
    
    <div id="container" className="App">
      {/* <Container /> */}
      <TitleItem />           
      <SubtitleItem />
       <img id="cookies"
                src="https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg"
                width="45%" alt="choccookies"/>
      <Ingredients />
      <Steps />
      <ReactPlayer url='https://www.youtube.com/watch?v=MLLYcbjVwmw' width={90%{}} />
    
      <Photos />
    </div>
   </div>
  );
}

export default App;
