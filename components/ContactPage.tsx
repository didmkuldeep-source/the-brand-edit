import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Sparkles, MessageSquare, Calendar, ShieldCheck, Clock, User, Briefcase, Activity, CheckCircle2, Loader2, AlertTriangle, TrendingUp } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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
    formData.append('_subject', 'Full Contact Page Inquiry (With Location)');

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
    <div className="pt-32 pb-24 px-6 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Emergency Alert Banner */}
        <div className="mb-12 animate-pulse">
          <div className="bg-red-600/20 border border-red-500/50 p-4 rounded-2xl flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center animate-bounce">
                <AlertTriangle className="text-white" size={20} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-red-500">Emergency Brand Support</p>
                <h4 className="text-sm md:text-lg font-hindi font-black text-white">आज के 5 Surgical Slots में से सिर्फ 1 बचा है!</h4>
              </div>
            </div>
            <div className="px-4 py-2 bg-black/50 border border-red-500/30 rounded-xl">
              <p className="text-[10px] font-bold text-zinc-400 uppercase text-center mb-1">Offer Expires In</p>
              <p className="text-xl font-mono font-black text-red-500">{formatTime(timeLeft)}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16 animate-fade-in-up">
          <div>
            <span className="inline-flex items-center gap-2 py-1 px-4 bg-amber-500/10 text-amber-500 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              <Clock size={14} className="animate-pulse" /> 1 Slot Left - Booking Fast
            </span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
              Aapka <span className="text-amber-500 italic">Surgery</span> <br />
              <span className="text-white text-4xl md:text-7xl">Slot Book Karein.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-hindi max-w-xl">
              Varanasi ke har business ko Digital Surgery ki zaroorat hai. Aaj hi diagnosis start karein varna agla number 1 mahine baad aayega.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end pb-4">
            <div className="flex items-center gap-3 px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-red-600/5 animate-pulse"></div>
              <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center relative z-10"><Activity size={20} className="text-red-500" /></div>
              <div className="relative z-10"><p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Slots Remaining</p><p className="text-lg font-black text-red-500">01 / 05</p></div>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-3xl">
              <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center"><ShieldCheck size={20} className="text-amber-500" /></div>
              <div><p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Guaranteed</p><p className="text-lg font-black">Success Rate</p></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8 animate-slide-left">
            <div className="p-10 bg-zinc-900/50 border border-zinc-800 rounded-[3rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Sparkles size={120} /></div>
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Direct Access</h3>
              <div className="space-y-8">
                <a href="tel:6387230817" className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center group-hover/item:bg-amber-500 group-hover/item:text-black transition-all"><Phone size={24} /></div>
                  <div><p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Emergency Call</p><p className="text-xl font-black">+91 6387230817</p></div>
                </a>
                <a href="https://wa.me/916387230817" className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center group-hover/item:bg-green-500 group-hover/item:text-white transition-all"><MessageSquare size={24} /></div>
                  <div><p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">WhatsApp Surgery</p><p className="text-xl font-black">Chat with Surgeon</p></div>
                </a>
              </div>
            </div>
            
            <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-3xl">
               <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="text-amber-500" size={20} />
                  <p className="text-xs font-black uppercase tracking-widest text-amber-500">Live Traffic Alert</p>
               </div>
               <p className="text-xs text-zinc-400 font-hindi">Varanasi se 3 log abhi is page ko dekh rahe hain. Agla slot book hone hi wala hai!</p>
            </div>
          </div>

          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-[4rem] shadow-2xl min-h-[600px] flex flex-col justify-center relative">
              
              {/* Slot Progress Indicator */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xs px-6 py-3 bg-red-600 rounded-full shadow-2xl flex items-center justify-center gap-2 border-2 border-white/20">
                 <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Hurry! Last Slot Available</p>
              </div>

              {submitted ? (
                <div className="text-center space-y-8 animate-fade-in-up">
                  <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={48} className="text-amber-500" /></div>
                  <h3 className="text-4xl font-black uppercase italic text-white tracking-tighter">SLOT SECURED! <br/><span className="text-amber-500">READY TO OPERATE</span></h3>
                  <p className="text-zinc-400 font-hindi text-xl max-w-sm mx-auto leading-relaxed">Aapne last slot reserve kar liya hai. Hum 30 minutes ke andar aapko call karenge.</p>
                  <button onClick={() => setSubmitted(false)} className="text-xs font-black text-amber-500 uppercase tracking-[0.3em] border-b-2 border-amber-500/30 pb-2 hover:border-amber-500 transition-all">Submit Another Inquiry</button>
                </div>
              ) : (
                <>
                  <div className="mb-10 text-center">
                    <h3 className="text-3xl font-black uppercase mb-2">Final Step</h3>
                    <p className="text-zinc-500 font-hindi">Isse pehle ki ye slot koi aur le jaye, apni details bharein.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-4">Full Name *</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-4 text-zinc-600 group-focus-within:text-amber-500 transition-colors" size={18} /><input type="text" name="name" required placeholder="Aapka Naam" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 pl-12 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-4">Phone Number *</label>
                        <div className="relative group">
                          <Phone className="absolute left-4 top-4 text-zinc-600 group-focus-within:text-amber-500 transition-colors" size={18} /><input type="tel" name="phone" required value={phone} onChange={handlePhoneChange} placeholder="10 Digit Number" className={`w-full bg-zinc-950 border ${isValidPhone ? 'border-zinc-800' : 'border-red-500'} rounded-2xl px-5 py-4 pl-12 text-white focus:outline-none focus:border-amber-500 transition-colors`} />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-4">Location *</label>
                        <div className="relative group">
                          <MapPin className="absolute left-4 top-4 text-zinc-600 group-focus-within:text-amber-500 transition-colors" size={18} /><input type="text" name="location" required placeholder="City / Area" className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 pl-12 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-4">Business Type *</label>
                        <div className="relative group">
                          <Briefcase className="absolute left-4 top-4 text-zinc-600 group-focus-within:text-amber-500 transition-colors" size={18} /><input type="text" name="business" required placeholder="Retail, Real Estate, etc." className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl px-5 py-4 pl-12 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                        </div>
                      </div>
                    </div>
                    <button type="submit" disabled={loading || phone.length !== 10} className="w-full py-6 bg-red-600 text-white font-black rounded-[2rem] hover:bg-red-700 transition-all uppercase tracking-[0.2em] shadow-2xl shadow-red-500/20 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3">
                      {loading ? <Loader2 className="animate-spin" /> : "SECURE MY LAST SLOT"}
                    </button>
                    <p className="text-[10px] text-center text-zinc-600 uppercase tracking-widest font-bold">⚠️ Slot is held for 10 minutes only.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;