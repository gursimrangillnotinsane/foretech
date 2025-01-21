import React from 'react'
import SwiperServices from './swiperServices';
const service = () => {
    return (
        <section className="serviceSection rounded-2xl  h-screen flex flex-col justify-between   ">
            <div className='flex justify-left items-center pt-16 ' >
                <h3>Service</h3>
            </div>
            <SwiperServices />
        </section>
    )
}

export default service
