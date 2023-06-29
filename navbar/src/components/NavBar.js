import React from 'react'

import menu from "./images/menu.svg";

function NavBar() {
    const eventMenu=(e)=>{
         const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('top-[9%]')
         console.log("hi");
    }
  return (
    <div className='flex justify-between items-center w-[92%] mx-auto'>


            <div className='bg-grey-100'>
            <img className="w-16" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..." />
            </div>
            
            <div className='nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5'>
                <ul className='flex md:flex-row flex-col md:items-center md:gap-16 gap-8'>

                    <li><a className='hover:text-gray-500'  href="#">Product</a></li>

                    <li><a className='hover:text-gray-500' href="#">Product</a></li>

                    <li><a className='hover:text-gray-500' href="#">Product</a></li>

                    <li><a className='hover:text-gray-500' href="#">Product</a></li>
                </ul>
            </div>

            <div>
                <button className="bg-amber-600 text-white px-5 py-2 rounded-full hover:bg-red-700">Sign In</button>
            </div>

            <div className='flex items-center gap-6'> 
        
                    <img className="h-8 w-8 md:hidden" onClick={(e)=>eventMenu(e)} src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg" alt="..." />
           
            </div>

    </div>
  )
}

export default NavBar
