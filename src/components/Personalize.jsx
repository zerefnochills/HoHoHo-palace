import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Personalize = () => {
    const { scrollY } = useScroll();
    const lidRotation = useTransform(scrollY, [2000, 2500], [0, -15]);
    const giftY = useTransform(scrollY, [2000, 2500], [0, -20]);

    const [formData, setFormData] = useState({
        recipientName: '',
        giftWrap: 'classic-red',
        customColor: '#C1121F',
        useCustomColor: false,
        ribbonPattern: 'solid',
        bowStyle: 'classic',
        decoration: 'none',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleColorChange = (e) => {
        setFormData({ ...formData, customColor: e.target.value, useCustomColor: true });
    };

    const wrapOptions = [
        { value: 'classic-red', label: 'Classic Red', color: '#C1121F', shadow: 'rgba(193, 18, 31, 0.5)' },
        { value: 'gold-elegance', label: 'Gold Elegance', color: '#FFD166', shadow: 'rgba(255, 209, 102, 0.5)' },
        { value: 'winter-blue', label: 'Winter Blue', color: '#4A90E2', shadow: 'rgba(74, 144, 226, 0.5)' },
        { value: 'forest-green', label: 'Forest Green', color: '#1B4332', shadow: 'rgba(27, 67, 50, 0.5)' },
        { value: 'royal-purple', label: 'Royal Purple', color: '#6B46C1', shadow: 'rgba(107, 70, 193, 0.5)' },
        { value: 'rose-pink', label: 'Rose Pink', color: '#EC4899', shadow: 'rgba(236, 72, 153, 0.5)' },
    ];

    const ribbonPatterns = [
        { value: 'solid', label: 'Solid' },
        { value: 'striped', label: 'Striped' },
        { value: 'dotted', label: 'Dotted' },
    ];

    const bowStyles = [
        { value: 'classic', label: 'Classic', size: 16 },
        { value: 'large', label: 'Large', size: 20 },
        { value: 'minimal', label: 'Minimal', size: 12 },
    ];

    const decorations = [
        { value: 'none', label: 'None', icon: '—' },
        { value: 'snowflakes', label: 'Snowflakes', icon: '❄' },
        { value: 'stars', label: 'Stars', icon: '★' },
    ];

    // Get the currently selected wrap option or use custom color
    const selectedWrap = formData.useCustomColor
        ? {
            color: formData.customColor,
            shadow: `${formData.customColor}80`
        }
        : wrapOptions.find(option => option.value === formData.giftWrap);

    const getRibbonPattern = () => {
        switch (formData.ribbonPattern) {
            case 'striped':
                return 'repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 10px, transparent 10px, transparent 20px)';
            case 'dotted':
                return 'radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)';
            default:
                return 'none';
        }
    };

    return (
        <section className="relative py-24 px-4 bg-transparent overflow-hidden">
            {/* Enhanced Particle Background */}
            <div className="absolute inset-0 opacity-20">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
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
                    style={{
                        textShadow: '0 0 30px rgba(255, 215, 0, 0.3)',
                    }}
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

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Form Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="frosted-glass rounded-2xl p-8 space-y-6 border border-snow-white/20"
                        style={{
                            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                        }}
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
                                className="w-full px-4 py-3 bg-midnight-blue/50 border border-snow-white/30 rounded-lg text-snow-white placeholder-snow-white/50 focus:outline-none focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/50 transition-all duration-300"
                            />
                        </div>

                        {/* Gift Wrap Selector */}
                        <div>
                            <label className="block font-poppins text-snow-white mb-3 font-medium">
                                Gift Wrap Color
                            </label>
                            <div className="grid grid-cols-3 gap-2 mb-3">
                                {wrapOptions.map((option) => (
                                    <motion.label
                                        key={option.value}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 ${formData.giftWrap === option.value && !formData.useCustomColor
                                            ? 'border-gold-accent bg-gold-accent/20 shadow-lg'
                                            : 'border-snow-white/30 bg-midnight-blue/30 hover:border-snow-white/50'
                                            }`}
                                        style={formData.giftWrap === option.value && !formData.useCustomColor ? {
                                            boxShadow: `0 4px 20px ${option.shadow}`,
                                        } : {}}
                                    >
                                        <input
                                            type="radio"
                                            name="giftWrap"
                                            value={option.value}
                                            checked={formData.giftWrap === option.value && !formData.useCustomColor}
                                            onChange={(e) => {
                                                handleChange(e);
                                                setFormData(prev => ({ ...prev, useCustomColor: false }));
                                            }}
                                            className="hidden"
                                        />
                                        <div className="flex items-center gap-2">
                                            <motion.div
                                                className="w-6 h-6 rounded-full border-2 border-snow-white shadow-lg"
                                                style={{ backgroundColor: option.color }}
                                            />
                                            <span className="font-poppins text-snow-white text-xs font-medium">
                                                {option.label}
                                            </span>
                                        </div>
                                    </motion.label>
                                ))}
                            </div>

                            {/* Custom Color Picker */}
                            <div className="mt-3">
                                <label className="block font-poppins text-snow-white/70 mb-2 text-sm">
                                    Or choose custom color:
                                </label>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="color"
                                        value={formData.customColor}
                                        onChange={handleColorChange}
                                        className="w-16 h-12 rounded-lg border-2 border-snow-white/30 cursor-pointer bg-transparent"
                                    />
                                    <span className="font-poppins text-snow-white/80 text-sm font-mono">
                                        {formData.customColor}
                                    </span>
                                    {formData.useCustomColor && (
                                        <span className="text-gold-accent text-sm">✓ Active</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Ribbon Pattern */}
                        <div>
                            <label className="block font-poppins text-snow-white mb-3 font-medium">
                                Ribbon Pattern
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {ribbonPatterns.map((pattern) => (
                                    <motion.label
                                        key={pattern.value}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 ${formData.ribbonPattern === pattern.value
                                            ? 'border-gold-accent bg-gold-accent/20'
                                            : 'border-snow-white/30 bg-midnight-blue/30 hover:border-snow-white/50'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="ribbonPattern"
                                            value={pattern.value}
                                            checked={formData.ribbonPattern === pattern.value}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <span className="font-poppins text-snow-white text-sm text-center block">
                                            {pattern.label}
                                        </span>
                                    </motion.label>
                                ))}
                            </div>
                        </div>

                        {/* Bow Style */}
                        <div>
                            <label className="block font-poppins text-snow-white mb-3 font-medium">
                                Bow Style
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {bowStyles.map((bow) => (
                                    <motion.label
                                        key={bow.value}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 ${formData.bowStyle === bow.value
                                            ? 'border-gold-accent bg-gold-accent/20'
                                            : 'border-snow-white/30 bg-midnight-blue/30 hover:border-snow-white/50'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="bowStyle"
                                            value={bow.value}
                                            checked={formData.bowStyle === bow.value}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <span className="font-poppins text-snow-white text-sm text-center block">
                                            {bow.label}
                                        </span>
                                    </motion.label>
                                ))}
                            </div>
                        </div>

                        {/* Decorations */}
                        <div>
                            <label className="block font-poppins text-snow-white mb-3 font-medium">
                                Decorations
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {decorations.map((deco) => (
                                    <motion.label
                                        key={deco.value}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`cursor-pointer p-3 rounded-lg border-2 transition-all duration-300 ${formData.decoration === deco.value
                                            ? 'border-gold-accent bg-gold-accent/20'
                                            : 'border-snow-white/30 bg-midnight-blue/30 hover:border-snow-white/50'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="decoration"
                                            value={deco.value}
                                            checked={formData.decoration === deco.value}
                                            onChange={handleChange}
                                            className="hidden"
                                        />
                                        <div className="text-center">
                                            <div className="text-2xl mb-1">{deco.icon}</div>
                                            <span className="font-poppins text-snow-white text-xs block">
                                                {deco.label}
                                            </span>
                                        </div>
                                    </motion.label>
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
                                className="w-full px-4 py-3 bg-midnight-blue/50 border border-snow-white/30 rounded-lg text-snow-white placeholder-snow-white/50 focus:outline-none focus:border-gold-accent focus:ring-2 focus:ring-gold-accent/50 transition-all duration-300 resize-none"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(193, 18, 31, 0.6)' }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-gradient-to-r from-christmas-red to-christmas-red/80 hover:from-christmas-red/90 hover:to-christmas-red text-snow-white font-poppins font-semibold rounded-full transition-all duration-300 shadow-lg"
                        >
                            Save Personalization
                        </motion.button>
                    </motion.div>

                    {/* Animated Gift Box Preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative flex items-center justify-center lg:sticky lg:top-24"
                    >
                        <motion.div
                            style={{ y: giftY }}
                            className="relative"
                            animate={{
                                rotateY: [0, 5, -5, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            {/* Gift Box Base - Changes color based on selection */}
                            <motion.div
                                className="w-72 h-72 rounded-2xl shadow-2xl relative overflow-hidden"
                                style={{
                                    background: `linear-gradient(135deg, ${selectedWrap.color} 0%, ${selectedWrap.color}CC 100%)`,
                                    boxShadow: `0 20px 60px ${selectedWrap.shadow}, 0 0 40px ${selectedWrap.shadow}`,
                                }}
                                animate={{
                                    boxShadow: [
                                        `0 20px 60px ${selectedWrap.shadow}, 0 0 40px ${selectedWrap.shadow}`,
                                        `0 25px 70px ${selectedWrap.shadow}, 0 0 50px ${selectedWrap.shadow}`,
                                        `0 20px 60px ${selectedWrap.shadow}, 0 0 40px ${selectedWrap.shadow}`,
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                {/* Shine effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"
                                    animate={{
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />

                                {/* Vertical Ribbon with Pattern */}
                                <motion.div
                                    whileHover={{ scaleX: 1.15 }}
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-full bg-gradient-to-b from-gold-accent via-gold-accent/90 to-gold-accent shadow-lg"
                                    style={{
                                        boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)',
                                        backgroundImage: getRibbonPattern(),
                                        backgroundSize: formData.ribbonPattern === 'dotted' ? '20px 20px' : 'auto',
                                    }}
                                />

                                {/* Horizontal Ribbon with Pattern */}
                                <motion.div
                                    whileHover={{ scaleY: 1.15 }}
                                    className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-14 bg-gradient-to-r from-gold-accent via-gold-accent/90 to-gold-accent shadow-lg"
                                    style={{
                                        boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)',
                                        backgroundImage: getRibbonPattern(),
                                        backgroundSize: formData.ribbonPattern === 'dotted' ? '20px 20px' : 'auto',
                                    }}
                                />

                                {/* Bow - Size changes based on style */}
                                <motion.div
                                    whileHover={{
                                        rotate: 360,
                                        scale: 1.2,
                                    }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-gold-accent to-gold-accent/80 rounded-full shadow-xl cursor-pointer"
                                    style={{
                                        width: `${bowStyles.find(b => b.value === formData.bowStyle)?.size || 16}px`,
                                        height: `${bowStyles.find(b => b.value === formData.bowStyle)?.size || 16}px`,
                                        boxShadow: '0 0 30px rgba(255, 215, 0, 0.8)',
                                    }}
                                >
                                    <div className="absolute inset-3 border-2 border-white/50 rounded-full" />
                                </motion.div>

                                {/* Decorations on gift box */}
                                {formData.decoration !== 'none' && (
                                    <>
                                        {[...Array(6)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute text-white/40"
                                                style={{
                                                    left: `${15 + (i % 3) * 30}%`,
                                                    top: `${20 + Math.floor(i / 3) * 40}%`,
                                                    fontSize: '24px',
                                                }}
                                                animate={{
                                                    opacity: [0.3, 0.7, 0.3],
                                                    scale: [0.9, 1.1, 0.9],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: i * 0.3,
                                                }}
                                            >
                                                {formData.decoration === 'snowflakes' ? '❄' : '★'}
                                            </motion.div>
                                        ))}
                                    </>
                                )}
                            </motion.div>

                            {/* Gift Box Lid (opens on scroll) */}
                            <motion.div
                                style={{
                                    rotateX: lidRotation,
                                    background: `linear-gradient(135deg, ${selectedWrap.color} 0%, ${selectedWrap.color}DD 100%)`,
                                }}
                                className="absolute -top-10 left-0 w-72 h-20 rounded-t-2xl shadow-2xl origin-bottom"
                            >
                                <div
                                    className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-8 bg-gradient-to-r from-gold-accent via-gold-accent/90 to-gold-accent"
                                    style={{
                                        boxShadow: '0 0 15px rgba(255, 215, 0, 0.6)',
                                        backgroundImage: getRibbonPattern(),
                                        backgroundSize: formData.ribbonPattern === 'dotted' ? '20px 20px' : 'auto',
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Personalize;
