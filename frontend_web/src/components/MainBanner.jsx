import React from 'react'
import banner from '../assets/Grocery.jpg'
import arrow from "../assets/right-arrow.png"
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className="relative">
     
      <img 
        src={banner} 
        alt="banner" 
        className="hidden md:block w-full h-[450px] object-cover rounded" 
      />

      
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-20 lg:pl-24 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left leading-tight">
         <span className='text-green-800'>Freshness </span> 
             <div className='text-orange-500'>you can Trust, </div>
             <div className='text-white'>Savings You will love!</div>
        </h1>

       
        <div className="flex items-center mt-6 font-medium">
          
          <Link 
            to="/products" 
            className="group flex items-center gap-2 px-7 md:px-9 py-3 bg-orange-600 hover:bg-amber-700 transition rounded text-white cursor-pointer"
          >
            Shop Now
            <img 
              src={arrow} 
              alt="right-arrow" 
              className="md:hidden w-5 h-5 transition group-hover:translate-x-1" 
            />
          </Link>

         
          <Link 
            to="/products" 
            className="group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer text-white"
          >
            Explore more
            <img 
              src={arrow} 
              alt="right-arrow" 
              className="w-5 h-5 transition group-hover:translate-x-1 " 
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner
