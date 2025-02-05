import React from 'react'
import { TiTick } from "react-icons/ti";
const technologies = () => {
    const data = [{
        title: 'Websites ',
        technologies: ['React', 'Angular', 'Vue', 'Wordpress', "DotNet"]
    },
    {
        title: 'Mobile Apps',
        technologies: ['React Native', 'Flutter', 'Android', 'iOS']
    },
    {
        title: 'Desktop Apps',
        technologies: ['Electron', 'Java', 'C#']
    },
    {
        title: 'Mac apps',
        technologies: ['Swift', 'Objective-C']
    }]
    return (
        <section >
            <div className='flex justify-center items-center'>
                <h2>We make</h2>
            </div>

            <div className='  make flex justify-evenly items-top flex-wrap m-4'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='background rounded-2xl p-4 m-4 lg:w-1/5 w-9/12' >
                            <div className='flex items-baseline p-4'>
                                <h3>{item.title} </h3> <p> &nbsp; using</p>
                            </div>
                            <div className='p-2 m-2' >
                                <ul>
                                    {item.technologies.map((tech, i) => (
                                        <li className='m-2 flex text-black' key={i}><TiTick />{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default technologies
