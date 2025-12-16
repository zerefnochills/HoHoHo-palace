import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlyingSanta = () => {
    const [isFlying, setIsFlying] = useState(false);
    const [audio] = useState(typeof Audio !== 'undefined' ? new Audio() : null);

    useEffect(() => {
        // Santa flies every 15-25 seconds
        const flyInterval = setInterval(() => {
            setIsFlying(true);

            // Play sound effect (using a simple bell sound)
            if (audio) {
                // Create a simple bell sound using Web Audio API
                playBellSound();
            }

            // Reset after animation completes
            setTimeout(() => {
                setIsFlying(false);
            }, 5000);
        }, Math.random() * 10000 + 15000); // Random interval between 15-25 seconds

        return () => clearInterval(flyInterval);
    }, []);

    const playBellSound = () => {
        try {
            // Create AudioContext for sound generation
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // Create oscillator for bell sound
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            // Bell-like frequency
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';

            // Envelope for bell sound
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);

            // Second bell tone
            setTimeout(() => {
                const osc2 = audioContext.createOscillator();
                const gain2 = audioContext.createGain();

                osc2.connect(gain2);
                gain2.connect(audioContext.destination);

                osc2.frequency.value = 1000;
                osc2.type = 'sine';

                gain2.gain.setValueAtTime(0.3, audioContext.currentTime);
                gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

                osc2.start(audioContext.currentTime);
                osc2.stop(audioContext.currentTime + 0.5);
            }, 200);

            // Ho Ho Ho sound notification
            console.log('🎅 Ho Ho Ho! Santa is flying by!');
        } catch (error) {
            console.log('Audio not available');
        }
    };

    return (
        <AnimatePresence>
            {isFlying && (
                <motion.div
                    className="fixed top-20 left-0 z-50 pointer-events-none"
                    initial={{ x: -200, y: 0 }}
                    animate={{
                        x: typeof window !== 'undefined' ? window.innerWidth + 200 : 2000,
                        y: [-10, -40, -10, -30, -10],
                    }}
                    exit={{ x: typeof window !== 'undefined' ? window.innerWidth + 200 : 2000 }}
                    transition={{
                        duration: 5,
                        ease: 'linear',
                        y: {
                            duration: 5,
                            repeat: 0,
                            ease: 'easeInOut',
                        }
                    }}
                >
                    <motion.div
                        className="text-8xl filter drop-shadow-2xl"
                        animate={{
                            rotate: [0, -5, 5, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            repeat: 10,
                        }}
                    >
                        🎅🛷
                    </motion.div>

                    {/* Trail effect */}
                    <motion.div
                        className="absolute top-1/2 left-0 text-4xl"
                        initial={{ opacity: 0.8, scale: 1 }}
                        animate={{
                            opacity: 0,
                            scale: 0.5,
                            x: -50,
                        }}
                        transition={{ duration: 1, repeat: 5 }}
                    >
                        ✨
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FlyingSanta;
