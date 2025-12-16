import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    const calculateTimeLeft = () => {
        const christmas = new Date(new Date().getFullYear(), 11, 25); // December 25
        const now = new Date();

        // If Christmas has passed this year, count down to next year
        if (now > christmas) {
            christmas.setFullYear(christmas.getFullYear() + 1);
        }

        const difference = christmas - now;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label }) => (
        <motion.div
            key={value}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.3 }}
            className="frosted-glass rounded-2xl p-6 min-w-[100px] text-center relative overflow-hidden"
        >
            {/* Sparkle effect */}
            <motion.div
                className="absolute top-1 right-1 text-xl"
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            >
                ⭐
            </motion.div>

            <motion.div
                key={`${label}-${value}`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="font-playfair text-5xl md:text-6xl font-bold text-gold-accent mb-2"
            >
                {value.toString().padStart(2, '0')}
            </motion.div>
            <div className="font-poppins text-sm md:text-base text-snow-white/80 uppercase tracking-wider">
                {label}
            </div>
        </motion.div>
    );

    // Spinning bells
    const bells = Array.from({ length: 4 }, (_, i) => ({
        id: i,
        left: `${20 + i * 20}%`,
        delay: i * 0.5,
    }));

    return (
        <section className="relative py-24 px-4 overflow-hidden bg-transparent">
            {/* Snow Overlay */}
            <div className="absolute inset-0 opacity-20">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="snowflake absolute rounded-full bg-white"
                        style={{
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            animationDuration: `${Math.random() * 10 + 10}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Spinning Bells */}
            <div className="absolute top-10 left-0 right-0 pointer-events-none">
                {bells.map((bell) => (
                    <motion.div
                        key={bell.id}
                        className="absolute text-5xl"
                        style={{ left: bell.left }}
                        animate={{
                            rotate: [0, -20, 20, -20, 0],
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 2,
                            delay: bell.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        🔔
                    </motion.div>
                ))}
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <motion.h2
                        className="font-playfair text-4xl md:text-6xl font-bold text-snow-white mb-4"
                        animate={{
                            textShadow: [
                                '0 0 20px rgba(255, 209, 102, 0.5)',
                                '0 0 40px rgba(255, 209, 102, 0.8)',
                                '0 0 20px rgba(255, 209, 102, 0.5)',
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        Christmas Countdown
                    </motion.h2>
                    <p className="font-poppins text-lg text-snow-white/80">
                        Time until the magic begins...
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-6"
                >
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <TimeUnit value={timeLeft.minutes} label="Minutes" />
                    <TimeUnit value={timeLeft.seconds} label="Seconds" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <motion.p
                        className="font-poppins text-christmas-red font-semibold text-xl"
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                    >
                        🎄 Don't wait! Order now for guaranteed Christmas delivery 🎄
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Countdown;
