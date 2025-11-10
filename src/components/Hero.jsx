import { Download, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Stats from './Stats';
import MockupDisplay from './MockupDisplay';

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - Animated */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Beta Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-emerald-300 font-medium">Now in Beta Testing</span>
            </motion.div>

            {/* Headline */}
            <div>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Campus Marketplace,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 animate-gradient">
                  Reimagined
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-400 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Buy and sell within the DIU community. Save money, reduce waste, and give products a second life—all from your phone.
              </motion.p>
            </div>

            {/* Stats Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Stats />
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button 
                className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <Download className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Download Beta</span>
              </motion.button>
              
              <motion.button 
                className="bg-gray-800 hover:bg-gray-700 border border-gray-700 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <a href="https://github.com/syedsabbir-git/DIU-Recycle" target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </motion.button>
            </motion.div>

            {/* Tech Tags */}
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 hover:bg-blue-500/20 transition-colors cursor-default">
                Flutter
              </span>
              <span className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-sm text-orange-400 hover:bg-orange-500/20 transition-colors cursor-default">
                Firebase
              </span>
              <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-400 hover:bg-purple-500/20 transition-colors cursor-default">
                Real-time Chat
              </span>
              <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-400 hover:bg-green-500/20 transition-colors cursor-default">
                OneSignal
              </span>
            </motion.div>
          </motion.div>

          {/* Right - Animated Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <MockupDisplay />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
