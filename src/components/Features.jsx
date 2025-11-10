import { ShoppingBag, MessageCircle, Bell, MapPin, Search, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-emerald-500/50 transition-all hover:-translate-y-2 group"
    >
      <motion.div 
        className="text-emerald-400 mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {feature.icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

function Features() {
  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Browse & Discover",
      description: "Find textbooks, electronics, furniture from fellow DIU students with real-time updates."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Chat Instantly",
      description: "Negotiate prices directly with sellers. Share images and get instant responses via Firebase."
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Push Notifications",
      description: "Stay updated with OneSignal-powered alerts for messages, offers, and new listings."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location Services",
      description: "View product locations on interactive maps and find items near your campus area."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Search",
      description: "Filter by category, price range, condition, and location to find exactly what you need."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Verified",
      description: "Firebase Auth ensures DIU student-only access with email verification and safe trading."
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 px-6">
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
            Powerful <span className="text-emerald-400">Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need for a seamless campus marketplace experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;
