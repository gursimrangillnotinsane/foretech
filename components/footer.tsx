'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const footer = () => {
    useEffect(() => {
        const marquee = gsap.timeline({ repeat: -1, yoyo: true }); // Loop infinitely and reverse on repeat

        marquee.to(".led-text", {
            x: "100%", // Move text completely out of the visible area
            duration: 5, // Adjust speed of the animation
            ease: "linear", // Smooth linear movement
        });
    }, []);
    const date = new Date();
    const year = date.getFullYear();
    return (
        <section className='n m-0 mt-4'>
            <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 ">

                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold">Forestep Infotech</h2>
                    <p className="mt-2 text-sm">Empowering your future with cutting-edge technology solutions.</p>
                </div>



                <div className="text-center md:text-right">
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <p className="mt-2 text-sm">3317 11th Ave NW,<br /> Edmonton AB T6T 2C5, Canada</p>
                    <p className="mt-2 text-sm"><strong>Email:</strong>  <a href='mailto:support@forestepinfotech.com'>support@forestepinfotech.com</a></p>
                    <p className="text-sm"><strong>Phone:</strong>+1(780) 993-1330</p>
                </div>
            </div>
            <div className="mt-6 text-center border-t border-gray-600 pt-4">
                <p className="text-sm">&copy; {year} Forestep Infotech. All rights reserved.</p>
            </div>
        </section>
    )
}

export default footer
