'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import { Resend } from 'resend';
import { ReactLenis, useLenis } from 'lenis/react'
import { useState } from 'react';

const page = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [topic, setTopic] = useState('General Inquiry'); // Default optionconst
    const [sent, setSent] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const formData = { email, subject, message, topic };

        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSent('true');
            setEmail('');
            setSubject('');
            setMessage('');
            setTopic('General Inquiry');
        } else {
            setSent('false');
        }
    };

    return (
        <>
            <ReactLenis root options={{ smoothWheel: true, duration: 1.5, easing: (t) => t * (2 - t) }}>
                <section className='z-0 py-0 m-0'>

                    <div className=' flex flex-col justify-between items-center h-screen '>
                        <Header />

                        <div className='flex justify-center items-center '>
                            <h2>Don't be shy <br /> Say Hi !!</h2>
                        </div>
                        <div className='flex flex-col lg:flex-row w-full  lg:justify-evenly items-start gap-4'>
                            <div className='flex flex-col gap-4 p-4'>
                                <h3>Contact</h3>
                                <a href='mailto:support@forestepinfotech.com'>support@forestepinfotech.com</a>
                                <p>+1(780) 993-1330</p>
                            </div>
                            <div className='flex flex-col  gap-4 p-4'>

                                <h3>Social</h3>
                                <div className='flex flex-row gap-4'>
                                    <a href='https://www.facebook.com/profile.php?id=61560455467426&mibextid=wwXIfr&rdid=qv2RywwsDf3GIhMd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18eWZ5LKG2%2F%3Fmibextid%3DwwXIfr'>Facebook</a>

                                    <a href='https://www.instagram.com/forestepinfotech/'>Instagram</a>
                                </div>

                            </div>
                            <div className='flex flex-col gap-4 p-4'>
                                <h3>Location</h3>
                                <p>3317 11th Ave NW, Edmonton AB T6T 2C5, Canada</p>
                            </div>
                        </div>
                    </div>
                </section >
                <section className='z-0 '>
                    <div className='flex w-full gap-4  items-center'>
                        <div className='flex justify-center w-1/2 '>
                            <img src="https://i.pinimg.com/736x/b8/82/57/b88257371854f5c7073ff2190b49c721.jpg" alt="Contact Us" />
                        </div>
                        <div className='form w-[50%]'>
                            <h3 className=' mb-8' >Contact us via an email</h3>
                            <form onSubmit={handleSubmit}>
                                <div className='flex  flex-col gap-2 m-4'>
                                    <div className='flex items-center justify-between flex-wrap  '>
                                        <div className='flex flex-col w-full' >
                                            <h4>Your Email</h4>
                                            <input type="email" name="email" value={email}
                                                onChange={(e) => setEmail(e.target.value)} required />
                                        </div>
                                        <div className='mt-8'>
                                            <h4>Select Topic</h4>
                                            <select
                                                name="topic"
                                                value={topic}
                                                onChange={(e) => setTopic(e.target.value)}
                                                required
                                            >
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Support Request">Support Request</option>
                                                <option value="Feedback">Feedback</option>
                                                <option value="Business Inquiry">Business Inquiry</option>
                                            </select>
                                        </div>
                                    </div>
                                    <h4>The Subject</h4>
                                    <input type="text" name="subject" value={subject}
                                        onChange={(e) => setSubject(e.target.value)} required />

                                    <h4>The Message</h4>
                                    <textarea name="message" value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required ></textarea>
                                </div>
                                {sent === 'true' && <p className='text-green-300'>Your message has been sent successfully</p>}
                                {sent === 'false' && <p className="text-red-500">There was an error, Please try again!</p>}
                                <button className='altButton m-4' type="submit">Send Message</button>

                            </form>
                        </div>
                    </div>
                </section >
                <Footer />
            </ReactLenis>
        </>
    )
}

export default page
