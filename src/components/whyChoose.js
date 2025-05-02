'use client';

import { motion } from 'framer-motion';

const Whychoose = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

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

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white">
            <div className="max-w-6xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#714B67] to-[#8A6883]"
                    >
                        Why Partner with Codeshere for Odoo?
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-700 max-w-3xl mx-auto"
                    >
                        Our team develops customized Web/Software projects listening to 
                        the needs of customers, guaranteeing the best performance.
                    </motion.p>
                </motion.div>
                
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="hidden md:block absolute left-0 right-0 h-1 bg-[#714B67] top-24 transform -translate-y-1/2 z-0"></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                ),
                                title: "Industry Expertise",
                                description: "Proven experience delivering Odoo solutions across diverse sectors."
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                                    </svg>
                                ),
                                title: "End-to-End Services",
                                description: "From implementation to ongoing support, we've got you covered."
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                    </svg>
                                ),
                                title: "Customized Solutions",
                                description: "Tailored ERP solutions that align with your goals."
                            },
                            {
                                icon: (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                ),
                                title: "Certified Professionals",
                                description: "A team of Odoo experts ensuring quality delivery."
                            }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                                className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#714B67]"></div>
                                <div className="p-6 pb-8 text-center">
                                    <motion.div 
                                        whileHover={{ scale: 1.1 }}
                                        className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#714B67] text-white mb-4 transition-transform duration-300"
                                    >
                                        {item.icon}
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                 
                        <motion.button
                            whileHover={{ scale: 1.05, }}
                            whileTap={{ scale: 0.98 }}
                            >
                          <a href="#" className="inline-block px-6 py-3 bg-[#714B67] hover:bg-[#5D3E54] text-white font-medium text-lg rounded-full transition-all duration-300">Start Your Odoo Journey Today</a>  
                        </motion.button>
                  
                </motion.div>
            </div>
        </section>
    );
};

export default Whychoose;