import React from 'react'

const footer = () => {
    return (
        <section className='n m-0'>
            <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 ">

                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold">ForeTech</h2>
                    <p className="mt-2 text-sm">Empowering your future with cutting-edge technology solutions.</p>
                </div>



                <div className="text-center md:text-right">
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <p className="mt-2 text-sm">123 Tech Street<br />Innovation City, 45678</p>
                    <p className="mt-2 text-sm">Email: <a href="mailto:info@foretech.com" className="hover:underline">info@foretech.com</a></p>
                    <p className="text-sm">Phone: (123) 456-7890</p>
                </div>
            </div>
            <div className="mt-6 text-center border-t border-gray-600 pt-4">
                <p className="text-sm">&copy; 2025 ForeTech. All rights reserved.</p>
            </div>
        </section>
    )
}

export default footer
