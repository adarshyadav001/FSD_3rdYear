import React from 'react'
import pic from '../images/studentimage.jpg'
function ICard() {

      let a=23;
  let name="Rahul";
  return (
    <div>
        <img src={pic} height={200} width={200} style={{borderRadius:'50%'}}></img>
    <h2 style={{color:'red'}}>Welcome to React using Vite</h2>
    <h1 style={{backgroundColor:'cyan'}}>Value of a={a}</h1>
    <div style={{border:'10px solid red', height:300, width:200}}>
    <h2>Name:{name}</h2>
    </div>
    
    </div>
  )
}

export default ICard