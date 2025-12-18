import React from 'react';
import { motion } from 'framer-motion';

const Categories = () => {
    const categories = [
        { icon: '♥', title: 'Parents', description: 'Show your appreciation', gradient: 'from-red-500/20 to-pink-500/20' },
        { icon: '♦', title: 'Partner', description: 'Express your love', gradient: 'from-pink-500/20 to-purple-500/20' },
        { icon: '★', title: 'Kids', description: 'Spark their imagination', gradient: 'from-blue-500/20 to-cyan-500/20' },
        { icon: '◆', title: 'Friends', description: 'Celebrate friendship', gradient: 'from-green-500/20 to-teal-500/20' },
        { icon: '✦', title: 'Secret Santa', description: 'Perfect surprises', gradient: 'from-gold-accent/20 to-yellow-500/20' },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.08,
                duration: 0.5,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <section className="relative py-24 px-4 overflow-hidden bg-transparent">
            {/* Minimal particle background */}
            <div className="absolute inset-0 opacity-5 z-5 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 rounded-full bg-white"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 2,
                            delay: Math.random() * 2,
                            repeat: Infinity,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-playfair text-4xl md:text-6xl font-bold text-center text-snow-white mb-4"
                >
                    Find the Perfect Gift
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="font-poppins text-lg text-center text-snow-white/70 mb-16"
                >
                    Browse by recipient and make their Christmas magical
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="group"
                        >
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className={`relative bg-gradient-to-br ${category.gradient} backdrop-blur-sm rounded-xl p-8 text-center cursor-pointer border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/10 overflow-hidden`}
                            >
                                {/* Background gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Icon */}
                                <div className="relative mb-4 flex items-center justify-center">
                                    <motion.div
                                        className="text-7xl font-light text-snow-white/90 group-hover:text-gold-accent transition-colors duration-300"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {category.icon}
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <h3 className="font-poppins text-xl font-semibold text-snow-white mb-2 group-hover:text-gold-accent transition-colors duration-300">
                                    {category.title}
                                </h3>
                                <p className="font-poppins text-sm text-snow-white/60 group-hover:text-snow-white/80 transition-colors duration-300">
                                    {category.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
