import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['hero', 'categories', 'products', 'personalize', 'countdown', 'testimonials'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const navItems = [
        { id: 'hero', label: 'Home', icon: '🏠' },
        { id: 'categories', label: 'Categories', icon: '🎁' },
        { id: 'products', label: 'Products', icon: '🛍️' },
        { id: 'personalize', label: 'Personalize', icon: '✨' },
        { id: 'countdown', label: 'Countdown', icon: '⏰' },
        { id: 'testimonials', label: 'Reviews', icon: '⭐' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-midnight-blue/95 backdrop-blur-lg shadow-2xl'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => scrollToSection('hero')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-3xl">🎄</span>
                        <span className="font-playfair text-2xl font-bold text-gold-accent">
                            Christmas Gifts
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-4 py-2 rounded-full font-poppins text-sm transition-all duration-300 ${activeSection === item.id
                                        ? 'bg-gold-accent text-midnight-blue font-semibold'
                                        : 'text-snow-white hover:bg-snow-white/10'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="mr-1">{item.icon}</span>
                                {item.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden text-snow-white text-2xl"
                        whileTap={{ scale: 0.9 }}
                    >
                        ☰
                    </motion.button>
                </div>
            </div>

            {/* Active Section Indicator */}
            <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gold-accent"
                layoutId="activeIndicator"
                initial={false}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
        </motion.nav>
    );
};

export default Navbar;
