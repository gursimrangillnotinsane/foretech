import React from 'react'
import SwiperServices from './swiperServices';
const service = () => {
    return (
        <section className=' h-screen'>
            <h2>Service</h2>
            <div className="serviceSection rounded-2xl  flex flex-col h-full justify-between   ">
                <div className='flex justify-left items-center pt-16 ' >
                </div>
                <SwiperServices />
            </div>
        </section>

    )
}

export default service
