import { Quote } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Sadman Shakib",
      department: "CSE, 4th Semester",
      image: "https://ui-avatars.com/api/?name=S+S&background=10b981&color=fff&size=128",
      quote: "Sold my old laptop within 2 days! The chat feature made negotiation super easy. Best platform for DIU students."
    },
    {
      name: "Md Sabbir Ahamed",
      department: "BBA, 6th Semester",
      image: "https://ui-avatars.com/api/?name=S+Ahmed&background=10b981&color=fff&size=128",
      quote: "Found affordable textbooks for all my courses. Saved over 5000 taka this semester. Highly recommend!"
    },
    {
      name: "Sakib Mahmud Rahat",
      department: "EEE, 3rd Semester",
      image: "https://ui-avatars.com/api/?name=S+R&background=10b981&color=fff&size=128",
      quote: "Love the real-time notifications. Never miss a message from buyers. Simple, fast, and trusted marketplace."
    }

  ];

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="text-emerald-400">Students</span> Say
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from DIU students using the platform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-emerald-500/50 transition-all"
            >
              <Quote className="w-8 h-8 text-emerald-400 mb-4" />
              <p className="text-gray-300 leading-relaxed mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.department}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
