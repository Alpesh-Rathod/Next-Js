'use client';
 
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
 
const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true, // Only trigger animations once
    amount: 0.3, // Trigger when 30% of the element is in view
    margin: "0px 0px -100px 0px" // Small margin to trigger slightly before fully in view
  });
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Stagger the animations of children
      }
    }
  };
 
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
 
  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };
 
  return (
    <div
      ref={sectionRef}
      className="w-full bg-[#714B67] py-20 flex flex-col items-center justify-center px-4"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Handshake Icon with animation */}
        <motion.div
          className="mb-6"
          variants={iconVariants}
        >
         <div className="w-16 h-16 mx-auto bg-transparent flex items-center justify-center">
  <Image
    src="/icon-handshake.svg"
    alt="Handshake"
    width={64}
    height={64}
  />
</div>
        </motion.div>
       
        {/* Heading with animation */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          variants={itemVariants}
        >
          Let's Talk About Your Next Project
        </motion.h2>
       
        {/* Description with animation */}
        <motion.p
          className="text-white mb-8 text-lg"
          variants={itemVariants}
        >
          Chat with one of our technology experts and learn how we can help drive resource efficiency, maximize value of return on investment, and drive success in any IT and business process transformation.
        </motion.p>
       
        {/* Button with animation */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="border-2 text-white hover:text-[#714B67] border-white py-3 px-8 rounded-full hover:bg-purple-100 transition duration-300">
            <a href='#' className="font-medium text-lg">Talk to a human</a>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
 
export default ContactSection;