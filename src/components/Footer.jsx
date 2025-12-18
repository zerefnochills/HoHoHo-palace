import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer = () => {
    const { scrollY } = useScroll();
    const sleighX = useTransform(scrollY, [0, 5000], [-200, 1400]);

    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for subscribing! We'll send updates to ${email}`);
        setEmail('');
    };

    return (
        <footer className="relative py-16 px-4 bg-transparent overflow-hidden">
            {/* Stars Background */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                        }}
                        animate={{
                            opacity: [0.2, 1, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* Animated Santa Sleigh */}
            <motion.div
                style={{ x: sleighX }}
                className="absolute top-20 text-6xl z-30"
            >
                🛷🎅
            </motion.div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="font-playfair text-3xl font-bold text-gold-accent mb-4">
                            🎄 HoHoHo Palace
                        </h3>
                        <p className="font-poppins text-snow-white/70 text-sm leading-relaxed">
                            Making every Christmas unforgettable with thoughtful, premium gifts for everyone you love.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-poppins font-semibold text-snow-white mb-4 text-lg">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {['Shop All', 'Categories', 'Personalize', 'About Us', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="font-poppins text-snow-white/70 hover:text-gold-accent transition-colors duration-300 text-sm"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="font-poppins font-semibold text-snow-white mb-4 text-lg">
                            Customer Service
                        </h4>
                        <ul className="space-y-2">
                            {['Shipping Info', 'Returns', 'FAQ', 'Track Order', 'Gift Cards'].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="font-poppins text-snow-white/70 hover:text-gold-accent transition-colors duration-300 text-sm"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-poppins font-semibold text-snow-white mb-4 text-lg">
                            Stay Updated
                        </h4>
                        <p className="font-poppins text-snow-white/70 text-sm mb-4">
                            Get exclusive offers and gift ideas!
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email..."
                                required
                                className="w-full px-4 py-2 bg-midnight-blue/50 border border-snow-white/30 rounded-lg text-snow-white placeholder-snow-white/50 focus:outline-none focus:border-gold-accent transition-all duration-300 text-sm"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full py-2 bg-christmas-red hover:bg-christmas-red/90 text-snow-white font-poppins font-semibold rounded-lg transition-all duration-300 text-sm"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="border-t border-snow-white/20 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex gap-6">
                            {['📘', '📷', '🐦', '📌'].map((icon, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-12 h-12 rounded-full bg-snow-white/10 backdrop-blur-md border border-snow-white/20 hover:border-gold-accent flex items-center justify-center text-2xl transition-all duration-300"
                                >
                                    {icon}
                                </motion.a>
                            ))}
                        </div>

                        <p className="font-poppins text-snow-white/60 text-sm text-center">
                            © {new Date().getFullYear()} HoHoHo Palace. Made with ❤️ for the holidays.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
