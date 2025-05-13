
import React from 'react';
import AboutHeader from '@/components/about/aboutHeader';
import AboutUs from "@/components/about/aboutSection";
import OurPurpose from "@/components/about/ourPurpose"
import Whychoose from '@/components/about/whyChoose';
import TeamSection from '@/components/about/TeamSection';
import ContactSection from "@/components/home/contactSection"

export default function AboutPage() {
  return (
    <>
     <AboutHeader />
     <OurPurpose />
     <AboutUs />
     <Whychoose />
     <TeamSection />
     <ContactSection />
    </>
  );
}
