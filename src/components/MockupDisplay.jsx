import { motion } from 'framer-motion';

function MockupDisplay() {
  return (
    <motion.div 
      className="relative"
      animate={{ 
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Glowing effect behind image */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 blur-3xl -z-10"></div>
      
      <img 
        src="/mockup.png" 
        alt="DIU Recycle App" 
        className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
      />
    </motion.div>
  );
}

export default MockupDisplay;
