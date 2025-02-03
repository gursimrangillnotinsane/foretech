'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'

import { ReactLenis, useLenis } from 'lenis/react'
const page = () => {
    return (
        <>
            <ReactLenis root options={{ smoothWheel: true, duration: 1.5, easing: (t) => t * (2 - t) }}>
                <section className='z-0 py-0 m-0'>

                    <div className=' flex flex-col justify-between items-center h-screen '>
                        <Header />

                        <div className='flex justify-center items-center '>
                            <h2>Don't be shy <br /> Say Hi !!</h2>
                        </div>
                        <div className='flex flex-col lg:flex-row w-full  lg:justify-evenly items-start gap-4'>
                            <div className='flex flex-col gap-4 p-4'>
                                <h3>Contact</h3>
                                <a href='mailto:support@forestepinfotech.com'>support@forestepinfotech.com</a>
                                <p>+1(780) 993-1330</p>
                            </div>
                            <div className='flex flex-col  gap-4 p-4'>

                                <h3>Social</h3>
                                <div className='flex flex-row gap-4'>
                                    <a href='https://www.facebook.com/profile.php?id=61560455467426&mibextid=wwXIfr&rdid=qv2RywwsDf3GIhMd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18eWZ5LKG2%2F%3Fmibextid%3DwwXIfr'>Facebook</a>

                                    <a href='https://www.instagram.com/forestepinfotech/'>Instagram</a>
                                </div>

                            </div>
                            <div className='flex flex-col gap-4 p-4'>
                                <h3>Location</h3>
                                <p>3317 11th Ave NW, Edmonton AB T6T 2C5, Canada</p>
                            </div>
                        </div>
                    </div>
                </section >
                <section className='z-0 '>
                    <div className='flex w-full gap-4  items-center'>
                        <div className='flex justify-center w-1/2 '>
                            <img src="https://i.pinimg.com/736x/b8/82/57/b88257371854f5c7073ff2190b49c721.jpg" alt="Contact Us" />
                        </div>
                        <div className='form w-[50%]'>
                            <h3 className=' mb-8' >Contact us via an email</h3>
                            <form action="https://formbold.com/s/3N1LY" method="POST" encType="multipart/form-data">
                                <div className='flex flex-col gap-1 m-4'>
                                    <h4>Your Email</h4>
                                    <input type="email" name="email" />
                                    <h4>The Subject</h4>
                                    <input type="text" name="subject" />
                                    <h4>The Message</h4>
                                    <textarea name="message" ></textarea>
                                </div>
                                <button className='altButton m-4' type="submit">Send Message</button>

                            </form>
                        </div>
                    </div>
                </section >
                <Footer />
            </ReactLenis>
        </>
    )
}

export default page
