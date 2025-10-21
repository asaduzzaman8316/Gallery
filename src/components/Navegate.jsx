import React from 'react'

function Navegate(props) {
    return (
        <div className='flex justify-center gap-5 items-center  w-full'>
            <button className='px-8 py-1  cursor-pointer bg-red-500  rounded-lg text-white text-sm font-medium'
                onClick={() => {
                    props.index != 1 && props.setIndex(props.index - 1)
                    props.setUser([])
                    props.setLimite(10)
                }}
            >
                Prev
            </button>
            <h1 className='text-lg font-bold'>Page-{props.index}</h1>
            <button className='px-8 py-1  cursor-pointer bg-red-500  rounded-lg text-white text-sm font-medium'
                onClick={() => {
                    props.setIndex(props.index + 1)
                    props.setUser([])
                    props.setLimite(10)
                }}
            >
                Next
            </button>
        </div>
    )
}

export default Navegate
