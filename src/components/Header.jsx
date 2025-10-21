import React from 'react'

function Header(props) {
    return (
        <div className='flex justify-between container list-none text-lg font-medium  py-3 mx-auto w-[90%]'>
            <li className='text-xl'>My Gallery</li>
            <div className='flex gap-5'>
                <li className='hover:bg-red-500 px-2 py-1 rounded  hover:text-white duration-500 transition-all cursor-pointer'
                    onClick={() => {
                        props.setIndex(1);
                        props.setUser([]);
                    }}
                >
                    Home
                </li>
                <li className='hover:bg-red-500 px-2 py-1 rounded  hover:text-white duration-500 transition-all cursor-pointer'
                >
                    About
                </li>
                <li className='hover:bg-red-500 px-2 py-1 rounded  hover:text-white duration-500 transition-all cursor-pointer'
                >
                    Privecy Policy
                </li>
            </div>
        </div>
    )
}

export default Header
