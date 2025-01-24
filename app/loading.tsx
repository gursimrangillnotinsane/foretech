import React from 'react'

const loading = () => {
    setTimeout(() => {

    }, 3000)
    return (
        <div className='flex justify-center items-center h-screen'>
            <h1>Loading...</h1>
        </div>
    )
}

export default loading
