'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { ReactLenis, useLenis } from 'lenis/react'
import React from 'react'

const page = () => {
    const data = [
        { title: 'Arjan Gill Sounds', url: 'https://www.arjangillsounds.com' },
        { title: 'work02', url: 'https://www.google.com' },
        { title: 'work03', url: 'https://www.google.com' },
        { title: 'work04', url: 'https://www.google.com' },
        { title: 'work04', url: 'https://www.google.com' },
        { title: 'work04', url: 'https://www.google.com' },
        { title: 'work04', url: 'https://www.google.com' },
        { title: 'work04', url: 'https://www.google.com' },
        { title: 'work04', url: 'https://www.google.com' },
    ];
    return (
        <>
            <ReactLenis root options={{ smoothWheel: true, duration: 2, easing: (t) => t * (2 - t) }}>
                <section className='z-0 py-0 m-0'>

                    <div className=' flex flex-col justify-between items-center h-screen '>
                        <Header />
                        <div className=" sticky top-0 heading-container mb-8 overflow-hidden flex flex-col justify-center items-center h-screen z-0">
                            <h2 className="workHeading">Projects</h2><br />
                            <p>That we have done</p>
                        </div>
                    </div>
                    <div className="pt-10 grid grid-cols-1 lg:grid-cols-3 gap-2 ">
                        {data.map((item, index) => (
                            <div key={index} className={`work flex flex-col justify-center items-center  `} >
                                {/* <h3>{item.title}</h3> */}
                                <div className="  w-full  h-full relative">
                                    <iframe src={item.url} title={item.title} scrolling="no" ></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <Footer />
            </ReactLenis>
        </>
    )
}

export default page
