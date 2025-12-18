import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();

    // Parallax effects for different layers
    const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
    const textY = useTransform(scrollY, [0, 500], [0, 200]);
    const snowY = useTransform(scrollY, [0, 1000], [0, 150]);

    // Reduced snow particles for performance - minimalistic
    const snowflakes = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 15}s`,
        animationDelay: `${Math.random() * 5}s`,
        size: Math.random() * 3 + 1,
    }));

    // Reduced stars for minimalistic look
    const stars = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 2,
    }));

    return (
        <section className="relative w-full min-h-screen pt-20 overflow-hidden bg-transparent flex items-center justify-center">
            {/* Starry Night Sky - Minimalistic */}
            <div className="absolute inset-0 z-5">
                {stars.map((star) => (
                    <motion.div
                        key={`star-${star.id}`}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                        }}
                        animate={{
                            opacity: [0.1, 0.6, 0.1],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: star.duration,
                            delay: star.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* Subtle Snow Particles - Background Layer */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-10 pointer-events-none"
            >
                {snowflakes.slice(0, 12).map((flake) => (
                    <div
                        key={flake.id}
                        className="snowflake absolute rounded-full bg-white opacity-40"
                        style={{
                            left: flake.left,
                            width: `${flake.size}px`,
                            height: `${flake.size}px`,
                            animationDuration: flake.animationDuration,
                            animationDelay: flake.animationDelay,
                        }}
                    />
                ))}
            </motion.div>

            {/* Winter Mountain Silhouette - Minimalistic */}
            <div className="absolute bottom-0 left-0 right-0 z-25 opacity-30">
                <svg viewBox="0 0 1200 300" className="w-full h-auto">
                    {/* Distant mountains */}
                    <path
                        d="M0,300 L0,150 Q200,100 400,150 Q600,100 800,150 Q1000,100 1200,150 L1200,300 Z"
                        fill="#1e293b"
                        opacity="0.6"
                    />

                    {/* Mid mountains */}
                    <path
                        d="M0,300 L0,180 Q150,120 300,180 Q450,140 600,180 Q750,140 900,180 Q1050,140 1200,180 L1200,300 Z"
                        fill="#0f172a"
                        opacity="0.8"
                    />

                    {/* Front mountains with snow caps */}
                    <path
                        d="M0,300 L0,220 L100,160 L150,180 L200,140 L250,160 L300,200 L400,180 L500,220 L600,200 L700,240 L800,220 L900,260 L1000,240 L1100,280 L1200,260 L1200,300 Z"
                        fill="#020617"
                        opacity="0.9"
                    />

                    {/* Minimal snow caps */}
                    <path d="M100,160 L120,165 L80,165 Z" fill="white" opacity="0.7" />
                    <path d="M200,140 L220,145 L180,145 Z" fill="white" opacity="0.7" />
                    <path d="M400,180 L425,185 L375,185 Z" fill="white" opacity="0.7" />
                    <path d="M600,200 L625,205 L575,205 Z" fill="white" opacity="0.7" />
                    <path d="M800,220 L830,225 L770,225 Z" fill="white" opacity="0.7" />
                    <path d="M1000,240 L1030,245 L970,245 Z" fill="white" opacity="0.7" />
                </svg>
            </div>

            {/* Foreground Snow Layer - Minimal */}
            <motion.div
                style={{ y: snowY }}
                className="absolute inset-0 z-30 pointer-events-none"
            >
                {snowflakes.slice(12).map((flake) => (
                    <div
                        key={flake.id}
                        className="snowflake absolute rounded-full bg-white opacity-60"
                        style={{
                            left: flake.left,
                            width: `${flake.size}px`,
                            height: `${flake.size}px`,
                            animationDuration: flake.animationDuration,
                            animationDelay: flake.animationDelay,
                        }}
                    />
                ))}
            </motion.div>

            {/* Hero Content */}
            <motion.div
                style={{ y: textY }}
                className="relative z-40 flex flex-col items-center justify-center px-4 text-center py-20"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-montserrat text-5xl md:text-7xl lg:text-8xl font-bold text-snow-white mb-6 drop-shadow-2xl"
                >
                    Make This Christmas
                    <br />
                    <motion.span
                        className="text-gold-accent"
                        animate={{
                            textShadow: [
                                '0 0 20px rgba(255, 209, 102, 0.3)',
                                '0 0 30px rgba(255, 209, 102, 0.6)',
                                '0 0 20px rgba(255, 209, 102, 0.3)',
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                        }}
                    >
                        Unforgettable
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-inter text-lg md:text-2xl text-snow-white/80 mb-12 max-w-2xl"
                >
                    Thoughtful gifts for everyone you love
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <motion.button
                        className="px-10 py-4 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 hover:border-gold-accent text-snow-white font-inter font-semibold rounded-lg transition-all duration-300 shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Shop Gifts
                    </motion.button>
                    <motion.button
                        className="px-10 py-4 bg-transparent border-2 border-white/30 hover:border-white/50 text-snow-white hover:bg-white/5 font-inter font-semibold rounded-lg transition-all duration-300 shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Categories
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
