'use client';
import React from 'react'
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
        <section>
            <div className='background h-screen z-0 relative top-10 rounded-2xl flex '>
                <div className='flex justify-center items-center flex-col '>
                    <h2 className='p-8'>
                        Transforming your ideas into innovative,<br />
                        high-performing websites that drive results.
                    </h2>
                    <button>Lets get started</button>
                </div>
                <div></div>
                {/* <div className="container">
                <svg id="svg-stage" xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 110 110" fill="none">
                    <defs>
                        <linearGradient id="grad-1" x1="-4" y1="-4" x2="9" y2="9" gradientUnits="userSpaceOnUse">
                            <stop offset="0.2" stopColor="rgb(255, 135, 9)" />
                            <stop offset="0.5" stopColor="rgb(247, 189, 248)" />
                        </linearGradient>
                    </defs>
                    <path stroke="rgb(250,225,225)" d="M50.5 50.5h50v50s-19.2 1.3-37.2-16.7S56 35.4 35.5 15.5C18.5-1 .5.5.5.5v50h50s25.6-.6 38-18 12-32 12-32h-50v100H.5S.2 80.7 11.8 68.2 40 49.7 50.5 50.5Z" />
                    <rect fill="url(#grad-1)" width="8" height="8" x="-4" y="-4" rx="2" />
                </svg>
            </div>*/}
            </div>
        </section>
    )
}

export default homeBackground
