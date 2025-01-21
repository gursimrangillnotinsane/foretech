import React from 'react'

const header = () => {
    return (

        <nav className='flex justify-center p-4' >
            <div className='navigation flex justify-between items-center fixed  z-50 w-3/4 p-2 px-4 rounded-xl'>
                <h3>ForeTech</h3>
                <ul className='flex justify-between items-center gap-8'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>

    )
}

export default header
