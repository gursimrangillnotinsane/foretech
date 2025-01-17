import HomeBackground from "@/components/homeBackground";
import HomeHero from "@/components/homeHero";
import Work from "@/components/work";
import Service from "@/components/service";
import Team from "@/components/team";
import ContactComponent from "@/components/contactComponent";


export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeBackground />
      {/* about */}
      {/* Work*/}
      <Work />
      {/* Service */}
      <Service />
      {/* Team */}
      <Team />
      {/* Contact */}
      <ContactComponent />
    </>
  );
}
