'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const Aboutus = () => {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHover = {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(113, 75, 103, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 bg-[#F8F5F7]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col md:flex-row gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex md:flex-1"
        >
          <Image
            src="/working-on-housing-project.jpg"
            alt="working on housing"
            width={1300}
            height={900}
            className="w-full md:h-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-1/2 lg:w-[54%] space-y-12 text-[#5A5A5A]"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-[#714B67] font-semibold text-2xl sm:text-3xl md:text-4xl"
          >
            We help drive your business forward faster
          </motion.h1>

          <motion.p variants={itemVariants}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe
            aliquid autem alias vero distinctio dignissimos consequatur? Excepturi
            quibusdam, quam ipsum hic, laudantium ducimus suscipit, culpa facere
            consequuntur repellat delectus.
          </motion.p>

          <motion.div 
            variants={containerVariants}
            className="grid sm:grid-cols-2 gap-6"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={cardHover}
              className="space-y-6 p-6 rounded-xl bg-white border border-[#F5E9E2] shadow-sm transition-all"
            >
              <span className="rounded-full bg-[#714B67] text-gray-100 w-max p-3 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                </svg>
              </span>
              <h2 className="font-semibold text-xl text-[#2D2D2D]">Our mission</h2>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={cardHover}
              className="space-y-6 p-6 rounded-xl bg-white border border-[#F5E9E2] shadow-sm transition-all"
            >
              <span className="rounded-full bg-[#714B67] text-gray-100 w-max p-3 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <h2 className="font-semibold text-xl text-[#2D2D2D]">Our vision</h2>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Aboutus;