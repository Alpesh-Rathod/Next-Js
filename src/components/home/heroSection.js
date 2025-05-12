'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-screen after:absolute after:bg-[#fff] after:top-0 after:opacity-[0.5] after:w-full after:h-full flex items-center justify-center mt-[-80px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover absolute top-0"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12 relative z-[11] m-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto text-center flex flex-col justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 relative z-[11]"
        >
          <motion.h1 
            className="text-[#714B67] text-4xl/snug sm:text-5xl/tight md:text-6xl/tight lg:text-5xl/tight xl:text-8xl/tight font-bold"
          >
            Build Your Online Platform with best {' '}
            <motion.span 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: 0.3
              }}
              className="bg-[#714B67] text-[#fff] inline-block border rounded-full px-4 sm:px-6 md:px-7 lg:px-9 py-1 sm:py-2">
              Digital Agency
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 md:mt-10 text-[#714B67] text-base sm:text-lg md:text-xl lg:text-2xl text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, fugit! Laborum quo maxime
            at sapiente quasi
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link href="#" className="relative px-8 sm:px-12 py-4 sm:py-5 before:absolute before:inset-0 before:rounded-full before:bg-[#714B67] before:transition before:border-2 before:border-[#714B67] text-[#fff] font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl hover:before:scale-105 block text-center">
                <span className="relative">
                  Our Services
                </span>
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }} 
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link href="#" className="relative px-8 sm:px-12 py-4 sm:py-5 before:absolute before:inset-0 before:rounded-full before:transition before:border-2 before:border-[#714B67] text-[#714B67] font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl hover:before:scale-105 block text-center">
                <span className="relative">
                  Contact
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;