import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiFlutter, 
  SiFirebase, 
  SiDart,
  SiCloudinary,
  SiGooglemaps,
  SiMaterialdesign
} from 'react-icons/si';
import { Zap, Database, Bell, Image as ImageIcon, MapPin, Shield, Gauge, Wifi, Box } from 'lucide-react';

function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techCategories = [
    {
      icon: <SiFlutter className="w-8 h-8" />,
      title: "Frontend",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      techs: [
        { name: "Flutter", icon: <SiFlutter className="w-5 h-5 text-blue-400" /> },
        { name: "Dart", icon: <SiDart className="w-5 h-5 text-blue-500" /> },
        { name: "Material Design", icon: <SiMaterialdesign className="w-5 h-5 text-cyan-400" /> }
      ]
    },
    {
      icon: <SiFirebase className="w-8 h-8" />,
      title: "Backend",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      techs: [
        { name: "Firebase Auth", icon: <Shield className="w-5 h-5 text-orange-400" /> },
        { name: "Cloud Firestore", icon: <Database className="w-5 h-5 text-yellow-400" /> },
        { name: "Firebase Storage", icon: <Box className="w-5 h-5 text-orange-500" /> }
      ]
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Real-time",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      techs: [
        { name: "Realtime Database", icon: <SiFirebase className="w-5 h-5 text-purple-400" /> },
        { name: "StreamBuilder", icon: <Wifi className="w-5 h-5 text-pink-400" /> },
        { name: "OneSignal", icon: <Bell className="w-5 h-5 text-purple-500" /> }
      ]
    },
    {
      icon: <SiCloudinary className="w-8 h-8" />,
      title: "Services",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      techs: [
        { name: "Cloudinary CDN", icon: <SiCloudinary className="w-5 h-5 text-green-400" /> },
        { name: "Geolocator", icon: <MapPin className="w-5 h-5 text-emerald-400" /> },
        { name: "Google Maps", icon: <SiGooglemaps className="w-5 h-5 text-green-500" /> }
      ]
    }
  ];

  const metrics = [
    { 
      label: "Message Latency", 
      value: "<1s", 
      description: "Real-time chat performance",
      icon: <Zap className="w-6 h-6" />,
      color: "text-yellow-400"
    },
    { 
      label: "Image Optimization", 
      value: "70%", 
      description: "Bandwidth reduction",
      icon: <ImageIcon className="w-6 h-6" />,
      color: "text-blue-400"
    },
    { 
      label: "Products Per Load", 
      value: "50+", 
      description: "Efficient pagination",
      icon: <Database className="w-6 h-6" />,
      color: "text-purple-400"
    },
    { 
      label: "Compression", 
      value: "Auto", 
      description: "Image quality optimization",
      icon: <Gauge className="w-6 h-6" />,
      color: "text-green-400"
    }
  ];

  return (
    <section id="tech" className="py-20 px-6 bg-gray-800/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Modern Tech</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Scalable architecture designed for performance and real-time features
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${category.bgColor} border ${category.borderColor} hover:border-emerald-500/50 rounded-xl p-6 transition-all duration-300`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className={category.color}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              {/* Tech List */}
              <ul className="space-y-3">
                {category.techs.map((tech, idx) => (
                  <motion.li 
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-2xl p-8 backdrop-blur"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Performance Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className={`${metric.color} mb-3 flex justify-center`}
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {metric.icon}
                </motion.div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">{metric.value}</div>
                <div className="font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default TechStack;
