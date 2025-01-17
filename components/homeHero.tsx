'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies 



const homeHero = () => {
    useGSAP(() => {
        // gsap code here...
        gsap.to('.heading ',
            {
                top: '0px',
                duration: 1.5,
                ease: 'power2.out',
                // delay: 1,
                scale: .25,
                height: '60px',
            }
        );
    });


    return (
        <div className='heading flex h-screen items-center justify-center z-50'>
            <h1 >ForeTech</h1>
        </div>
    )
}

export default homeHero
