import React, { useState } from 'react'

import { faker } from '@faker-js/faker';
import Card from './Card';

faker.seed(100);

function Body() {

    const products=[...Array(20)].map(()=>({

        id: faker.string.uuid(),
        name : faker.commerce.productName(),
        price : faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'nature' }),
        


    }));

    const [product]=useState(products);


  return (
    <div className='container flex flex-wrap justify-evenly gap-6'>

        {
            product.map((prod)=>(
                <Card product={prod} key={prod.id} />
            ))
        
        }
      
    </div>
  )
}

export default Body
