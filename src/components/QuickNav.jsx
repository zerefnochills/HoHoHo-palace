import React from 'react';
import { motion } from 'framer-motion';

const QuickNav = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gold-accent hover:bg-gold-accent/90 text-midnight-blue rounded-full shadow-2xl flex items-center justify-center text-2xl"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
            >
                ⬆️
            </motion.button>

            {/* Quick Section Navigation - Side Dots */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
                {[
                    { id: 'hero', label: 'Home', emoji: '🏠' },
                    { id: 'categories', label: 'Categories', emoji: '🎁' },
                    { id: 'products', label: 'Products', emoji: '🛍️' },
                    { id: 'personalize', label: 'Personalize', emoji: '✨' },
                    { id: 'countdown', label: 'Countdown', emoji: '⏰' },
                    { id: 'testimonials', label: 'Reviews', emoji: '⭐' },
                ].map((section) => (
                    <motion.button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="group relative w-4 h-4 rounded-full bg-snow-white/30 hover:bg-gold-accent transition-all duration-300"
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        {/* Tooltip */}
                        <span className="absolute right-8 top-1/2 -translate-y-1/2 bg-midnight-blue/90 text-snow-white px-3 py-1 rounded-lg text-sm font-poppins whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            {section.emoji} {section.label}
                        </span>
                    </motion.button>
                ))}
            </div>
        </>
    );
};

export default QuickNav;
