import React from 'react'
import SwiperServices from './swiperServices';
const service = () => {
    return (
        <>
            <section className='background rounded-2xl'  >
                <div className='flex justify-center '>
                    <h2>Service Packages</h2>
                </div>
                <div className=" rounded-2xl  flex flex-col  justify-evenly ">

                    <SwiperServices />
                </div>

            </section>
            <section className='background rounded-2xl'  >

                <div className=" consult flex justify-center" >
                    <h3 className="m-4 ">Cant find what you are looking for?</h3> <button className='m-4' >Consult us</button>
                </div>
            </section>
        </>
    )
}

export default service
