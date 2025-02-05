'use client'
import React, { use } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin)
const aboutComponent = () => {
    const data = [{
        title: 'E-commerce',
        image: '/svg/ecommerce.svg',
        alt: 'ecommerce'
    },
    {
        title: 'Food and Beverage',
        image: '/svg/food.svg',
        alt: 'food'
    },
    {
        title: 'Construction',
        image: '/svg/construction.svg',
        alt: 'construction'
    },
    {
        title: 'Factory',
        image: '/svg/factory.svg',
        alt: 'factory'
    }
    ]
    return (
        <section className='py-20 rounded-2xl'>
            <div className='text-container flex flex-col justify-center items-center  '>
                <div className='flex flex-col w-full justify-center items-center align-top' >
                    <h2>Industry-Wide Impact</h2>
                    <p>With years of experience supporting businesses across diverse industries, we provide top-tier online services that set us apart. Let us show you why we are the trusted choice for businesses worldwide.</p>
                </div>
                <div className='flex  w-full justify-evenly items-center flex-wrap mt-4 lg:mt-20'>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col justify-center items-center m-4 w-1/3 lg:w-1/6 '>

                                <img src={item.image} alt={item.alt} />
                                <h3>{item.title}</h3>
                            </div>
                        )
                    })}


                </div>
            </div>
        </section>
    )
}

export default aboutComponent
