import React from 'react'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div  className='flex justify-between bg-red-300'>
      <Link to="/about">about</Link>
      <Link to="/profile">profile</Link>
    </div>
  )
}

export default Home
