'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
const homeHero = () => {
    useGSAP(() => {
        gsap.to('.heading',
            {
                top: '0px',
                duration: 1.5,
                ease: 'power2.out',
                delay: 1,
                translateY: '-1000px',
                backgroundColor: '#0a0a0a5c',
                backdropFilter: 'blur(10px)',
            }
        );
    });


    return (
        <div className='heading flex h-screen items-center justify-center z-40 fixed top-0 left-0 w-full bg-[#0a0a0a]  text-white '>
            <h1 >ForeTech</h1>
        </div>
    )
}

export default homeHero
