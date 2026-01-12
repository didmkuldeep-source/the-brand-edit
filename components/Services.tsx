
import React from 'react';
import { Palette, Camera, Code, Megaphone, Zap, Globe, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Palette className="text-amber-500" size={32} />,
    title: "Brand Strategy",
    description: "Re-engineering your brand identity to attract the high-value customers you deserve. Hum aapke brand ka naya DNA design karte hain."
  },
  {
    icon: <Camera className="text-amber-500" size={32} />,
    title: "Content Creation",
    description: "High-end visual surgery for Instagram and YouTube. We cut out what doesn't work and inject creativity that converts."
  },
  {
    icon: <Globe className="text-amber-500" size={32} />,
    title: "Digital Dominance",
    description: "Dominating local search and Google Maps. Making your store the first result, every time. Aapka business Varanasi ka top result hoga."
  },
  {
    icon: <Megaphone className="text-amber-500" size={32} />,
    title: "Lead Generation",
    description: "Precision-targeted ads that inject new customers directly into your sales funnel. ROI-focused marketing jo results dikhata hai."
  },
  {
    icon: <Code className="text-amber-500" size={32} />,
    title: "Sales Automation",
    description: "Setting up 24/7 digital systems so your business makes money while you sleep. Manual process ko digitalize karein."
  },
  {
    icon: <Zap className="text-amber-500" size={32} />,
    title: "Performance Review",
    description: "Transparent metrics and constant optimization. We don't stop until you grow. Har surgery ka feedback aur growth report."
  }
];

interface ServicesProps {
  onContactOpen?: () => void;
  onMoreServices?: () => void;
}

const Services: React.FC<ServicesProps> = ({ onContactOpen, onMoreServices }) => {
  return (
    <section id="services" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 animate-fade-in-up">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">WHAT WE DO.</h2>
            <p className="text-xl text-zinc-400">Stopping the struggle. Starting the growth. We operate on traditional brands to make them digital leaders.</p>
          </div>
          <div className="hidden md:block pb-2 animate-float">
            <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-xs">
              <span>Our Expertise</span>
              <div className="w-12 h-px bg-amber-500"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-zinc-900 border border-zinc-800 rounded-[2rem] hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={onMoreServices}
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300 origin-left animate-float" style={{ animationDelay: `${index * 200}ms` }}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-500 transition-colors cursor-pointer">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center animate-fade-in-up">
          <button 
            onClick={onMoreServices || onContactOpen}
            className="flex items-center gap-3 px-12 py-5 bg-amber-500 text-black rounded-full font-black hover:bg-amber-400 transition-all shadow-xl group uppercase tracking-widest active:scale-95"
          >
            <Sparkles className="group-hover:animate-pulse" />
            VIEW ALL SURGICAL PACKAGES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
