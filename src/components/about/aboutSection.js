
import React from 'react';
import { Award, Globe, Users, BarChart } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="w-full bg-gradient-to-br from-purple-50 to-white py-16">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 bg-black text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">
            Who We Are
            <div className="h-1 w-16 bg-[#714B67] mt-2"></div>
          </h2>
          <p className="mb-6 text-gray-200">
            Codesphere is a world-class software solutions
            company delivering cutting-edge business automation
            and digital transformation services to a diverse range of
            industries. Our focus on client success ensures that we
            provide ingenious solutions across global markets,
            leveraging our expertise to solve complex business
            challenges.
          </p>
          <p className="mb-6 text-gray-200">
            We specialize in implementing a wide array of business
            applications, including Human Capital Management, BI
            with Big Data and Data Analytics, e-Commerce, and
            custom IT software solutions, creating specially tailored
            platforms designed to optimize performance and drive
            results for our clients.
          </p>
          <p className="text-gray-200">
            Partnering with Codesphere means receiving top-tier
            support and innovative solutions to meet the evolving
            needs of modern enterprises.
          </p>
        </div>
        
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-start">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-[#714B67]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Certified Team</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>300+ Employees</li>
                <li>Functional consultants</li>
                <li>Technical consultants</li>
                <li>Industry-expert project managers</li>
                <li>Highly experienced developers</li>
                <li>Dedicated support team</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-start">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <BarChart className="h-8 w-8 text-[#714B67]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Industrial Expertise</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>350+ successful ERP implementations</li>
                <li>Industry-specific departments</li>
                <li>Compliance & regulation experts</li>
                <li>Multiple Best ERP Partner awards</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-start">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Globe className="h-8 w-8 text-[#714B67]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Presence</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>HQ in Texas, USA</li>
                <li>Offices across USA & UK</li>
                <li>Offices across Canada</li>
                <li>Offices Off-shore</li>
                <li>Global client base</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow flex flex-col items-start">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-[#714B67]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Awards & Accomplishments</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Odoo Best Partner 2024</li>
                <li>Odoo Best Partner 2023</li>
                <li>Odoo Best Partner 2022</li>
                <li>Odoo Best Partner 2021</li>
                <li>Odoo Best Partner 2018</li>
                <li>Odoo Best Partner 2016</li>
                <li>Odoo Best Partner 2015</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
