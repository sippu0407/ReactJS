import React, { useContext, useEffect, useState } from 'react'

import { CartContext } from './Context'
import Card from './Card';


function Cart() {

  const [cartData]=useContext(CartContext);

  const [price,setPrice]=useState(0);

 useEffect(() => {
    setPrice(cartData.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cartData]);


 
  return (
    <>
    <div>{price}</div>
    
     <div className='container flex flex-wrap justify-evenly gap-6'>

        {
            cartData.map((prod)=>(
                <Card product={prod} key={prod.id} />
            ))
        
        }
      
    </div>

    </>
  )
}

export default Cart
