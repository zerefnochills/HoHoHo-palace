import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Personalize = () => {
    const { scrollY } = useScroll();
    const lidRotation = useTransform(scrollY, [2000, 2500], [0, -15]);
    const giftY = useTransform(scrollY, [2000, 2500], [0, -20]);

    const [formData, setFormData] = useState({
        recipientName: '',
        giftWrap: 'classic-red',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const wrapOptions = [
        { value: 'classic-red', label: 'Classic Red', color: '#C1121F' },
        { value: 'gold-elegance', label: 'Gold Elegance', color: '#FFD166' },
        { value: 'winter-blue', label: 'Winter Blue', color: '#4A90E2' },
        { value: 'forest-green', label: 'Forest Green', color: '#1B4332' },
    ];

    return (
        <section className="relative py-24 px-4 bg-transparent overflow-hidden">
            {/* Snow Overlay */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={i}
                        className="snowflake absolute rounded-full bg-white"
                        style={{
                            left: `${Math.random() * 100}%`,
                            width: '3px',
                            height: '3px',
                            animationDuration: `${Math.random() * 10 + 10}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-playfair text-4xl md:text-6xl font-bold text-center text-snow-white mb-4"
                >
                    Personalize Your Gift
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-poppins text-lg text-center text-snow-white/80 mb-16"
                >
                    Add a special touch to make it truly memorable
                </motion.p>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="frosted-glass rounded-2xl p-8 space-y-6"
                    >
                        {/* Recipient Name */}
                        <div>
                            <label className="block font-poppins text-snow-white mb-2 font-medium">
                                Recipient Name
                            </label>
                            <input
                                type="text"
                                name="recipientName"
                                value={formData.recipientName}
                                onChange={handleChange}
                                placeholder="Enter name..."
                                className="w-full px-4 py-3 bg-midnight-blue/50 border border-snow-white/30 rounded-lg text-snow-white placeholder-snow-white/50 focus:outline-none focus:border-gold-accent transition-all duration-300"
                            />
                        </div>

                        {/* Gift Wrap Selector */}
                        <div>
                            <label className="block font-poppins text-snow-white mb-2 font-medium">
                                Gift Wrap Style
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {wrapOptions.map((option) => (
                                    <label
                                        key={option.value}
                                        className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 ${formData.giftWrap === option.value
                                            ? 'border-gold-accent bg-gold-accent/20'
                                            : 'border-snow-white/30 bg-midnight-blue/30 hover:border-snow-white/50'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="giftWrap"
                                            value={option.value}
                                            checked={formData.giftWrap === option.value}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-8 h-8 rounded-full border-2 border-snow-white"
                                                style={{ backgroundColor: option.color }}
                                            />
                                            <span className="font-poppins text-snow-white text-sm">
                                                {option.label}
                                            </span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block font-poppins text-snow-white mb-2 font-medium">
                                Personal Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your heartfelt message..."
                                rows="4"
                                className="w-full px-4 py-3 bg-midnight-blue/50 border border-snow-white/30 rounded-lg text-snow-white placeholder-snow-white/50 focus:outline-none focus:border-gold-accent transition-all duration-300 resize-none"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-christmas-red hover:bg-christmas-red/90 text-snow-white font-poppins font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-christmas-red/50"
                        >
                            Save Personalization
                        </motion.button>
                    </motion.div>

                    {/* Animated Gift Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex items-center justify-center"
                    >
                        <motion.div style={{ y: giftY }} className="relative">
                            {/* Gift Box Base */}
                            <div className="w-64 h-64 bg-gradient-to-br from-christmas-red to-christmas-red/80 rounded-lg shadow-2xl relative">
                                {/* Vertical Ribbon */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-full bg-gold-accent wiggle-animation"
                                />
                                {/* Horizontal Ribbon */}
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-12 bg-gold-accent wiggle-animation"
                                />
                                {/* Bow */}
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gold-accent rounded-full shadow-lg flex items-center justify-center text-3xl"
                                >
                                    🎀
                                </motion.div>
                            </div>

                            {/* Gift Box Lid (opens on scroll) */}
                            <motion.div
                                style={{ rotateX: lidRotation }}
                                className="absolute -top-8 left-0 w-64 h-16 bg-gradient-to-br from-christmas-red to-christmas-red/90 rounded-t-lg shadow-xl origin-bottom"
                            >
                                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-6 bg-gold-accent" />
                            </motion.div>

                            {/* Sparkles */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-12 left-1/2 -translate-x-1/2 text-4xl"
                            >
                                ✨
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Personalize;
