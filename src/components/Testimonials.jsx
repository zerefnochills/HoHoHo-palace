import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            avatar: '👩',
            rating: 5,
            text: 'The personalized gift wrapping made my present extra special. My mom absolutely loved it!',
        },
        {
            id: 2,
            name: 'Michael Chen',
            avatar: '👨',
            rating: 5,
            text: 'Fast delivery and beautiful packaging. The quality exceeded my expectations!',
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            avatar: '👩‍🦰',
            rating: 5,
            text: 'Found the perfect gifts for everyone on my list. The categories made shopping so easy!',
        },
        {
            id: 4,
            name: 'David Thompson',
            avatar: '👨‍🦱',
            rating: 5,
            text: 'Outstanding customer service and premium quality products. Will definitely shop here again!',
        },
    ];

    return (
        <section className="relative py-24 px-4 overflow-hidden bg-transparent">
            {/* Foreground Snow Layer */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-30">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="snowflake absolute rounded-full bg-white"
                        style={{
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 5 + 3}px`,
                            height: `${Math.random() * 5 + 3}px`,
                            animationDuration: `${Math.random() * 8 + 8}s`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-playfair text-4xl md:text-6xl font-bold text-center text-snow-white mb-4"
                >
                    What Our Customers Say
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-poppins text-lg text-center text-snow-white/80 mb-16"
                >
                    Join thousands of happy gift-givers
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="frosted-glass rounded-2xl p-6 border border-snow-white/20 hover:border-gold-accent transition-all duration-300"
                        >
                            {/* Avatar */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-christmas-red to-gold-accent flex items-center justify-center text-3xl border-2 border-snow-white">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h3 className="font-poppins font-semibold text-snow-white">
                                        {testimonial.name}
                                    </h3>
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="text-gold-accent text-sm">⭐</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="relative">
                                <span className="absolute -top-2 -left-2 text-4xl text-gold-accent/30 font-playfair">
                                    "
                                </span>
                                <p className="font-poppins text-snow-white/90 text-sm leading-relaxed pl-4">
                                    {testimonial.text}
                                </p>
                                <span className="absolute -bottom-4 -right-2 text-4xl text-gold-accent/30 font-playfair">
                                    "
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
