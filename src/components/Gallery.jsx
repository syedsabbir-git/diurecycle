import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Gallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const screenshots = [
        {
            src: "/screenshots/home.png",
            title: "Browse Products",
            description: "Discover second-hand items from fellow DIU students. Filter by categories like textbooks, electronics, furniture, and more. Real-time updates keep listings fresh and relevant.",
            features: ["Category filters", "Real-time updates", "Search functionality"]
        },
        {
            src: "/screenshots/add-product.png",
            title: "List Your Items",
            description: "Upload your products in under 2 minutes. Add multiple photos, set your price, choose categories, and let hundreds of students see your listing instantly.",
            features: ["Quick upload", "Multiple images", "Location tagging"]
        },
        {
            src: "/screenshots/chat.png",
            title: "Real-time Messaging",
            description: "Chat instantly with sellers using Firebase Realtime Database. Share images, negotiate prices, and get responses within seconds. Never miss a message with push notifications.",
            features: ["Instant messaging", "Image sharing", "Push notifications"]
        },
        {
            src: "/screenshots/product-details.png",
            title: "Product Details",
            description: "View comprehensive product information including condition, price, seller profile, and location. Contact sellers directly or save listings for later.",
            features: ["Detailed info", "Seller profile", "Map location"]
        },
        {
            src: "/screenshots/profile.png",
            title: "Manage Profile",
            description: "Track your active listings, view chat history, and manage your account. Edit product details, mark items as sold, or remove listings with ease.",
            features: ["Listing management", "Chat history", "Account settings"]
        },
        {
            src: "/screenshots/search.png",
            title: "Smart Search",
            description: "Find exactly what you need with advanced search and filters. Search by keyword, price range, condition, location, and category for precise results.",
            features: ["Advanced filters", "Price range", "Location-based"]
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % screenshots.length);
            }, 3000); // Change every 4 seconds

            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, screenshots.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % screenshots.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
        setIsAutoPlaying(false);
    };

    return (
        <section className="py-20 px-6 bg-gray-800/30 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl">

                {/* Section Header */}
                <motion.div
                    ref={ref}
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        See It In <span className="text-emerald-400">Action</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore the app's features with our interactive showcase
                    </p>
                </motion.div>

                {/* Slider Container */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Title */}
                                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
                                    <span className="text-sm text-emerald-300 font-medium">
                                        Feature {currentIndex + 1} of {screenshots.length}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                    {screenshots[currentIndex].title}
                                </h3>

                                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                    {screenshots[currentIndex].description}
                                </p>

                                {/* Feature List */}
                                <ul className="space-y-3">
                                    {screenshots[currentIndex].features.map((feature, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + idx * 0.1 }}
                                            className="flex items-center gap-3 text-gray-300"
                                        >
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Controls */}
                        <div className="flex items-center gap-4 pt-6">
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full flex items-center justify-center transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Dots */}
                            <div className="flex gap-2">
                                {screenshots.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`h-2 rounded-full transition-all ${index === currentIndex
                                                ? 'w-8 bg-emerald-500'
                                                : 'w-2 bg-gray-700 hover:bg-gray-600'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full flex items-center justify-center transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side - Screenshot */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* Glow Effect Behind */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl -z-10"></div>

                        {/* Direct PNG Screenshot */}
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex}
                                src={screenshots[currentIndex].src}
                                alt={screenshots[currentIndex].title}
                                className="w-full h-auto max-w-md mx-auto drop-shadow-2xl rounded-2xl"
                                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9, x: -50 }}
                                transition={{ duration: 0.5 }}
                                onError={(e) => {
                                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="650"><rect width="300" height="650" fill="%23374151" rx="20"/><text x="50%" y="50%" text-anchor="middle" fill="%239CA3AF" font-size="16">Screenshot</text></svg>';
                                }}
                            />
                        </AnimatePresence>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

export default Gallery;
