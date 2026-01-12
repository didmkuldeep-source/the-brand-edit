
import React from 'react';
import { 
  Palette, Camera, Globe, Megaphone, Code, Zap, 
  ArrowRight, CheckCircle2, Sparkles, Activity, ShieldCheck, 
  Search, Instagram, Youtube, MapPin
} from 'lucide-react';

interface ServicesPageProps {
  onContactOpen?: () => void;
}

const detailedServices = [
  {
    id: "identity",
    icon: <Palette className="text-amber-500" size={40} />,
    title: "Brand DNA Re-Engineering",
    hindi: "ब्रांड की पहचान का नया जन्म",
    description: "Your logo is not your brand. We build complete visual identities—colors, typography, and personality—that speak to high-paying clients.",
    features: ["Custom Logo & Brand Book", "Visual Guidelines", "Brand Voice Design", "Packaging & Print Design"],
    color: "bg-amber-500/10"
  },
  {
    id: "content",
    icon: <Camera className="text-amber-500" size={40} />,
    title: "Viral Visual Surgery",
    hindi: "कंटेंट जो वायरल हो",
    description: "Content for the sake of posting is a waste. We create strategic reels, photos, and stories that stop the scroll and build trust.",
    features: ["Cinematic Reel Production", "Product Photography", "YouTube Scripting", "UGC Content Strategy"],
    color: "bg-amber-500/10"
  },
  {
    id: "seo",
    icon: <Globe className="text-amber-500" size={40} />,
    title: "Local Market Domination",
    hindi: "वाराणसी के टॉप बिज़नेस बनें",
    description: "Make sure that when someone searches for your service in Varanasi, your brand is the only one they see. Global reach, local focus.",
    features: ["GMB Optimization", "Local SEO Surgery", "Google Maps Ads", "Review Management"],
    color: "bg-amber-500/10"
  },
  {
    id: "ads",
    icon: <Megaphone className="text-amber-500" size={40} />,
    title: "Precision Lead Injection",
    hindi: "कस्टमर्स की डायरेक्ट एंट्री",
    description: "Paid ads are like surgery—one wrong cut and you bleed money. We run precision-targeted Meta & Google ads focused purely on ROI.",
    features: ["Meta Ads (FB/IG)", "Google Search Ads", "Retargeting Funnels", "Conversion Tracking"],
    color: "bg-amber-500/10"
  },
  {
    id: "automation",
    icon: <Code className="text-amber-500" size={40} />,
    title: "Digital Nervous System",
    hindi: "बिज़नेस ऑटोमेशन का डोज़",
    description: "Stop working for your business; make it work for you. We build landing pages and automation systems that handle leads 24/7.",
    features: ["High-Converting Landing Pages", "CRM Integration", "WhatsApp Automation", "AI Chatbot Setup"],
    color: "bg-amber-500/10"
  },
  {
    id: "analytics",
    icon: <Zap className="text-amber-500" size={40} />,
    title: "Performance Monitoring",
    hindi: "ग्रोथ रिपोर्ट और फीडबैक",
    description: "Real-time diagnosis of your brand's health. We provide monthly growth reports and constant optimizations to keep you ahead.",
    features: ["Monthly ROI Reports", "Competitor Analysis", "Website Health Check", "Strategy Pivot Planning"],
    color: "bg-amber-500/10"
  }
];

const surgeryProcess = [
  { step: "01", title: "Consultation", desc: "Aapka pain point samajhna.", icon: <Activity size={20} /> },
  { step: "02", title: "Diagnosis", desc: "Competitor aur market audit.", icon: <Search size={20} /> },
  { step: "03", title: "Surgery", desc: "Execution of the strategy.", icon: <Code size={20} /> },
  { step: "04", title: "Recovery", desc: "Performance tracking aur growth.", icon: <Zap size={20} /> }
];

const ServicesPage: React.FC<ServicesPageProps> = ({ onContactOpen }) => {
  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-24 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 py-1 px-4 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            <Sparkles size={14} /> Comprehensive Surgical Packages
          </span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
            Digital <span className="text-amber-500">Solutions</span> <br />
            For Modern Brands.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-hindi">
            Ek perfect digital identity ke liye hum har service ko surgical precision ke saath deliver karte hain.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {detailedServices.map((service, i) => (
            <div 
              key={service.id}
              className={`group p-8 md:p-10 border border-zinc-800 rounded-[3rem] transition-all duration-500 hover:border-amber-500/40 relative overflow-hidden animate-fade-in-up`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2 font-hindi">{service.hindi}</h3>
                <h2 className="text-2xl font-black mb-4 uppercase">{service.title}</h2>
                <p className="text-zinc-500 text-sm mb-8 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs font-bold text-zinc-300 uppercase tracking-wide">
                      <CheckCircle2 size={14} className="text-amber-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                <Sparkles size={100} />
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-32 bg-zinc-900/40 border border-zinc-800 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">The Surgery <br /> <span className="text-amber-500">Process.</span></h2>
              <p className="text-xl text-zinc-400 mb-12 font-hindi leading-relaxed">
                Kaam karne ka tarika waisa hi hai jaise koi doctor patient ko treat karta hai. No shortcuts, only results.
              </p>
              <button 
                onClick={onContactOpen}
                className="px-10 py-5 bg-amber-500 text-black font-black rounded-full uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95 flex items-center gap-3"
              >
                Start My Process <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {surgeryProcess.map((item, i) => (
                <div key={i} className="p-8 bg-zinc-950/50 border border-zinc-800 rounded-3xl hover:bg-zinc-900 transition-colors group">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-3xl font-black text-amber-500/20 group-hover:text-amber-500 transition-colors">{item.step}</span>
                    <div className="text-amber-500">{item.icon}</div>
                  </div>
                  <h4 className="text-xl font-bold mb-2 uppercase">{item.title}</h4>
                  <p className="text-zinc-500 text-sm font-hindi">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Surgery Section */}
        <div className="text-center mb-32">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-16">Why Choose <span className="text-amber-500">Brand Surgery?</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto border border-zinc-800">
                <ShieldCheck className="text-amber-500" />
              </div>
              <h4 className="text-xl font-bold uppercase">Safe Extraction</h4>
              <p className="text-zinc-500 text-sm">Purane, outdated ideas ko extract karte hain bina business ki core values ko nuksan pahunchaye.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto border border-zinc-800">
                <Activity className="text-amber-500" />
              </div>
              <h4 className="text-xl font-bold uppercase">Rapid Recovery</h4>
              <p className="text-zinc-500 text-sm">Humare methods slow nahi hain. 3-6 months mein aapko tangible growth results dikhne lagte hain.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto border border-zinc-800">
                <Zap className="text-amber-500" />
              </div>
              <h4 className="text-xl font-bold uppercase">Modern Tech</h4>
              <p className="text-zinc-500 text-sm">AI, Automation aur Data-Science ka istemal karke aapka business 2025 ke liye ready hota hai.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="p-12 md:p-24 bg-zinc-900 border border-zinc-800 rounded-[4rem] text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black mb-10 uppercase tracking-tighter leading-none">
              Aapka Business Kab <br /> <span className="text-amber-500">Operate</span> Hoga?
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={onContactOpen}
                className="px-12 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl active:scale-95"
              >
                Book Appointment
              </button>
              <a href="tel:6387230817" className="px-12 py-5 bg-zinc-800 text-white rounded-full font-black uppercase tracking-widest hover:bg-zinc-700 transition-all active:scale-95 flex items-center gap-3">
                <MapPin size={18} className="text-amber-500" /> Call Surgeon
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
