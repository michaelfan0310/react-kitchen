import React from 'react';

// import ReactDOM from 'react-dom';
import './Photos.css'; 

function Photos(){
   const img="https://picsum.photos/200";

   return(<div>
   <h1 style={{color:"darkgreen"}}>Photos</h1>
        <div><img className="img-picsum" src={img} alt="picsum" /></div>
        
   </div>);

}
export default Photos;