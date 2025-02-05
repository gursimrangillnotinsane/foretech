'use client'
import HomeBackground from "@/components/homeBackground";
import HomeHero from "@/components/homeHero";
import Work from "@/components/work";
import Service from "@/components/service";
import Team from "@/components/team";
import ContactComponent from "@/components/contactComponent";
import AboutComponent from "@/components/aboutComponent";

import { ReactLenis, useLenis } from 'lenis/react'
import Header from "@/components/header";
import Footer from "@/components/footer";
import Technologies from "@/components/technologies";


export default function Home() {
  return (
    <ReactLenis root options={{ smoothWheel: true, duration: 1.5, easing: (t) => t * (2 - t) }}>
      <Header />
      { /* content */}
      <HomeHero />
      <HomeBackground />

      {/* about */}
      <AboutComponent />

      {/* Service */}
      <Service />

      {/* Technologies */}
      <Technologies />
      {/* Work*/}
      <Work />

      {/* Team */}
      <Team />

      {/* Contact */}
      <ContactComponent />
      <Footer />
    </ReactLenis>

  );
}
