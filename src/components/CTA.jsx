import { Download, ExternalLink } from 'lucide-react';

function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        
        <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-2xl p-12 text-center">
          
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-emerald-300 font-medium">Beta Testing Live</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Trading?
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join 50+ DIU students already using the platform. Download the beta, list your items, and start saving money today.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-105">
              <Download className="w-5 h-5" />
              Download on Play Store
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 border border-gray-700 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all">
              <ExternalLink className="w-5 h-5" />
              View Demo
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;
