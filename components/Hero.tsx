import React, { useState } from 'react';
import { ArrowRight, Zap, User, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';

const ABOUT_IMAGE = "https://lh3.googleusercontent.com/d/10IJ8_85ywJVedSTcBPNkWgYTYgcRvHMo";

interface HeroProps {
  onContactOpen?: () => void;
  onServicesClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactOpen, onServicesClick }) => {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.append('_subject', 'Hero Section Brand Audit Request');
    
    try {
      await fetch("https://formspree.io/f/didmkuldeep@gmail.com", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 px-6 bg-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-amber-500 font-black text-[10px] tracking-[0.2em] uppercase">
            <Zap size={14} className="fill-amber-500 animate-pulse" /> Varanasi's No. 1 Brand Surgeon
          </div>
          
          <h1 className="text-7xl md:text-9xl lg:text-[140px] font-black leading-[0.75] tracking-tighter uppercase italic">
            BRAND <br />
            <span className="text-amber-500 not-italic">SURGERY.</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 max-w-xl font-hindi border-l-4 border-amber-500 pl-6 leading-tight">
            Traditional businesses ko digital powerhouses mein badalne ka waqt aa gaya hai. Hum diagnose karte hain, hum operate karte hain, hum grow karte hain.
          </p>

          <div className="flex flex-wrap gap-5 pt-6">
            <button 
              onClick={onServicesClick} 
              className="px-10 py-5 bg-amber-500 text-black rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-amber-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(245,158,11,0.3)] flex items-center gap-3"
            >
              Start Operation <ArrowRight size={18} />
            </button>
            <button 
              onClick={onContactOpen} 
              className="px-10 py-5 bg-transparent border-2 border-zinc-800 text-white rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all active:scale-95"
            >
              Free Diagnosis
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 animate-fade-in-up [animation-delay:200ms]">
          <div className="bg-zinc-900/60 border border-zinc-800/50 p-8 md:p-10 rounded-[3rem] backdrop-blur-3xl shadow-2xl relative">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
            
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-fade-in-up">
                <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
                  <CheckCircle2 size={40} className="text-amber-500" />
                </div>
                <h3 className="text-3xl font-black uppercase italic text-white">RECEIVED!</h3>
                <p className="text-zinc-400 font-hindi">Hum jald aapse connect karenge diagnosis report ke saath.</p>
                <button onClick={() => setSubmitted(false)} className="text-[10px] font-black text-amber-500 uppercase tracking-widest border-b border-amber-500/30 pb-1 mt-4 hover:border-amber-500 transition-colors">New Request</button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-500 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform">
                    <img src={ABOUT_IMAGE} alt="Rama Mundhra" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-tighter text-white text-lg leading-none">Rama Mundhra</h4>
                    <p className="text-[10px] text-amber-500 font-black uppercase tracking-[0.3em] mt-1.5 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> Digital Surgeon
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-zinc-600 uppercase tracking-widest ml-2">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-amber-500 transition-colors" size={16} />
                      <input type="text" name="name" required placeholder="Business Owner Name" className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-5 py-4 pl-14 text-white focus:border-amber-500 outline-none text-sm transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-zinc-600 uppercase tracking-widest ml-2">Phone No.</label>
                    <div className="relative group">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-amber-500 transition-colors" size={16} />
                      <input type="tel" name="phone" required value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} placeholder="10 Digit Mobile" className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-5 py-4 pl-14 text-white focus:border-amber-500 outline-none text-sm transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-zinc-600 uppercase tracking-widest ml-2">Business Location</label>
                    <div className="relative group">
                      <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-amber-500 transition-colors" size={16} />
                      <input type="text" name="location" required placeholder="Varanasi or Other City" className="w-full bg-black/50 border border-zinc-800 rounded-2xl px-5 py-4 pl-14 text-white focus:border-amber-500 outline-none text-sm transition-colors" />
                    </div>
                  </div>
                  <button type="submit" disabled={loading || phone.length !== 10} className="w-full py-5 bg-white text-black font-black rounded-2xl uppercase tracking-[0.2em] text-[10px] hover:bg-amber-500 transition-all flex items-center justify-center gap-2 mt-4 active:scale-95 disabled:opacity-50">
                    {loading ? <Loader2 size={16} className="animate-spin" /> : "SCHEDULE MY SURGERY"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;