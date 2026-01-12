
import React from 'react';
import { Award, GraduationCap, Briefcase, Zap, Sparkles, CheckCircle2, Target, Heart, ShieldCheck } from 'lucide-react';

const ABOUT_IMAGE = "https://lh3.googleusercontent.com/d/10IJ8_85ywJVedSTcBPNkWgYTYgcRvHMo";

interface AboutPageProps {
  onContactOpen?: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onContactOpen }) => {
  return (
    <div className="pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="animate-slide-left">
            <span className="inline-block py-1 px-3 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Who is Rama Mundhra?
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 uppercase leading-[0.9]">
              Your Digital <br />
              <span className="text-amber-500">Growth Surgeon.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-medium mb-10 leading-relaxed font-hindi">
              Varanasi ke har business ko ek digital pehchan dilana mera mission hai. Main sirf ads nahi chalata, main aapke brand ko rejuvenate karta hoon.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onContactOpen}
                className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all shadow-xl active:scale-95"
              >
                Book My Diagnosis
              </button>
              <div className="flex items-center gap-3 px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-full">
                <CheckCircle2 className="text-amber-500" size={20} />
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Google & Meta Certified</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up">
            <div className="absolute -inset-10 bg-amber-500/5 rounded-full blur-[100px] animate-pulse"></div>
            <div className="relative rounded-[3rem] overflow-hidden border border-zinc-800 aspect-[4/5] shadow-2xl animate-float">
              <img 
                src={ABOUT_IMAGE} 
                alt="Rama Mundhra" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>

        {/* The Story Section */}
        <div className="mb-32 bg-zinc-900/40 border border-zinc-800 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
             <Sparkles size={200} />
          </div>
          
          <div className="max-w-4xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">My Journey & Vision</h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                Pichle <span className="text-white font-bold">5 saalon</span> se marketing ki duniya mein rehte hue, maine dekha hai ki Varanasi jaise shehron mein kitna potential hai, lekin sahi digital direction na hone ki wajah se kayi brands peeche reh jate hain.
              </p>
              <p>
                Main as a <span className="text-white font-bold italic">Corporate Trainer and Consultant</span> kaam karta hoon, jahan mera main focus hota hai AI-driven automation aur ROI-focused branding. Maine <span className="text-white font-bold">100+ brands</span> ke saath kaam karke ye seekha hai ki marketing sirf paisa kharch karna nahi, balki sahi jagah invest karna hai.
              </p>
              <p>
                "The Brand Edit" mera wo sapna hai jahan main traditional businesses ko modern, high-converting digital entities mein badalta hoon. Main believe karta hoon ki har brand ka ek dil hota hai, aur use digital surgeon ki tarah treat karke hi revive kiya ja sakta hai.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Me Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-amber-500/30 transition-all group">
            <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="text-amber-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Precision Targeting</h3>
            <p className="text-zinc-500 text-sm">Hum andhere mein teer nahi chalate. Data aur AI ka use karke sirf aapke ideal customers tak pahunche hain.</p>
          </div>
          
          <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-amber-500/30 transition-all group">
            <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-amber-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Transparency First</h3>
            <p className="text-zinc-500 text-sm">Reports jo samajh aayein. Har kharch kiye gaye rupaye ka calculation aur result hum share karte hain.</p>
          </div>

          <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-amber-500/30 transition-all group">
            <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Heart className="text-amber-500" />
            </div>
            <h3 className="text-xl font-bold mb-4">Personal Connection</h3>
            <p className="text-zinc-500 text-sm">Main aapke business ko apna business samajh ke kaam karta hoon. Your growth is my reputation.</p>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase">My Specialties</h2>
          <div className="h-1.5 w-24 bg-amber-500 rounded-full mx-auto mb-12"></div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['SEO Surgeon', 'Meta Ads Specialist', 'Google Ads Expert', 'Brand Identity Designer', 'Content strategist', 'AI Growth Hacker', 'Corporate Trainer'].map((skill, i) => (
              <span key={i} className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-amber-500 hover:border-amber-500/50 transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative p-12 md:p-24 bg-gradient-to-br from-amber-500 to-amber-600 rounded-[4rem] text-center text-black overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">Aapka Brand Agla Digital <br /> Leader Ban Sakta Hai.</h2>
            <p className="text-lg md:text-xl font-bold mb-12 opacity-90 max-w-2xl mx-auto">Chaliye sath milkar aapke vision ko ek reality banate hain. Consultation is free, transformation is guaranteed.</p>
            <button 
              onClick={onContactOpen}
              className="px-12 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl active:scale-95"
            >
              Start The Conversation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
