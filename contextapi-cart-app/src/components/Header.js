import React, { useContext } from 'react'

import NavBar from './NavBar'
// import { CartContext } from './Context'

function Header() {
  // const cartData=useContext(CartContext);
  return (
    <div>
      <NavBar/>
        {/* { console.log({cartData})} */}
    </div>
  )
}

export default Header
