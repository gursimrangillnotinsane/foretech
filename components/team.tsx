import React from 'react'
import Image from 'next/image'
import { Parallax } from "@/components/Parallax";
const team = () => {
    const team = [
        {
            name: 'Varinder Sandhu',
            position: 'CEO',
            parallex: 1.5,
            image: '/varinder.png',
            scale: 1.125
        },

        {
            name: 'Jasspreet Shergill Sandhu',
            position: 'Senior Manager',
            parallex: 1,
            image: '/jass.png',
            scale: 1
        },
        {
            name: 'Gursimranjot Singh Gill',
            position: 'Developer',
            parallex: 1,
            image: '/image.jpg',
            scale: .75
        }
    ]
    return (
        <section>
            <div className='flex justify-left items-center mt-8' >
                <h2>Meet our team</h2>
            </div>
            <div className='flex flex-col gap-8'>
                {team.map((member, index) => {
                    return (
                        <div key={index} className={`flex w-full items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} `}>
                            <Parallax speed={member.parallex} scale={member.scale} className={`w-max overflow-hidden flex flex-row m-8  ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} `}>
                                <Image
                                    src={member.image}
                                    alt="Image"
                                    width={600}
                                    height={400}
                                    priority
                                    sizes="50vw"
                                />

                            </Parallax>
                            <div>
                                <h3>{member.name}</h3> <br />
                                <p>{member.position}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default team
