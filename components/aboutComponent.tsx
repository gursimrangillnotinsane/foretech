'use client'
import React, { use } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)
const aboutComponent = () => {
    useGSAP(() =>
        gsap.to(".text-container>h3", {
            scrollTrigger: {
                trigger: ".text-container",
                start: "top 50%",
                end: "50% top",
                toggleActions: 'play reset play none',
            }, duration: 2,
            speed: 1,
            text: "At Forestep Infotech, we craft innovative, high-performing websites that help businesses thrive online",
            ease: "none",
        })
    )

    return (
        <section className=' bg-black flex justify-center items-center'>
            <div className='text-container flex justify-start items-center h-[50vh] w-screen  '>
                <h3></h3>
            </div>
        </section>
    )
}

export default aboutComponent
