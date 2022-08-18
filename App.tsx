import React from 'react';
import './App.css';
import { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import product from './product.json'
// import { BrowserRouter, Routes,Route,Link } from 'react-router-dom' 
// import Addtocart from '../Pages/Addtocart';
// import Favcart from '../Pages/Favcart';
// import type {RootSate} from './store'

function App() {
  
  const count = useSelector((state: any) => state)
  console.log("count",count);

  // const state:any =useSelector((state)=>(state))
  // console.log("state",state);

  // const dispatch=useDispatch();
  

  const [name,setName]=useState('react')
  const update=(value:any)=>{
    setName(value);
  } 

  
  return (
    
    <div className="App">

      <button onClick={()=> update("js")}>update</button>
      <h1>{name}</h1>

    </div>
  
  );
}

export default App