'use client';

import React from 'react';
import { motion } from 'framer-motion';

const OdooServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    scale: 1.03,
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  const services = [
    {
      title: "ODOO Implementation",
      description: "Streamline your business processes with our expert ODOO implementation services tailored to your specific needs.",
      icon: "🚀",
      accent: "#8C6A7D" // Teal
    },
    {
      title: "ODOO Customization",
      description: "Get a perfectly fitted solution with our ODOO customization services that adapt to your unique workflows.",
      icon: "🛠️",
      accent: "#8C6A7D" // Dusty Rose
    },
    {
      title: "ODOO Integration",
      description: "Connect ODOO with your existing systems seamlessly for unified data flow and improved efficiency.",
      icon: "🔗",
      accent: "#8C6A7D" // Muted Plum
    },
    {
      title: "Support & Training",
      description: "Comprehensive support and training programs to ensure your team gets the most out of ODOO.",
      icon: "🎓",
      accent: "#8C6A7D" // Soft Lilac
    }
  ];

  return (
    <section className="py-20 bg-[#F8F5F7] relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#B28DA5] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-[#5A7D7A] rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 left-1/2 w-32 h-32 bg-[#D4A59E] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-4 px-6 py-2 bg-purple-100 rounded-full text-sm font-medium text-[#714B67] shadow-sm"
          >
            Enterprise Solutions
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
            Our <span className="text-[#714B67]">ODOO Services</span>
          </h2>
          <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
            Empower your business with seamless ODOO ERP integration and customization.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={cardHover}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-[#F5E9E2]"
            >
              <div 
                className="p-6 flex flex-col items-center"
                style={{ backgroundColor: service.accent }}
              > 
                <span className="text-4xl mb-3">{service.icon}</span>
                <h3 className="text-xl font-semibold text-white text-center">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-[#5A5A5A] text-base mb-4">
                  {service.description}
                </p>
               
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 25px -5px rgba(113, 75, 103, 0.3)"
            }}
            whileTap={{ scale: 0.95 }} >
           <a href="#" className="px-8 py-4 bg-[#714B67] text-white font-medium rounded-full shadow-lg transition-all duration-300 hover:bg-[#8C6A7D]">Get a Free Consultation</a> 
          </motion.button>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default OdooServices;