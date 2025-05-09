
import HeroSection from "@/components/home/heroSection";
import Aboutus from "@/components/home/aboutUs";
import OdooServices from "@/components/home/Services"
import Portfolio from "@/components/home/Portfolio"
import Whychoose from "@/components/home/whyChoose"
import Testimonials from "@/components/home/Testimonial"
import ContactSection from "@/components/home/contactSection"

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
