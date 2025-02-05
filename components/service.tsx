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
                    <div className='flex justify-center items-center pt-16 ' >
                        <p>We offer variety of packages to suit everyones needs</p>
                    </div>
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
