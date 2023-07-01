import React, { useContext } from 'react'

import { CartContext } from './Context'

function Card({product}) {

    const {cartData, setCartData}=useContext(CartContext);

    // console.log(typeof cartData);

  return (
    <div className='h-[20%] w-[25%] bg-slate-300 hover:shadow-2xl'>
      
       <img src={product.image} alt=".." />
       <h3>{product.name}</h3>
       <h2>{product.price}</h2>


      {
        (cartData.includes(product)) ?   ( <button  className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-red-400"
                                                     onClick={()=>(
                                                       setCartData( cartData.filter((c) => c.id !== product.id)))
                                                     } 
                                                >   Remove from cart     </button>)                                                  
                                          

                                     :     (<button  className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-green-400" 
                                                 onClick={()=>(setCartData([...cartData, product]))} >
                                                       Add to cart      </button>)            
  
             }

               

    </div>
  )
}

export default Card
