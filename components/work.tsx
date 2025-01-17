'use client'
import React, { use } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const work = () => {
    const data = [
        {
            title: 'work01',
            url: 'https://www.google.com'
        },
        {
            title: 'work02',
            url: 'https://www.google.com'
        },
        {
            title: 'work03',
            url: 'https://www.google.com'
        },
        {
            title: 'work04',
            url: 'https://www.google.com'
        },
    ]
    useGSAP(() => {
        data.forEach((_, index) => {
            gsap.fromTo(
                `.work:nth-of-type(${index + 1})`, // Target each work item
                {
                    scale: 0.5,
                    filter: 'blur(3px)',
                },
                {
                    scale: 1,
                    filter: 'blur(0px)',
                    // duration: .5, // Duration of animation
                    // transition: 'ease-in-out', // Transition type
                    scrollTrigger: {
                        trigger: `.work:nth-of-type(${index + 1})`,
                        start: 'top 50%', // Trigger when the element is 80% from the top of the viewport
                        end: 'top 40%',
                        scrub: true,
                        // markers: true, // For debugging, remove in production
                        toggleActions: 'play none none reverse', // Play and reverse the animation on scroll
                    },
                }
            );
        })

    })


    return (
        <section>
            <div className='flex justify-center items-center mb-8  ' >
                <h3>Work</h3>
            </div>
            <div className='pt-10'>
                {data.map((item, index) => {
                    return <div key={index} className='work flex justify-around items-center h-80 sticky top-24 border border-[#ededed] backdrop-blur-lg rounded-lg my-4'>
                        <h3 className=''>{item.title}</h3>
                        <iframe src={item.url} title={item.title}></iframe>
                    </div>
                })}
            </div>
        </section>
    )
}

export default work
