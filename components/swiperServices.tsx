'use client';
import { Navigation, Pagination, A11y, EffectCreative, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiper.css';
const swiperServices = () => {
    const services = [
        {
            category: "Web Design & Development",
            items: [
                { name: "Custom Website Design", description: "Creating unique and tailored designs for your brand." },
                { name: "Responsive Web Development", description: "Websites that work seamlessly on all devices." },
                { name: "UI/UX Design", description: "Intuitive and user-friendly interfaces for enhanced user experience." },

            ]
        },
        {
            category: "E-Commerce Solutions",
            items: [
                { name: "Online Store Development", description: "Build and launch scalable e-commerce websites." },
                { name: "Payment Gateway Integration", description: "Secure and efficient payment processing systems." },
                { name: "Product Catalog Management", description: "Easy-to-update product listings and inventory systems." }
            ]
        },
        {
            category: "SEO & Digital Marketing",
            items: [
                { name: "Search Engine Optimization (SEO)", description: "Increase your website’s visibility and traffic." },
                { name: "Pay-Per-Click Advertising (PPC)", description: "Targeted ads to maximize ROI." },

                { name: "Email Marketing", description: "Personalized campaigns to nurture customer relationships." }
            ]
        },
        {
            category: "Branding & Identity",
            items: [
                { name: "Logo Design", description: "Memorable logos to represent your brand." },
                { name: "Brand Strategy", description: "Build a cohesive and recognizable brand identity." },
                { name: "Visual Content Creation", description: "High-quality graphics and videos." }
            ]
        },
        {
            category: "Maintenance & Support",
            items: [
                { name: "Website Maintenance", description: "Regular updates, security patches, and backups." },
                { name: "Performance Optimization", description: "Faster load times and better site performance." },
                { name: "Technical Support", description: "Ongoing help to resolve issues." }
            ]
        },
        {
            category: "Specialized Services",
            items: [

                { name: "API Integration", description: "Seamless connectivity with third-party services." },
                { name: "CMS Development", description: "Build websites with content management systems like WordPress or Shopify." },
                { name: "Migration Services", description: "Hassle-free migration from old websites or platforms." }
            ]
        }
    ];
    return (
        <div className=' mb-8'>
            <Swiper
                modules={[Navigation, Pagination, EffectCreative, A11y, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
            >
                {services.map((serviceCategory) => (
                    <SwiperSlide key={serviceCategory.category}>
                        <div className="flex justify-center cardService  p-4 rounded-lg h-5/6">
                            <div className='z-[1]'>
                                <h3 className='py-4'><strong>{serviceCategory.category}</strong></h3>
                                <ul>
                                    {serviceCategory.items.map((item) => (
                                        <li key={item.name}>
                                            <p className='py-2'>{item.name}</p>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    )
}

export default swiperServices
