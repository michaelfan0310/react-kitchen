import logo from './logo.svg';
import './App.css';
import TitleItem from './components/TitleItem';
import SubtitleItem from './components/SubtitleItem';
import Ingredients from './components/Ingredients';
import Steps from './components/Steps';
import VideoItem from './components/VideoItem';

function App() {
  return (
    <div className="App">
      <TitleItem></TitleItem>
     
        <img src={logo} className="App-logo" alt="logo" />
        
      <SubtitleItem></SubtitleItem>
       <img id="cookies"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQslNt0Y1iSYZiPGjjn-s2yt9dEdE_aNfHBTQ&usqp=CAU"
                width="40%" />

      <Ingredients></Ingredients>
      <Steps></Steps>
      <VideoItem></VideoItem>
    </div>
  );
}

export default App;
