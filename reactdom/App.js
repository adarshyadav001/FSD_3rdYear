const container=document.getElementById('container');
const root=ReactDOM.createRoot(container);
console.log(root);

const h2=React.createElement('h2', {style:{color:'blue'}},'Hello Adarsh is cool , Abhii is waste of time');
const h1=React.createElement('h1', {style:{color:'red'}},'Hello Adarsh is cool , Abhii time');
root.render(h1);