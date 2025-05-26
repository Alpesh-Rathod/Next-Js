"use client";

import { useState } from 'react';
import { Monitor, ShoppingCart, Users, FileText, BarChart, Settings, Zap, Database } from 'lucide-react';

// Custom ODOO colors
const odooPrimary = "#714B67";
const odooSubColor = "#f3e8ff";

// ODOO Services data
const services = [
  {
    id: 1,
    title: "CRM & Sales",
    icon: <Users size={28} />,
    description: "Boost your sales with our powerful CRM tools. Track leads, manage opportunities, and close deals faster.",
    features: ["Lead Management", "Sales Pipeline", "Opportunity Tracking", "Customer Communication"]
  },
  {
    id: 2,
    title: "E-Commerce",
    icon: <ShoppingCart size={28} />,
    description: "Create a stunning online store integrated with your ODOO backend systems for seamless operations.",
    features: ["Product Catalog", "Payment Gateway", "Inventory Integration", "Mobile-Responsive Design"]
  },
  {
    id: 3,
    title: "Accounting",
    icon: <FileText size={28} />,
    description: "Simplify your financial management with comprehensive accounting tools and automated processes.",
    features: ["Invoicing", "Expense Tracking", "Financial Reports", "Tax Management"]
  },
  {
    id: 4,
    title: "Inventory",
    icon: <Database size={28} />,
    description: "Optimize your inventory management with real-time tracking and automated replenishment.",
    features: ["Stock Tracking", "Warehouse Management", "Barcode Scanning", "Reordering Rules"]
  },
  {
    id: 5,
    title: "Manufacturing",
    icon: <Settings size={28} />,
    description: "Streamline your production processes with our integrated manufacturing solutions.",
    features: ["Bill of Materials", "Work Orders", "Quality Control", "Resource Planning"]
  },
  {
    id: 6,
    title: "Business Intelligence",
    icon: <BarChart size={28} />,
    description: "Make data-driven decisions with powerful analytics and customizable dashboards.",
    features: ["Custom Reports", "Interactive Dashboards", "Data Visualization", "KPI Tracking"]
  },
  {
    id: 7,
    title: "Website Builder",
    icon: <Monitor size={28} />,
    description: "Create professional websites with our drag-and-drop builder, fully integrated with your ODOO system.",
    features: ["Drag & Drop Editor", "SEO Tools", "Blog Management", "Form Builder"]
  },
  {
    id: 8,
    title: "Project Management",
    icon: <Zap size={28} />,
    description: "Plan, track, and manage your projects efficiently with collaborative tools and real-time updates.",
    features: ["Task Management", "Team Collaboration", "Time Tracking", "Gantt Charts"]
  }
];

export default function OdooServices() {
  const [activeService, setActiveService] = useState(null);
  
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ODOO Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions powered by ODOO's integrated platform. 
            Streamline your operations with our customizable modules.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                activeService === service.id ? 'ring-2' : ''
              }`}
              style={{ borderColor: activeService === service.id ? odooPrimary : 'transparent' }}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}>
              <div className="flex items-center mb-4">
                <div className="rounded-full p-3" style={{ backgroundColor: odooSubColor, color: odooPrimary }}>
                  {service.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              {/* Expandable features section */}
              <div className={`overflow-hidden transition-all duration-300 ${
                activeService === service.id ? 'max-h-64' : 'max-h-0'
              }`}>
                <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  {service.features.map((feature, index) => (
                    <li key={index} className="mb-1">{feature}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <button 
                    className="text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    style={{ backgroundColor: odooPrimary, ':hover': { backgroundColor: '#5a3c52' } }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
              
              {activeService !== service.id && (
                <div className="mt-4 font-medium text-sm flex items-center" style={{ color: odooPrimary }}>
                  <span>View features</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              )}
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
                  style={{ color: odooPrimary }}
                >
                  Request Demo
                </button>
                <button 
                  className="text-white px-6 py-3 rounded-md font-medium transition-colors" 
                  style={{ backgroundColor: '#5a3c52' }}
                >
                  Contact Sales
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
    </div>
  );
}