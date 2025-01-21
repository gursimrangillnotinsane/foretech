'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
const homeHero = () => {
    useGSAP(() => {
        //WITH Timelines (cleaner, more versatile)
        var tl = gsap.timeline();
        tl.to(".heading>h1",
            {
                opacity: 1,
                duration: 1,
                delay: 1,
                ease: 'power2.out',
            });
        tl.to('.heading',
            {
                top: '0px',
                duration: 1.5,
                ease: 'power2.out',
                translateY: '-1000px',
            }, ">"
        );

    });


    return (
        <div className='heading flex h-screen items-center justify-center z-40 fixed top-0 left-0 w-full bg-[#0a0a0a]  text-white '>
            <h1 className='opacity-0' >ForeTech</h1>
        </div>
    )
}

export default homeHero
