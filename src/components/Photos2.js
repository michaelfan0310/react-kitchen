import React from 'react';
// import ReactDOM from 'react-dom';

import GitHubButton from 'react-github-btn';
// import gitHubButton from '@cicciosgamino/github-button';
import './Photos.css'; 

function Photos2(){
   const img="https://picsum.photos/300";

   return(<div>
   <h1 style={{color:"darkgreen"}}>Photos</h1>
        <div><img className="img-picsum" src={img} alt="picsum" /></div>
        <GitHubButton href="https://github.com/michaelfan0310">Follow @Michael</GitHubButton>
   

   </div>);

}
export default Photos2;