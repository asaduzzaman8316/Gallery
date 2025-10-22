import React from 'react'
import { Link } from 'react-router-dom'

function MobileHeader(propse) {
    function HandlerOnCLick() {
        propse.isClick ? propse.setIsClick(false) : propse.setIsClick(true)
    }
    
    return (
        <div>
            <div className='md:hidden bg-red-500 rounded-full size-8 text-xl flex justify-center items-center'>
                <button
                    onClick={() => {
                        HandlerOnCLick()
                    }}
                >
                    <i className='fas fa-bars-staggered '>
                    </i>
                </button>
            </div>
            <div className={propse.isClick ? 'hidden' : 'block'}>
                <div
                 className={`absolute z-50 top-10  right-4 rounded-md font-semibold bg-white/5 backdrop-blur-lg   flex flex-col w-[50%] px-10 py-15 text-2xl  gap-8`}>
                    <Link
                        onClick={() => propse.setIsClick(true)}
                        className='bg-white/10 px-2 py-1 rounded-md backdrop-blur-2xl' to='/'>
                        Home
                    </Link>
                    <Link
                        onClick={() => propse.setIsClick(true)}
                        className='bg-white/10 px-2 py-1 rounded-md backdrop-blur-2xl' to='/about'>
                        About
                    </Link>
                    <Link
                        onClick={() => propse.setIsClick(true)}
                        className='bg-white/10 px-2 py-1 rounded-md backdrop-blur-2xl' to='privacy'>
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MobileHeader
