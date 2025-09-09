import React from 'react'

const Categories = () => {
  return (
    <div className='mt-16'>
        <p className='text-2xl md:text-3xl font-medium'>
            Categories
        </p>
        <div className='grid  sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 mt-6 gap-6'>
            <div className='group py-5 px-3 cursor-pointer gap-2 rounded-lg flex flex-col justify-center items-center'>
            <img src='' alt='' className='group-hover:scale-108 transition max-w-28'/>
            <p className='text-sm font-medium'>fruit</p>
            </div>
        </div>
    </div>
  )
}

export default Categories