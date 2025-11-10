import { Github, Linkedin, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-emerald-500">DIU</span> Recycle
            </div>
            <p className="text-gray-400">
              Campus marketplace built with Flutter & Firebase. Promoting sustainability at Daffodil International University.
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            
   
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-500 border border-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-500 border border-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-500 border border-gray-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© 2025 DIU Recycle. Built with ❤️ for sustainability.</p>
          <p className="text-sm mt-2">Developed by Syed Sabbir Ahmed • Computer Science Graduate • BitStream Startup Co-founder</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
