import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {

  const[data ,setdata] = useState([])
  // const[cards ,setCards] = useState([])

  useEffect( () => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(Data=>setdata(Data)
    )
  },[ ])
        
  
  return (
    <>
      <h2>HOME</h2>
      <Link to="/login">LOGIN PAGE</Link>
       <div>
         {data.map(
           ()=>{
           <>
           <p>dudhd</p>
           </>
})}
    
         {
           console.log(data[0])
            
         }
         
         
        </div>
    </>
  );
}