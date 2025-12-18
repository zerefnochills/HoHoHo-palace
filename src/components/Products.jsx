import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
    const products = [
        {
            id: 1,
            name: 'Luxury Watch',
            price: '$299',
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=400&fit=crop',
            badge: 'Premium'
        },
        {
            id: 2,
            name: 'Cozy Blanket',
            price: '$79',
            image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop',
            badge: 'Popular'
        },
        {
            id: 3,
            name: 'Premium Headphones',
            price: '$199',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
            badge: 'New'
        },
        {
            id: 4,
            name: 'Artisan Coffee Set',
            price: '$89',
            image: 'https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=400&h=400&fit=crop',
            badge: null
        },
        {
            id: 5,
            name: 'Scented Candles',
            price: '$45',
            image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop',
            badge: 'Popular'
        },
        {
            id: 6,
            name: 'Leather Journal',
            price: '$59',
            image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=400&fit=crop',
            badge: null
        },
        {
            id: 7,
            name: 'Smart Speaker',
            price: '$149',
            image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&h=400&fit=crop',
            badge: 'New'
        },
        {
            id: 8,
            name: 'Gourmet Chocolate',
            price: '$35',
            image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop',
            badge: 'Limited'
        },
    ];

    return (
        <section className="relative py-24 px-4 overflow-hidden bg-transparent">
            {/* Subtle particle background - minimalistic */}
            <div className="absolute inset-0 opacity-5 z-5 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-20">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-playfair text-4xl md:text-6xl font-bold text-center text-snow-white mb-4"
                >
                    Featured Gifts
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="font-poppins text-lg text-center text-snow-white/70 mb-16"
                >
                    Handpicked selections for a memorable Christmas
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group"
                        >
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/5">
                                {/* Product Image */}
                                <div className="relative h-64 overflow-hidden bg-gray-900">
                                    <motion.img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6, ease: 'easeOut' }}
                                        loading="lazy"
                                    />

                                    {/* Overlay on hover */}
                                    <motion.div
                                        className="absolute inset-0 bg-black/20"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    {/* Badge */}
                                    {product.badge && (
                                        <div className="absolute top-3 right-3">
                                            <span className="px-3 py-1 bg-gold-accent/90 backdrop-blur-sm text-midnight-blue text-xs font-semibold rounded-full">
                                                {product.badge}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Product Info */}
                                <div className="p-5">
                                    <h3 className="font-poppins text-lg font-semibold text-snow-white mb-2 group-hover:text-gold-accent transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                    <p className="font-poppins text-2xl font-bold text-gold-accent mb-4">
                                        {product.price}
                                    </p>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-gold-accent/50 text-snow-white font-poppins font-medium rounded-lg transition-all duration-300"
                                    >
                                        Add to Cart
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
