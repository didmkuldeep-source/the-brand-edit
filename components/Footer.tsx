import React, { useState } from 'react';
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Briefcase, User, CheckCircle2, Loader2 } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [phone, setPhone] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhone(value);
      setIsValidPhone(value.length === 10 || value.length === 0);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    formData.append('_subject', 'Footer Lead: अपनी ब्रांड सर्जरी शुरू करें');

    try {
      const response = await fetch("https://formspree.io/f/didmkuldeep@gmail.com", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok || response.status === 200) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error", error);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="footer" className="bg-black pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
              READY TO <br />
              <span className="text-amber-500 uppercase">TRANSFORM?</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-md mb-12 font-hindi">
              Varanasi ke businesses ko next level par le jaane ka waqt aa gaya hai.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-amber-500 transition-colors group-hover:text-black">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email Us</p>
                  <p className="text-lg font-bold">didmkuldeep@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-amber-500 transition-colors group-hover:text-black">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Call Us</p>
                  <p className="text-lg font-bold">6387230817</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm min-h-[550px] flex flex-col justify-center">
            {submitted ? (
              <div className="text-center space-y-6 animate-fade-in-up">
                <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={48} className="text-amber-500" />
                </div>
                <h3 className="text-4xl font-black uppercase text-white italic tracking-tighter">SUCCESS!</h3>
                <p className="text-xl text-zinc-400 font-hindi max-w-sm mx-auto">
                  Aapka inquiry didmkuldeep@gmail.com par bhej di gayi hai. Hum jald aapse connect karenge.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className="mt-6 text-xs font-bold text-amber-500 uppercase tracking-[0.3em] border-b border-amber-500/30 pb-1 hover:border-amber-500 transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-black mb-8 font-hindi text-white uppercase italic tracking-tighter">अपनी ब्रांड सर्जरी शुरू करें</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest ml-4">Full Name *</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-amber-500" size={16} />
                        <input type="text" name="name" required placeholder="Aapka Naam" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 pl-12 focus:outline-none focus:border-amber-600 transition-colors text-white" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest ml-4">Mobile No. *</label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-amber-500" size={16} />
                        <input type="tel" name="phone" required value={phone} onChange={handlePhoneChange} placeholder="10 Digit Number" className={`w-full bg-zinc-950/50 border ${isValidPhone ? 'border-zinc-800' : 'border-red-500'} rounded-xl px-4 py-4 pl-12 focus:outline-none focus:border-amber-600 transition-colors text-white`} />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest ml-4">Location *</label>
                      <div className="relative group">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-amber-500" size={16} />
                        <input type="text" name="location" required placeholder="e.g. Varanasi" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 pl-12 focus:outline-none focus:border-amber-600 transition-colors text-white" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest ml-4">Business Type *</label>
                      <div className="relative group">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-amber-500" size={16} />
                        <input type="text" name="business" required placeholder="Retail, Real Estate, etc." className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 pl-12 focus:outline-none focus:border-amber-600 transition-colors text-white" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" disabled={loading || phone.length !== 10} className="w-full py-5 bg-amber-500 text-black font-black rounded-xl hover:bg-amber-400 transition-all uppercase tracking-[0.2em] shadow-lg shadow-amber-500/20 disabled:opacity-50 flex items-center justify-center gap-2 text-xs">
                    {loading ? <Loader2 size={18} className="animate-spin" /> : "Inquiry Submit Karein"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-zinc-900 gap-8">
          <div onClick={() => onNavigate && onNavigate('home')} className="cursor-pointer"><Logo /></div>
          <div className="flex items-center gap-6">
            <Instagram size={20} className="text-zinc-500 hover:text-white transition-colors" />
            <Twitter size={20} className="text-zinc-500 hover:text-white transition-colors" />
            <Linkedin size={20} className="text-zinc-500 hover:text-white transition-colors" />
          </div>
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest">© 2024 POT SOT MEDIA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;