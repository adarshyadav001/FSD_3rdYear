import React from 'react'
import pic from '../assets/react.svg'

function ICard({ name, roll, branch, college }) {
  return (
    <div style={{border:'2px solid blue', padding:'15px', borderRadius:'8px', textAlign:'center', minWidth:'200px'}}>
        <img src={pic} height={150} width={150} style={{borderRadius:'50%'}} alt="student"/>
        <h3 style={{color:'skyblue', margin:'10px 0'}}>Name: {name}</h3>
        <p style={{margin:'5px 0'}}><strong>Roll:</strong> {roll}</p>
        <p style={{margin:'5px 0'}}><strong>Branch:</strong> {branch}</p>
        <p style={{margin:'5px 0'}}><strong>College:</strong> {college}</p>
    </div>
  )
}

export default ICard