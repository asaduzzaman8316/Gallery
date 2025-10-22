import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='flex justify-between container list-none text-lg font-medium  py-3 mx-auto w-[90%]'>
            <li className='text-xl'>My Gallery</li>
            <div className='flex gap-5'>
                <Link to="/">
                    <li className='hover:bg-red-500 px-2 py-1 rounded  hover:text-white duration-500 transition-all cursor-pointer'
                    >
                        Home
                    </li>
                </Link>
                <Link to="/about"><li className='hover:bg-red-500 px-2 py-1 rounded  hover:text-white duration-500 transition-all cursor-pointer'
                >
                    About
                </li></Link>
                <Link to='/privacy'>
                    <li className='hover:bg-red-500 px-2 py-1 rounded  hover:text-white duration-500 transition-all cursor-pointer'
                    >
                        Privecy Policy
                    </li>
                </Link>
            </div>
        </div>
    )
}

export default Header
