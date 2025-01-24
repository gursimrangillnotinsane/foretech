import Link from 'next/link'
import React from 'react'

const contactComponent = () => {
    return (
        <section className='contact background rounded-2xl m-8 ' >
            <Link href='/contact'> <div className='flex justify-center items-center h-screen text-balance'>
                <h2 className='text-black '>Get In Touch</h2>

            </div>
            </Link>
        </section>
    )
}

export default contactComponent
