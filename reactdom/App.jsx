const container=document.getElementById('container');
const root=ReactDOM.createRoot(container);
// console.log(root);

// const h2=React.createElement('h2', {style:{color:'red'}},'Hello Adarsh is cool , Abhii is waste of time');
// const h1=React.createElement('h1', {style:{color:'yellow'}},'Hello Adarsh is cool , Abhii time');
// const img = React.createElement('img',{ src:'',style:{width:'100px',height:'100px'}}); 
// const h3=React.createElement('h3', {style:{color:'green'}},'Hello Adarsh is cool , Abhii is waste of time');        
// const div=React.createElement('div', {style:{backgroundColor:'Blue'}},[h1,h2,img,h3]);
const h1 =<h1>Welcome to react</h1>;
const img =<img src='' style={{width:'100px',height:'100px'}}/>;
const div={h1,img};



root.render(div);