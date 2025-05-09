'use client';

import React, { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const portfolioItems = [
    { id: 1, category: 'industrial', title: 'Industrial Manufacturing', description: 'Supply chain optimization and production management solutions', img: '/small-factory.jpg' },
    { id: 2, category: 'retail', title: 'E-Commerce & Retail', description: 'Complete retail management and omnichannel solutions', img: '/grocery-1232944_640.jpg' },
    { id: 3, category: 'healthcare', title: 'Healthcare & Life Sciences', description: 'Patient management and healthcare logistics', img: '/healthcare-021504.jpg' },
    { id: 4, category: 'energy', title: 'Energy & Water Supply', description: 'Resource management and distribution solutions', img: '/Energy-water14620.jpg' },
    { id: 5, category: 'other', title: 'Other Industries', description: 'Custom solutions for specialized sectors', img: '/port-1845350_1280.jpg' },
  ];

  const categories = ['all', 'industrial', 'retail', 'healthcare', 'energy', 'other'];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.span 
          whileHover={{ scale: 1.05 }}
          className="px-4 py-1 rounded-full bg-purple-100 text-[#714B67] text-sm font-medium mb-4 inline-block"
        >
          Our Expertise
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-20 h-1 bg-[#714B67] mx-auto mb-6"
        />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive ODOO solutions tailored for diverse industries and business needs
        </p>
      </motion.div>

      {/* Filter Buttons - Desktop */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="hidden md:flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeCategory === category
                ? 'bg-[#714B67] text-white shadow-lg shadow-purple-200'
                : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Filter Dropdown - Mobile */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="md:hidden relative mb-8"
      >
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-200"
        >
          <div className="flex items-center">
            <Filter size={18} className="text-purple-600 mr-2" />
            <span className="font-medium">Filter: {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}</span>
          </div>
          <motion.div 
            animate={{ rotate: isFilterMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={18} className="rotate-90" />
          </motion.div>
        </motion.button>
        
        <AnimatePresence>
          {isFilterMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-10 mt-2 w-full rounded-lg bg-white shadow-lg border border-gray-100 py-2"
            >
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveCategory(category);
                    setIsFilterMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-purple-50 ${
                    activeCategory === category ? 'bg-purple-100 text-purple-700 font-medium' : 'text-gray-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Portfolio Items */}
      <motion.div 
        layout
        className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-52 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <motion.a 
                    href='#' 
                    className="px-4 py-2 bg-white rounded-full text-[#714B67] font-medium opacity-0 group-hover:opacity-100"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    View Details
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-3 py-1 rounded-full bg-purple-100 text-[#714B67] text-xs font-medium mb-3"
                >
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </motion.div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <motion.a 
                  href='#' 
                  className="flex items-center text-[#714B67] hover:text-[#8a4e7b] font-medium text-sm"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Learn more 
                  <ArrowRight size={16} className="ml-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-10"
          >
            <p className="text-gray-500">No items found in this category</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;