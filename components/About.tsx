
import React from 'react';
import { Award, GraduationCap, Briefcase, Zap, Sparkles } from 'lucide-react';

const ABOUT_IMAGE = "https://lh3.googleusercontent.com/d/10IJ8_85ywJVedSTcBPNkWgYTYgcRvHMo";

interface AboutProps {
  onContactOpen?: () => void;
}

const About: React.FC<AboutProps> = ({ onContactOpen }) => {
  return (
    <section id="about" className="py-32 px-6 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Image Side */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-amber-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-900 aspect-[3/4.5] shadow-2xl">
              <img 
                src={ABOUT_IMAGE} 
                alt="Rama Mundhra Professional Portrait" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                <div className="flex gap-6">
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-amber-500 leading-none">5+</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold mt-2">Years Exp</span>
                  </div>
                  <div className="w-px h-12 bg-zinc-800"></div>
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-amber-500 leading-none">100+</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold mt-2">Brands</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs">The Expert Behind The Brand</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">About Me</h2>
              <div className="h-1.5 w-24 bg-amber-500 rounded-full"></div>
            </div>

            <p className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight italic border-l-4 border-amber-500 pl-6">
              "Digital branding ki duniya mein har idea ko ek surgical precision chahiye hoti hai — aur wahi precision main aapke brand ko deta hoon."
            </p>

            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-medium">
              <p>
                Mera naam <span className="text-white font-bold">Rama Mundhra</span> hai, aur pichle 5+ years se main brands aur entrepreneurs ki help kar raha hoon unka real digital potential unlock karne mein. 
              </p>
              
              <p>
                Main sirf ek marketing expert nahi hoon, balki main aapke brand ka <span className="text-amber-500 font-semibold underline decoration-amber-500/30 underline-offset-4">Digital Growth Surgeon</span> hoon. Google & Meta Certified hone ke saath-saath, as a Corporate Trainer aur Consultant, maine dekha hai ki kaise sahi digital strategy business ki puri kismat badal sakti hai.
              </p>

              <p>
                SEO ho ya AI-powered marketing solutions, mera approach hamesha data-driven hota hai. Main traditional businesses ko modern digital leaders mein convert karne mein believe karta hoon. Mera mission hai un gap ko khatam karna jo aapke brand aur aapke ideal customers ke beech mein hain. Chalo milke aapke business ko growth ka naya injection dete hain!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              {[
                { icon: <Award size={20}/>, text: "Google & Meta Certified" },
                { icon: <Briefcase size={20}/>, text: "Corporate Trainer" },
                { icon: <GraduationCap size={20}/>, text: "Freelance Consultant" },
                { icon: <Zap size={20}/>, text: "AI Marketing Specialist" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:bg-zinc-900 transition-colors">
                  <div className="text-amber-500">{item.icon}</div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <button 
                onClick={onContactOpen}
                className="flex items-center gap-3 px-8 py-4 bg-amber-500 text-black rounded-full font-black hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 group"
              >
                <Sparkles className="group-hover:rotate-12 transition-transform" />
                GET FREE EXPERT ADVICE
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
