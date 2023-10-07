import React from 'react'
import { adOne, adTwo } from '../data/data'

function AdSection() {
  return (
    <div className='flex gap-x-2 p-5'>
        <AdOne adOne={adOne}/>
        <AdTwo adTwo={adTwo}/>       
    </div>
  )
}

export default AdSection


function AdOne({adOne}){
    return (
        <div className='bg-blue-300 w-[20rem] h-[14rem] md:w-[30rem] md:h-[18rem] lg:w-[40rem] lg:h-[22rem] rounded-lg p-2'>
            <div className='mb-5'>
                <div className='w-[15rem] lg:w-[17rem]'>
                    <h1 className='font-semibold md:text-xl lg:text-2xl lg:font-bold text-white'>{adOne.title}</h1>
                </div>
                <div className='w-[13rem] lg:w-[18rem]'>
                    <h2 className='text-white text-sm md:text-base'>{adOne.description}</h2>
                </div>
            </div>
            <button className='p-1 text-sm lg:p-3 lg:text-base bg bg-blue-600 text-white rounded-md'> Rental Car </button>          
            <img className='mx-auto w-[12rem] h-[3rem] md:w-[18rem] md:h-[5rem] lg:w-[25rem] lg:h-[7rem]' src={adOne.imgUrl} alt="" />    
        </div>
    )
}

function AdTwo({adTwo}){
    return (
        <div className='hidden lg:block bg-blue-500 w-[20rem] h-[14rem] md:w-[30rem] md:h-[18rem] lg:w-[40rem] lg:h-[22rem] rounded-lg p-2'>
            <div className='mb-5'>
                <div className='w-[15rem] lg:w-[17rem] '>
                    <h1 className='font-semibold md:text-xl lg:text-2xl lg:font-bold text-white'>{adTwo.title}</h1>
                </div>
                <div className='w-[13rem] lg:w-[18rem]'>
                    <h2 className='text-white text-sm md:text-base'>{adTwo.description}</h2>
                </div>
            </div>
            <button className='p-1 text-sm lg:p-3 lg:text-base bg bg-blue-600 text-white rounded-md'> Rental Car </button>          
            <img className='mx-auto w-[12rem] h-[3rem] md:w-[18rem] md:h-[5rem] lg:w-[25rem] lg:h-[7rem]' src={adTwo.imgUrl} alt="" />    
        </div>
    )
}