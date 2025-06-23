import React from "react";
import { Code, Cog, Heart, Globe } from "lucide-react";

export default function WhatYouCanExpectSection() {
  const primaryColor = "#714B67";
  
 const features = [
  {
    icon: <Code size={36} color={primaryColor} />,
    title: "Deep Expertise",
    description: "Our team comprises many experienced specialists with the skills, certifications, and portfolio you'd expect from a leading consulting firm."
  },
  {
    icon: <Cog size={36} color={primaryColor} />,
    title: "Tailored Solutions",
    description: "We don't take a one-size-fits-all approach and instead provide custom solutions that fit your unique needs."
  },
  {
    icon: <Heart size={36} color={primaryColor} />,
    title: "Service-First Approach",
    description: "OSI works closely with you to develop durable solutions, predictable results, and support when you need it."
  },
  {
    icon: <Globe size={36} color={primaryColor} />,
    title: "Industry Knowledge",
    description: "Every industry comes with unique business challenges, that's why we built our team of experienced consultants in a variety of industry sectors."
  }
];


  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-3">
            <div className="h-1 w-12 mr-3" style={{ backgroundColor: primaryColor }}></div>
            <span className="font-medium uppercase tracking-wider text-sm" style={{ color: primaryColor }}>Working With Us</span>
            <div className="h-1 w-12 ml-3" style={{ backgroundColor: primaryColor }}></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">What You Can Expect</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our partnerships are built on transparency, expertise, and a commitment to your success. 
            Here's what sets us apart:
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 flex-grow text-justify">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Optional CTA */}
        <div className="mt-16 text-center">
          <button 
            className="px-6 py-3 rounded-md text-white font-medium shadow-sm transition-colors duration-200"
            style={{ backgroundColor: primaryColor }}>
             <a href="#">Schedule a Consultation</a>
          </button>
        </div>
      </div>
    </section>
  );
}