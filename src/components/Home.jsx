
import React, { useEffect, useState } from 'react'
import Navegate from './Navegate';

function Home(props) {
    const [user, setUser] = useState([])
    const [index, setIndex] = useState(1);
    const [limite, setLimite] = useState(10);

    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=${limite}`)
            const data = await res.json();
            setUser(data);
        }
        getData()
    }, [index, limite]) //call only one time

    function handleScroll() {
        props.setIsClick(true)
    }
    window.addEventListener("scroll", handleScroll);


    return (
        <>
            <div
                className='grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-5  gap-10 px-4 mx-auto   text-white  py-5   lg:container  justify-between'>
                {user.length != 0 ? user.map((item, idx) => (
                    <div key={idx} className='h-52 w-full hover:scale-105 duration-500 transition-all ease-in-out'>
                        <a target='_blank' href={item.url}>
                            <img className='w-full h-full object-cover rounded-md' src={item.download_url} alt="" />
                            <h1 className='text-lg font-medium w-full'>{item.author}</h1>
                        </a>
                    </div>
                )) : <div className='lg:h-[72vh] 2xl:h-[46vh]'><h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-medium text-gray-300'>Lodding...</h1></div>}


            </div>
            <div className='w-full flex justify-center pt-5  flex-col items-center gap-3'>
                <i className={`fas fa-angle-${limite == 40 ? 'up' : 'down'} text-lg font-semibold cursor-pointer active:scale-90 bg-gray-900 text-white rounded-md`}
                    onClick={() => limite != 40 ? setLimite(limite + 10) : setLimite(limite - 30)}
                >
                </i>
                <Navegate setIndex={setIndex} index={index} setUser={setUser} setLimite={setLimite} />
            </div>
        </>
    )
}

export default Home
