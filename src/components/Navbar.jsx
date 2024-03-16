import React, { useState } from 'react'
import { CgMenuLeftAlt} from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const[nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='flex justify-between max-w-[1240px] items-center mx-auto px-4 h-24'>

        <h1 className='text-[#00df9a] font-bold text-3xl w-full'>React.</h1>

        <ul className='gap-6 p-4 hidden md:flex cursor-pointer'>
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div onClick={handleNav} className='block md:hidden cursor-pointer'>
            {!nav ? (<IoClose size={22} />) : <CgMenuLeftAlt size={22}/>}
        </div>

        <div className= {!nav ? 'left-0 fixed top-0 w-[60%] h-full border-r-gray-900 text-lg bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        
        <h1 className='text-[#00df9a] font-bold text-3xl w-full p-7'>React.</h1>

            <ul className='pt-4 uppercase cursor-pointer'>
                <li className='p-6 border-b-2 border-b-gray-600'>Home</li>
                <li className='p-6 border-b-2 border-b-gray-600'>Company</li>
                <li className='p-6 border-b-2 border-b-gray-600'>Resources</li>
                <li className='p-6 border-b-2 border-b-gray-600'>About</li>
                <li className='p-6'>Contact</li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar