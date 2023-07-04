import React ,{useState,useEffect} from 'react'

import Sidebar from './Sidebar'
import MainBody from './MainBody'
import { YOUTUBE_API } from '../utility/constant'

function Body() {
 
  const [data,setData]=useState("kuch nahi mila");   

useEffect(()=>{
    retriveData();
},[]);   

 const retriveData=async ()=>{
    const dataFetched= await fetch(YOUTUBE_API);
    const json=dataFetched.json();
    setData(json);
 }


  return (
    <div className='flex'>
      <Sidebar/>
      <MainBody dataApi={data}/>
    </div>
  )
}

export default Body
