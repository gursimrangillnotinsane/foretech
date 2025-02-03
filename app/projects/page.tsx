// 'use client'
// import Footer from '@/components/footer'
// import Header from '@/components/header'
// import { ReactLenis, useLenis } from 'lenis/react'
// import React from 'react'

// const page = () => {
//     const data = [
//         { title: 'Arjan Gill Sounds', url: 'https://www.arjangillsounds.com' },
//         { title: 'work02', url: 'https://www.google.com' },
//         { title: 'work03', url: 'https://www.google.com' },
//         { title: 'work04', url: 'https://www.google.com' },
//         { title: 'work04', url: 'https://www.google.com' },
//         { title: 'work04', url: 'https://www.google.com' },
//         { title: 'work04', url: 'https://www.google.com' },
//         { title: 'work04', url: 'https://www.google.com' },
//         { title: 'work04', url: 'https://www.google.com' },
//     ];
//     return (
//         <>
//             <ReactLenis root options={{ smoothWheel: true, duration: 2, easing: (t) => t * (2 - t) }}>
//                 <section className='z-0 py-0 m-0'>

//                     <div className=' flex flex-col justify-between items-center h-screen '>
//                         <Header />
//                         <div className=" sticky top-0 heading-container mb-8 overflow-hidden flex flex-col justify-center items-center h-screen z-0">
//                             <h2 className="workHeading">Projects</h2><br />
//                             <p>That we have done</p>
//                         </div>
//                     </div>
//                     <div className="pt-10 grid grid-cols-1 lg:grid-cols-3 gap-2 ">
//                         {data.map((item, index) => (
//                             <div key={index} className={`work flex flex-col justify-center items-center h-[50vh] `} >
//                                 {/* <h3>{item.title}</h3> */}
//                                 <div className="  w-full  h-full relative">
//                                     <iframe src={item.url} title={item.title} scrolling="no" ></iframe>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </section>
//                 <Footer />
//             </ReactLenis>
//         </>
//     )
// }

// export default page
"use client";
import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/slides";
import SlideInfo from "@/components/slideInfo";
import Controls from "@/components/controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          <Header />
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "image.jpg",
    description:
      "https://www.arjangillsounds.com",
    title: "Arjan Gill Sounds",
  },
  {
    img: "jass.png",
    title: "The Grand Canyon",
    description:
      "The earth's geological history opens before your eyes in a mile-deep chasm",
  },
  {
    img: "service.jpg",
    title: "Masai Mara",
    description:
      "Wild animals in their natural environment, luxury safari lodges",
  },
  {
    img: "sevicee.avif",
    title: "Angkor Wat",
    description:
      "A stunning ancient jungle city with hundreds of intricately constructed temples",
  },
  {
    img: "varinder.png",
    title: "Bali",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
  },
];

const initData = sliderData[0];