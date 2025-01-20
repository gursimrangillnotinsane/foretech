'use client';
import React, { use } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
    const data = [
        { title: 'work01', url: 'https://www.google.com' },
        { title: 'work02', url: 'https://www.google.com' },
        { title: 'work03', url: 'https://www.google.com' },
        { title: 'work04', url: 'https://www.google.com' },
    ];

    useGSAP(() => {
        // Animate the heading
        gsap.to('.workHeading', {
            rotate: 180, // Full rotation
            translateX: -100, // Move to the right
            scale: 200, // Increase size slightly
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
                    <h3 className="workHeading">Our Work</h3>
                </div>
                <div className=" z-10">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="work flex justify-around items-center h-60 border border-[#ededed] rounded-xl m-8 backdrop-blur-lg shadow-lg bg-glass backdrop-brightness-50"
                        >
                            <h3 className="">{item.title}</h3>
                            <iframe src={item.url} title={item.title} className="shadow lg:w-1/4 w-1/2" ></iframe>
                        </div>
                    ))}

                </div>

            </div>
            <div className="flex justify-center items-center pt-4">
                <button className='z-10 altButton'>View More</button>
            </div>
        </section>
    );
};

export default Work;
