import Link from 'next/link'
import React from 'react'

const header = () => {
    return (

        <nav className='flex justify-center p-4' >
            <div className='navigation flex justify-between items-center fixed  z-50 w-[94%] lg:w-3/4 p-2 px-4 rounded-xl '>
                <Link href='/'><h3>Forestep Infotech </h3></Link>
                <ul className='flex justify-between items-center gap-4 lg:gap-8'>
                    <Link href='/'><li>Home</li></Link>
                    {/* <li>About</li>
                    <li>Service</li> */}
                    <Link href='/projects'><li>Projects</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>


                </ul>
            </div>
        </nav>

    )
}

export default header
