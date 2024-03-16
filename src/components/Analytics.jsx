import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className=' max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='text-black flex flex-col justify-center'>
                <p className='font-bold text-[#00df9a]'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p className=' text-base md:text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quo, maiores vitae nam assumenda quisquam labore sequi dolorem illum odit nostrum dicta amet optio obcaecati inventore voluptatibus totam natus tenetur?</p>
                <button className="text-[#00df9a] w-[200px] rounded-lg py-3 mx-auto my-6 font-bold bg-black md:mx-0">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics