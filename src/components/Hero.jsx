import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();

    // Parallax effects for different layers
    const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
    const textY = useTransform(scrollY, [0, 500], [0, 200]);
    const snowY = useTransform(scrollY, [0, 1000], [0, 150]);

    // Generate snow particles (reduced for performance)
    const snowflakes = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
        size: Math.random() * 4 + 2,
    }));

    // Generate rolling snowballs
    const snowballs = Array.from({ length: 3 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 80 + 10}%`,
        animationDuration: `${Math.random() * 5 + 8}s`,
        animationDelay: `${Math.random() * 3}s`,
        size: Math.random() * 40 + 60,
    }));

    // Generate falling gifts
    const fallingGifts = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 4 + 6}s`,
        animationDelay: `${Math.random() * 5}s`,
        emoji: ['🎁', '🎀', '🎄', '⭐'][Math.floor(Math.random() * 4)],
    }));

    // Generate stars for starry night (reduced for performance)
    const stars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 2,
    }));

    // Shooting stars (reduced)
    const shootingStars = Array.from({ length: 2 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 50}%`,
        top: `${Math.random() * 50}%`,
        delay: Math.random() * 5 + 2,
    }));

    return (
        <section className="relative w-full min-h-screen pt-20 overflow-hidden bg-transparent flex items-center justify-center">
            {/* Starry Night Sky */}
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
                            opacity: [0.2, 1, 0.2],
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

            {/* Shooting Stars */}
            <div className="absolute inset-0 z-5 overflow-hidden">
                {shootingStars.map((star) => (
                    <motion.div
                        key={`shooting-${star.id}`}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: star.left,
                            top: star.top,
                            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8), 0 0 20px 4px rgba(147, 197, 253, 0.6)',
                        }}
                        animate={{
                            x: [0, 300],
                            y: [0, 300],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            delay: star.delay,
                            repeat: Infinity,
                            ease: 'easeOut',
                        }}
                    />
                ))}
            </div>

            {/* Animated Snow Particles - Background Layer */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-10"
            >
                {snowflakes.slice(0, 25).map((flake) => (
                    <div
                        key={flake.id}
                        className="snowflake absolute rounded-full bg-white opacity-70"
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

            {/* Rolling Snowballs */}
            <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
                {snowballs.map((ball) => (
                    <div
                        key={`snowball-${ball.id}`}
                        className="snowball-roll absolute rounded-full bg-gradient-to-br from-white to-blue-100 shadow-2xl"
                        style={{
                            top: ball.top,
                            width: `${ball.size}px`,
                            height: `${ball.size}px`,
                            animationDuration: ball.animationDuration,
                            animationDelay: ball.animationDelay,
                            boxShadow: '0 10px 30px rgba(255, 255, 255, 0.5)',
                        }}
                    />
                ))}
            </div>

            {/* Falling Gifts */}
            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                {fallingGifts.map((gift) => (
                    <div
                        key={`gift-${gift.id}`}
                        className="gift-fall absolute text-5xl"
                        style={{
                            left: gift.left,
                            animationDuration: gift.animationDuration,
                            animationDelay: gift.animationDelay,
                            filter: 'drop-shadow(0 0 10px rgba(255, 209, 102, 0.8))',
                        }}
                    >
                        {gift.emoji}
                    </div>
                ))}
            </div>

            {/* Winter Mountain Silhouette */}
            <div className="absolute bottom-0 left-0 right-0 z-25">
                <svg viewBox="0 0 1200 300" className="w-full h-auto">
                    {/* Distant mountains */}
                    <path
                        d="M0,300 L0,150 Q200,100 400,150 Q600,100 800,150 Q1000,100 1200,150 L1200,300 Z"
                        fill="#1e293b"
                        opacity="0.4"
                    />

                    {/* Mid mountains */}
                    <path
                        d="M0,300 L0,180 Q150,120 300,180 Q450,140 600,180 Q750,140 900,180 Q1050,140 1200,180 L1200,300 Z"
                        fill="#0f172a"
                        opacity="0.6"
                    />

                    {/* Front mountains with snow caps */}
                    <path
                        d="M0,300 L0,220 L100,160 L150,180 L200,140 L250,160 L300,200 L400,180 L500,220 L600,200 L700,240 L800,220 L900,260 L1000,240 L1100,280 L1200,260 L1200,300 Z"
                        fill="#020617"
                        opacity="0.8"
                    />

                    {/* Snow caps */}
                    <path d="M100,160 L120,165 L80,165 Z" fill="white" opacity="0.9" />
                    <path d="M200,140 L220,145 L180,145 Z" fill="white" opacity="0.9" />
                    <path d="M400,180 L425,185 L375,185 Z" fill="white" opacity="0.9" />
                    <path d="M600,200 L625,205 L575,205 Z" fill="white" opacity="0.9" />
                    <path d="M800,220 L830,225 L770,225 Z" fill="white" opacity="0.9" />
                    <path d="M1000,240 L1030,245 L970,245 Z" fill="white" opacity="0.9" />

                    {/* Pine trees */}
                    <polygon points="100,300 90,260 80,300" fill="#0a1f1a" opacity="0.9" />
                    <polygon points="100,270 93,250 87,270" fill="#0a1f1a" opacity="0.95" />

                    <polygon points="250,300 235,250 220,300" fill="#0a1f1a" opacity="0.9" />
                    <polygon points="250,260 240,235 230,260" fill="#0a1f1a" opacity="0.95" />

                    <polygon points="500,300 485,260 470,300" fill="#0a1f1a" opacity="0.9" />
                    <polygon points="500,270 490,245 480,270" fill="#0a1f1a" opacity="0.95" />

                    <polygon points="850,300 835,270 820,300" fill="#0a1f1a" opacity="0.9" />
                    <polygon points="850,280 842,260 834,280" fill="#0a1f1a" opacity="0.95" />

                    <polygon points="1100,300 1085,265 1070,300" fill="#0a1f1a" opacity="0.9" />
                    <polygon points="1100,275 1092,255 1084,275" fill="#0a1f1a" opacity="0.95" />
                </svg>
            </div>

            {/* Foreground Snow Layer */}
            <motion.div
                style={{ y: snowY }}
                className="absolute inset-0 z-30 pointer-events-none"
            >
                {snowflakes.slice(25).map((flake) => (
                    <div
                        key={flake.id}
                        className="snowflake absolute rounded-full bg-white opacity-90"
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
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-montserrat text-5xl md:text-7xl lg:text-8xl font-bold text-snow-white mb-6 drop-shadow-2xl"
                >
                    Make This Christmas
                    <br />
                    <motion.span
                        className="text-gold-accent"
                        animate={{
                            textShadow: [
                                '0 0 20px rgba(255, 209, 102, 0.5)',
                                '0 0 40px rgba(255, 209, 102, 0.9)',
                                '0 0 20px rgba(255, 209, 102, 0.5)',
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        Unforgettable
                    </motion.span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="font-inter text-lg md:text-2xl text-snow-white/90 mb-12 max-w-2xl"
                >
                    Thoughtful gifts for everyone you love
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <motion.button
                        className="px-8 py-4 bg-christmas-red hover:bg-christmas-red/90 text-snow-white font-inter font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-christmas-red/50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Shop Gifts
                    </motion.button>
                    <motion.button
                        className="px-8 py-4 bg-transparent border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-midnight-blue font-inter font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
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
