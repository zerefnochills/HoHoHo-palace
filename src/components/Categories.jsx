import React from 'react';
import { motion } from 'framer-motion';

const Categories = () => {
    const categories = [
        { icon: '🎁', title: 'Parents', description: 'Show your appreciation' },
        { icon: '💖', title: 'Partner', description: 'Express your love' },
        { icon: '🧸', title: 'Kids', description: 'Spark their imagination' },
        { icon: '👯', title: 'Friends', description: 'Celebrate friendship' },
        { icon: '🎅', title: 'Secret Santa', description: 'Perfect surprises' },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: 'easeOut',
            },
        }),
    };

    // Floating ornaments
    const ornaments = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        emoji: ['🔴', '🟡', '🟢', '🔵', '🟣', '⚪'][i],
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
    }));

    return (
        <section className="relative py-24 px-4 overflow-hidden bg-transparent">
            {/* Enhanced Starry Background */}
            <div className="absolute inset-0 opacity-30 z-5">
                {[...Array(80)].map((_, i) => (
                    <motion.div
                        key={`star-${i}`}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [0.8, 1.3, 0.8],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            delay: Math.random() * 2,
                            repeat: Infinity,
                        }}
                    />
                ))}
            </div>

            {/* Background Snow Effect */}
            <div className="absolute inset-0 opacity-10 z-10">
                <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full snowflake" style={{ animationDuration: '15s' }} />
                <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full snowflake" style={{ animationDuration: '12s', animationDelay: '2s' }} />
                <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full snowflake" style={{ animationDuration: '18s', animationDelay: '1s' }} />
            </div>

            {/* Floating Ornaments */}
            <div className="absolute inset-0 pointer-events-none z-15">
                {ornaments.map((ornament) => (
                    <motion.div
                        key={ornament.id}
                        className="absolute text-4xl"
                        style={{
                            left: ornament.left,
                            top: ornament.top,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 4,
                            delay: ornament.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        {ornament.emoji}
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-playfair text-4xl md:text-6xl font-bold text-center text-snow-white mb-4"
                >
                    Find the Perfect Gift
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-poppins text-lg text-center text-snow-white/80 mb-16"
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
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                rotate: [0, -2, 2, -2, 0],
                                transition: { duration: 0.5 }
                            }}
                            className="frosted-glass rounded-2xl p-8 text-center cursor-pointer glow-animation hover:border-gold-accent transition-all duration-300"
                        >
                            <motion.div
                                className="text-6xl mb-4"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 10, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                {category.icon}
                            </motion.div>
                            <h3 className="font-playfair text-2xl font-semibold text-snow-white mb-2">
                                {category.title}
                            </h3>
                            <p className="font-poppins text-sm text-snow-white/70">
                                {category.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
