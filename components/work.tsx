'use client';
import React, { use } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
    const data = [
        { title: 'Arjan Gill Sounds', url: 'https://www.arjangillsounds.com' },
        { title: 'work02', url: 'https://www.google.com' },
        { title: 'work03', url: 'https://www.google.com' },
    ];

    useGSAP(() => {
        // Animate the heading
        gsap.to('.workHeading', {
            rotate: 180, // Full rotation
            translateX: -100, // Move to the right
            fontSize: '50rem ',
            duration: 2, // Adjust to control the spin speed
            scrollTrigger: {
                trigger: '.heading-container',
                start: 'top top', // Start animation when the heading reaches the top
                end: 'bottom+=1200', // Extend animation until enough content has scrolled above
                toggleActions: 'play none none reverse',
            },
        });



        data.forEach((_, index) => {
            gsap.fromTo(
                `.work:nth-of-type(${index + 1})`,
                { scale: 0.5, filter: 'blur(3px)' },
                {
                    scale: 1,
                    filter: 'blur(0px)',
                    scrollTrigger: {
                        trigger: `.work:nth-of-type(${index + 1})`,
                        start: 'top 70%',
                        end: 'top 40%',
                        scrub: true,
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    });

    return (
        <section>
            <div className="pt-10 ">

                <div className=" sticky top-0 heading-container mb-8 overflow-hidden flex justify-center items-center h-screen z-0">
                    <h2 className="workHeading">Our <br /> Work</h2>
                </div>
                <div className=" z-10">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="work flex justify-around items-center h-96 border border-[#ededed] rounded-xl my-8 backdrop-blur-lg shadow-lg bg-glass backdrop-brightness-50"
                        >
                            <h3 className="p-4">{item.title}</h3>
                            <div className="shadow lg:w-1/3 w-full m-4 lg:h-3/4 relative">
                                <iframe src={item.url} title={item.title} scrolling="no" ></iframe>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
            <div className="flex justify-center items-center pt-4">
                <button className='z-10 altButton' onClick={() => window.location.href = '/projects'}>View More</button>
            </div>
        </section>
    );
};

export default Work;
