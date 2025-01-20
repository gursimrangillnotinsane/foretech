'use client'
import HomeBackground from "@/components/homeBackground";
import HomeHero from "@/components/homeHero";
import Work from "@/components/work";
import Service from "@/components/service";
import Team from "@/components/team";
import ContactComponent from "@/components/contactComponent";
import AboutComponent from "@/components/aboutComponent";

import { ReactLenis, useLenis } from 'lenis/react'


export default function Home() {
  return (
    <ReactLenis root options={{ smoothWheel: true, duration: 1.5, easing: (t) => t * (2 - t) }}>
      { /* content */}
      <HomeHero />
      <HomeBackground />

      {/* about */}
      <AboutComponent />

      {/* Service */}
      <Service />

      {/* Work*/}
      <Work />

      {/* Team */}
      <Team />

      {/* Contact */}
      <ContactComponent />

    </ReactLenis>

  );
}
