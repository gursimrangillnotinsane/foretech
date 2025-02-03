'use client';
import React, { use } from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin)

const homeBackground = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    useGSAP(() => {
        gsap.to("rect", {
            motionPath: "path",
            duration: 20,
            ease: "none",
            repeat: -1
        });
    })

    return (
        <section className='background h-screen  z-0 relative top-7 lg:top-10 rounded-2xl flex'>
            <div className='flex justify-evenly items-center  w-full flex-col lg:flex-row'>
                <div className='flex justify-evenly lg:justify-center items-center flex-col '>
                    <h2 className='lg:p-8'>
                        We don't build programs,<br /> we build solutions
                    </h2>
                    <button onClick={() => window.location.href = '/contact'}>Lets get started</button>

                </div>
                <div className='computerbg w-[50%] h-[25%] lg:h-full lg:w-[25%] '>

                </div>
            </div>
            <div></div>

        </section>
    )
}

export default homeBackground
