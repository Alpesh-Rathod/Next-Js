import HeroSection from "@/components/heroSection";
import Aboutus from "@/components/aboutUs";
import OdooServices from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import Whychoose from "@/components/whyChoose"
import Testimonials from "@/components/Testimonial"
import ContactSection from "@/components/contactSection"




export default function Home() {
  return (
    <>
    <HeroSection />
    <Aboutus />
    <OdooServices />
    <Portfolio />
    <Whychoose />
    <Testimonials />
    <ContactSection />

    </>
  );
}
