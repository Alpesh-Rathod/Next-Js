import React from 'react';
import { Download, Settings, MessageCircle, Clock } from 'lucide-react';

// Custom ODOO colors
const odooPrimary = "#714B67";
const odooSubColor = "#f3e8ff";

const OdooProject = () => {
  const features = [
    {
      icon: <Download className="w-8 h-8" style={{color: '#714B67'}} />,
      title: "Immediate Implementation",
      description: "Start your project right away with the standard Odoo configuration, eliminating the need for a prior analysis phase."
    },
    {
      icon: <Settings className="w-8 h-8" style={{color: '#714B67'}} />,
      title: "Scalable Hosting Options",
      description: "Perfect for setups hosted on Odoo Cloud, on-premise, or other compatible platforms, it is based on Odoo Custom to ensure flexibility for your business needs."
    },
    {
      icon: <MessageCircle className="w-8 h-8" style={{color: '#714B67'}} />,
      title: "Flexible & Iterative Approach",
      description: "We begin the implementation in close collaboration with the client to enable adjustments and further developments as needed."
    },
    {
      icon: <Clock className="w-8 h-8" style={{color: '#714B67'}} />,
      title: "Time-Based Model",
      description: "The project is structured around hourly packages, offering transparency and scalability, with additional pricing details available through internal consultation."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 ">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          When is the Odoo Direct Project Start<br />
          the Best Choice?
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            The Odoo Project Start is the ideal choice for businesses that want to bypass the analysis 
            phase and begin directly with the implementation. With this approach, the Odoo 
            standard is delivered and configured immediately, allowing your project to get underway 
            without delay. This method is straightforward, efficient, and focuses on quick 
            deployment while leaving room for iterative improvements during the process.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 p-4 rounded-full" style={{backgroundColor: '#714B6715'}}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

       <div className="mt-16 rounded-lg shadow-xl overflow-hidden" style={{ backgroundColor: odooPrimary }}>
          <div className="md:flex">
            <div className="p-8 md:w-2/3">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to transform your business?</h2>
              <p className="mb-6" style={{ color: odooSubColor }}>
                Our team of ODOO experts can help you implement the perfect solution for your business needs.
                Get in touch for a personalized consultation.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  className="bg-white px-6 py-3 rounded-md font-medium transition-colors" 
                  style={{ color: odooPrimary }}>
                  <a href='#'>Request Demo</a> 
                </button>
                <button 
                  className="text-white px-6 py-3 rounded-md font-medium transition-colors" 
                  style={{ backgroundColor: '#5a3c52' }}>
                 <a href='#'>Contact Sales</a> 
                </button>
              </div>
            </div>
            <div className="p-8 md:w-1/3 flex items-center justify-center" style={{ backgroundColor: '#5a3c52' }}>
              <div className="text-center">
                <p className="text-xl font-bold text-white mb-2">24/7 Support</p>
                <p style={{ color: odooSubColor }}>Our expert team is always available to help you</p>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default OdooProject;