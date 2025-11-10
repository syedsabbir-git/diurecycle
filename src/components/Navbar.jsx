import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/70 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <div className="text-2xl font-bold cursor-pointer">
              <span className="text-emerald-500">DIU</span> Recycle
            </div>
          </Link>
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
