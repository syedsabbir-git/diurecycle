import { Leaf, Users, Package, TrendingUp } from 'lucide-react';

function Impact() {
  const impacts = [
    {
      icon: <Package className="w-8 h-8" />,
      value: "200+",
      label: "Products Reused",
      description: "Saved from landfills"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "50+",
      label: "Active Users",
      description: "Growing community"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "95%",
      label: "Success Rate",
      description: "Completed trades"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      value: "1.2 tons",
      label: "Waste Reduced",
      description: "Environmental impact"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Making an <span className="text-emerald-400">Impact</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every purchase on DIU Recycle contributes to a sustainable campus
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-8 text-center hover:border-emerald-500/50 transition-all"
            >
              <div className="text-emerald-400 mb-4 flex justify-center">
                {impact.icon}
              </div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">{impact.value}</div>
              <div className="font-semibold mb-1">{impact.label}</div>
              <div className="text-sm text-gray-500">{impact.description}</div>
            </div>
          ))}
        </div>

        {/* Additional Message */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Join us in building a sustainable future for DIU. Every product reused is a step towards reducing waste and promoting conscious consumption within our campus community.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Impact;
