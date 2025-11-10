import { Download, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/70 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <div className="text-2xl font-bold cursor-pointer">
              <span className="text-emerald-500">DIU</span> Recycle
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-emerald-400 transition-colors">
              Features
            </a>
            <a href="#tech" className="hover:text-emerald-400 transition-colors">
              Tech Stack
            </a>
            <Link to="/terms" className="hover:text-emerald-400 transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-emerald-400 transition-colors">
              Privacy
            </Link>
            <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Beta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-800 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                <a
                  href="#features"
                  onClick={closeMenu}
                  className="block py-2 hover:text-emerald-400 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#tech"
                  onClick={closeMenu}
                  className="block py-2 hover:text-emerald-400 transition-colors"
                >
                  Tech Stack
                </a>
                <Link
                  to="/terms"
                  onClick={closeMenu}
                  className="block py-2 hover:text-emerald-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/privacy"
                  onClick={closeMenu}
                  className="block py-2 hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 mt-2">
                  <Download className="w-4 h-4" />
                  Download Beta
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
