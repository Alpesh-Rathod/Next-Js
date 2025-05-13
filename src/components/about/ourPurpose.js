import React from "react";
import { ChevronRight } from "lucide-react";

export default function OurPurpose() {
  const primaryColor = "#714B67";
  
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="h-1 w-12 mr-4" style={{ backgroundColor: primaryColor }}></div>
                <span className="font-medium uppercase tracking-wider text-sm" style={{ color: primaryColor }}>About Us</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Our Purpose</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Codesphere is a highly effective technology partner that helps customers 
              transform their business operations. Our team ensures the job is done right the first time, 
              <span className="font-medium" style={{ color: primaryColor }}> minimizing risks and inefficiencies</span>. 
              We focus on creating <span className="font-medium" style={{ color: primaryColor }}>durable long-term solutions</span>, 
              collaborating closely with you to build systems that support your employees 
              and simplify data-driven decision-making for your leadership team.</p>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Expertise</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: primaryColor }} />
                  <span className="text-gray-700">Migration from legacy systems to modern platforms</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: primaryColor }} />
                  <span className="text-gray-700">Full custom implementations</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: primaryColor }} />
                  <span className="text-gray-700">Data integration and analytics solutions</span>
                </li>
              </ul>
            </div>
              <div className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200" 
                style={{ 
                  backgroundColor: primaryColor,
                  ":hover": { backgroundColor: "#5d3e54" }
                }}
              >
               <a href="#">Learn More About Our Approach</a> 
                <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
              </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: primaryColor }}></div>
              <img 
                src="/Engineering-Unsplash.jpg" 
                alt="Data visualization on laptop screen" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                <div className="flex justify-between text-white">
                  <div className="text-center">
                    <p className="text-2xl font-bold">12+</p>
                    <p className="text-sm">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-sm">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">98%</p>
                    <p className="text-sm">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

