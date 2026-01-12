import React, { useState } from 'react';
import { X, Send, Sparkles, Loader2, RefreshCw, Zap, CheckCircle2 } from 'lucide-react';
import { getBrandStrategy } from '../services/geminiService';
import { AIResponse } from '../types';

interface AISidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AISidebar: React.FC<AISidebarProps> = ({ isOpen, onClose }) => {
  const [brandName, setBrandName] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !industry || !location || !userName) return;
    setLoading(true);

    try {
      await fetch("https://formspree.io/f/didmkuldeep@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          source: "AI Sidebar Surgery Lab",
          name: userName,
          brand: brandName,
          industry: industry,
          location: location
        })
      });
    } catch (err) { console.error(err); }

    const data = await getBrandStrategy(brandName, industry, location, userName);
    setResult(data);
    setLoading(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[60]" onClick={onClose} />
      )}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-black border-l border-zinc-800 z-[70] transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-10 h-full flex flex-col">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-3">
              <Zap className="text-amber-500 fill-amber-500" size={18} />
              <h2 className="text-lg font-black uppercase tracking-tighter italic">Surgery Lab</h2>
            </div>
            <button onClick={onClose} className="text-zinc-600 hover:text-white transition-colors">
              <X size={28} />
            </button>
          </div>

          {!result ? (
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-10">
                <h3 className="text-4xl font-black mb-4 uppercase leading-none">AI Audit.</h3>
                <p className="text-zinc-500 text-sm font-hindi">AI Surgeon se immediate actionable steps paayein.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} required className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-amber-500" />
                <input type="text" placeholder="Brand Name" value={brandName} onChange={(e) => setBrandName(e.target.value)} required className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-amber-500" />
                <input type="text" placeholder="City" value={location} onChange={(e) => setLocation(e.target.value)} required className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-amber-500" />
                <input type="text" placeholder="Industry" value={industry} onChange={(e) => setIndustry(e.target.value)} required className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-amber-500" />
                <button type="submit" disabled={loading} className="w-full bg-amber-500 text-black rounded-2xl py-5 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/10">
                  {loading ? <Loader2 size={20} className="animate-spin" /> : <>Start Analysis <Send size={16} /></>}
                </button>
              </form>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto pr-2 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6 p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                <CheckCircle2 size={20} className="text-amber-500" />
                <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Lead Captured & Analysis Ready</span>
              </div>
              
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-8">
                <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-4">Diagnosis</h4>
                <p className="text-xl text-white font-black italic uppercase tracking-tighter leading-tight">"{result.strategy}"</p>
              </div>
              <div className="space-y-4">
                {result.concepts.map((c, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                    <div className="flex-shrink-0 w-10 h-10 bg-zinc-800 flex items-center justify-center rounded-xl text-xs font-black text-amber-500">0{i + 1}</div>
                    <p className="text-zinc-400 text-sm font-hindi leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => setResult(null)} className="w-full mt-12 flex items-center justify-center gap-3 text-zinc-500 hover:text-white py-5 border border-zinc-800 rounded-2xl font-black uppercase text-[10px] tracking-widest">
                <RefreshCw size={16} /> New Surgery
              </button>
            </div>
          )}
          <div className="mt-auto pt-8 border-t border-zinc-900 text-center">
            <p className="text-[8px] text-zinc-700 uppercase tracking-[0.4em] font-black">Rama Mundhra AI Labs</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISidebar;