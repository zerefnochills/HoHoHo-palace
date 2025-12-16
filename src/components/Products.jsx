import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
    const products = [
        { id: 1, name: 'Luxury Watch', price: '$299', image: '⌚' },
        { id: 2, name: 'Cozy Blanket', price: '$79', image: '🛋️' },
        { id: 3, name: 'Premium Headphones', price: '$199', image: '🎧' },
        { id: 4, name: 'Artisan Coffee Set', price: '$89', image: '☕' },
        { id: 5, name: 'Scented Candles', price: '$45', image: '🕯️' },
        { id: 6, name: 'Leather Journal', price: '$59', image: '📔' },
        { id: 7, name: 'Smart Speaker', price: '$149', image: '🔊' },
        { id: 8, name: 'Gourmet Chocolate', price: '$35', image: '🍫' },
    ];

    // Bouncing presents
    const bouncingPresents = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        emoji: '🎁',
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 80 + 10}%`,
        delay: Math.random() * 2,
    }));

    return (
        <section className="relative py-24 px-4 overflow-hidden bg-transparent">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 z-5">
                <div className="absolute top-1/4 left-10 text-9xl twinkle-animation">❄️</div>
                <div className="absolute bottom-1/4 right-10 text-9xl twinkle-animation" style={{ animationDelay: '1s' }}>⭐</div>
            </div>

            {/* Bouncing Presents */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {bouncingPresents.map((present) => (
                    <motion.div
                        key={present.id}
                        className="absolute text-5xl"
                        style={{
                            left: present.left,
                            top: present.top,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 3,
                            delay: present.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        {present.emoji}
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-playfair text-4xl md:text-6xl font-bold text-center text-snow-white mb-4"
                >
                    Featured Gifts
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-poppins text-lg text-center text-snow-white/80 mb-16"
                >
                    Handpicked selections for a memorable Christmas
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                rotate: [0, -1, 1, -1, 0],
                                transition: { duration: 0.3 }
                            }}
                            className="bg-snow-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-snow-white/20 hover:border-gold-accent transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gold-accent/30"
                        >
                            {/* Product Image Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-christmas-red/20 to-pine-green/20 flex items-center justify-center relative overflow-hidden">
                                <motion.div
                                    className="text-8xl"
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    {product.image}
                                </motion.div>

                                {/* Sparkles */}
                                <motion.div
                                    className="absolute top-2 right-2 text-2xl"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                >
                                    ✨
                                </motion.div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6">
                                <h3 className="font-playfair text-xl font-semibold text-snow-white mb-2">
                                    {product.name}
                                </h3>
                                <p className="font-poppins text-2xl font-bold text-gold-accent mb-4">
                                    {product.price}
                                </p>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-3 bg-christmas-red hover:bg-christmas-red/90 text-snow-white font-poppins font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-christmas-red/50 relative overflow-hidden group"
                                >
                                    <span className="relative z-10">Add to Cart</span>
                                    <motion.div
                                        className="absolute inset-0 bg-gold-accent"
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileHover={{ scale: 2, opacity: 0.2 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
