'use client';
import { Navigation, Pagination, A11y, EffectCreative, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CgChevronRight } from "react-icons/cg";
import './swiper.css';
const swiperServices = () => {
    const services = [
        {
            "name": "Basic Plan",
            "originalPrice": 398.00,
            "discountedPrice": 149.00,
            "description": "Perfect for startups and businesses looking for a fresh brand presence.",
            "features": [
                "3 Custom Pages",
                "Custom logo design",
                "1 jQuery Slider Banner",
                "Integrated Contact Form",
                "Fast Delivery (48-72 Hours)",
                "Complete Deployment",
                "Money-Back Guarantee *",
                "Mobile Responsive (Not Included)",
                "CMS / Admin Panel (Not Included)",
                "SEO-Optimized Sitemap (Not Included)",
                "Lead Capture Forms (Not Included)",
                "Online Payment Integration (Not Included)",
                "App Integration (Not Included)"
            ],
            "orderNow": "/order/basic"
        },
        {
            "name": "Startup Plan",
            "originalPrice": 798.00,
            "discountedPrice": 349.00,
            "description": "Ideal for ambitious startups and brand revamps.",
            "features": [
                "6 Custom Pages",
                "Custom logo + 4 stock images",
                "2 jQuery Slider Banner",
                "Integrated Contact Form",
                "W3C Certified HTML",
                "Fast Delivery (48-72 Hours)",
                "Money-Back Guarantee *",

                "SEO-Friendly Sitemap (Included)",
                "Mobile Responsive (Additional $200)",
                "CMS / Admin Panel (Additional $250)",
                "App Integration (Additional $200)",
                "Lead Capture Forms (Not Included)",
                "Online Payment Integration (Not Included)",
            ],
            "orderNow": "/order/startup"
        },
        {
            "name": "Professional Plan",
            "originalPrice": 1198.00,
            "discountedPrice": 599.00,
            "description": "Designed for businesses ready to scale with a strong online presence.",
            "features": [
                "10 Custom Pages",
                "Custom logo + 8 High-Quality Stock Images",
                "5 Banner Designs",
                "3 jQuery Slider Banner",
                "Integrated Contact Form",
                "W3C Certified HTML",
                "Fast Delivery (48-72 Hours)",
                "Complete Deployment Assistance",
                "Money-Back Guarantee *",
                "Mobile Responsive (Included)",
                "CMS / Admin Panel (Included)",
                "SEO-Optimized Sitemap (Included)",
                "App Integration (Included)",
                "Lead Capture Forms (Not Included)",
                "Online Payment Integration (Not Included)",

            ],
            "orderNow": "/order/professional"
        },
        {
            "name": "Elite Plan",
            "originalPrice": 2499.00,
            "discountedPrice": 1249.00,
            "description": "For brands seeking a dynamic and high-performance website.",
            "features": [
                "Up to 15 Custom Pages",
                "Custom logo + 10 High-Quality Stock Images",
                "Innovative & Dynamic Web Design",
                "5 Stock Photos",
                "3 Unique Banner Designs",
                "1 jQuery Slider Banner",
                "W3C Certified HTML",
                "Fast Delivery (48-72 Hours)",
                "Complete Deployment Assistance",
                "Money-Back Guarantee *",
                "SEO Submission (Included)",
                "Mobile Responsive (Included)",
                "Lead Capture Forms (Included)",
                "CMS / Admin Panel (Included)",
                "Online Payment Integration (Included)",
                "App Integration (Included)"
            ],
            "orderNow": "/order/elite"
        },
        // {
        //     "name": "Corporate Plan",
        //     "originalPrice": 3899.00,
        //     "discountedPrice": 1949.00,
        //     "description": "A high-end, fully custom solution for established businesses.",
        //     "features": [
        //         "15-20 Custom Pages",
        //         "Premium Interactive & Dynamic Design",
        //         "10 Stock Images",
        //         "10 Custom Banner Designs",
        //         "1 jQuery Slider Banner",
        //         "SEO-Optimized Sitemap (Included)",
        //         "W3C Certified HTML",
        //         "Fast Delivery (48-72 Hours)",
        //         "Complete Deployment Assistance",
        //         "Money-Back Guarantee *",
        //         "Mobile Responsive (Included)",
        //         "Lead Capture Forms (Included)",
        //         "Online Payment Integration (Included)"
        //     ],
        //     "orderNow": "/order/corporate"
        // }
    ];

    return (
        <div className='flex flex-wrap justify-center mb-8'>
            {services.map((type, index) => (
                <div key={index} className="flex   justify-center cardService m-1  p-4 rounded-lg h-5/6">
                    <div className='z-[1]'>
                        <h3 className='py-4 text-center'><strong>{type.name}</strong></h3>
                        <p className='line-through  text-gray-400 text-center' >${type.originalPrice}</p>
                        <div className='flex justify-center'>
                            <h4 className='  price w-min text-center' ><strong>${type.discountedPrice}</strong></h4>
                        </div>
                        <ul>
                            {type.features.map((item, i) => (
                                <li key={i}>
                                    <p className='py-2 flex items-center'><CgChevronRight className={`text-lg ${item.includes("Not Included") ? "text-gray-400" : "text-sky-100"}`} />
                                        <span className={item.includes("Not Included") ? "text-gray-400" : ""}>{item}</span></p>

                                </li>
                            ))}
                        </ul>
                        <button className='altButton m-4' onClick={() => { window.open('/contact') }}>Order now</button>
                    </div>

                </div>

            ))}
        </div>
    )
}

export default swiperServices
