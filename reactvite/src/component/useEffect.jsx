import { useState, useEffect } from 'react'
function UseEffect() {
  const[count,setCount]=useState(0);
  const[pointer,setPointer]=useState(1000);
  const[products,setProducts]=useState([]);
  useEffect(()=>{
//     console.log("Count value changed!");
//   },[count]);
//   useEffect(()=>{
//     console.log("Pointer value changed!");

      async function fetchData(){
try{
   const data=await fetch('https://fakestoreapi.com/products');
   const jsonData=await data.json();
   console.log(jsonData);
   setProducts(jsonData);
}catch(e){
   console.error("Error fetching data:" +e);
}
}
fetchData();
  },[]);
  return (
    <div>useEffect
      <h2 style={{color:'brown'}}>Count: {count}</h2>
      <h2 style={{color:'blue'}}>Pointer: {pointer}</h2>
      <div>
      <button onClick={()=>setCount(count+10)}>Increment Count</button>
      <button onClick={()=>setPointer(pointer+10)}>Increment Pointer</button>
    </div>
    <p>Loaded products: {products.length}</p>
    </div>
  )
}
export default UseEffect
