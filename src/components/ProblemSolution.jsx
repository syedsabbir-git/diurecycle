import { X, Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

function ProblemSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    "Expensive new textbooks every semester",
    "Unused items gathering dust in dorm rooms",
    "No trusted platform to buy/sell on campus",
    "Difficult to reach other students",
    "Products end up in landfills"
  ];

  const solutions = [
    "Buy used textbooks at 50-70% discount",
    "List your items in under 2 minutes",
    "Verified DIU student community only",
    "Instant chat with real-time notifications",
    "Reduce waste, save the environment"
  ];

  return (
    <section className="py-20 px-6 bg-gray-800/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Campus <span className="text-emerald-400">Challenge</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Traditional buying and selling on campus is broken. DIU Recycle fixes it.
          </p>
        </motion.div>

        {/* Split View with Arrow */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          
          {/* Problem Side */}
          <motion.div 
            className="bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20 rounded-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            {/* Glow effect */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <motion.div 
                className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <X className="w-6 h-6 text-red-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-red-400">The Problem</h3>
            </div>
            
            <ul className="space-y-4 relative z-10">
              {problems.map((problem, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow in the middle */}
          <motion.div 
            className="hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div
              animate={{ 
                x: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowRight className="w-12 h-12 text-emerald-400" />
            </motion.div>
          </motion.div>

          {/* Solution Side */}
          <motion.div 
            className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <motion.div 
                className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Check className="w-6 h-6 text-emerald-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-emerald-400">DIU Recycle</h3>
            </div>
            
            <ul className="space-y-4 relative z-10">
              {solutions.map((solution, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Check className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-1">50-70%</div>
            <div className="text-sm text-gray-500">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-1">&lt;2 min</div>
            <div className="text-sm text-gray-500">Listing Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-1">100%</div>
            <div className="text-sm text-gray-500">DIU Students</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ProblemSolution;
