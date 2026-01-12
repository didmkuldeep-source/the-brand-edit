import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, User, Phone, Briefcase, Zap, Loader2, PhoneCall, Image as ImageIcon, Download, RefreshCw, Smartphone } from 'lucide-react';
import { createBrandChat, generateLogo } from '../services/geminiService';

interface Message {
  role: 'user' | 'model';
  text: string;
  image?: string;
}

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeadCaptured, setIsLeadCaptured] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [chatSession, setChatSession] = useState<any>(null);
  const [logoMode, setLogoMode] = useState(false);

  // Form States
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: ''
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, loading]);

  const handleStartChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length !== 10) return;
    setLoading(true);

    try {
      await fetch("https://formspree.io/f/didmkuldeep@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          source: "Floating Chatbot Lead",
          ...formData
        })
      });

      const session = createBrandChat(formData.name, formData.business, "Local Business");
      setChatSession(session);
      setIsLeadCaptured(true);
      setMessages([{ role: 'model', text: `Namaste **${formData.name}**! \n\nMain Rama Mundhra ka AI Assistant hoon. Aapke business **"${formData.business}"** ki digital surgery mein main kaise help kar sakta hoon?\n\n• Business growth tips chahiye?\n• Google Ads mein problem hai?\n• Ya fir naya **Logo** design karwana hai?` }]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !chatSession || loading) return;

    const userMessage = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      if (userMessage.toLowerCase().includes('logo') || logoMode) {
        setLogoMode(true);
        const logoUrl = await generateLogo(`Logo for ${formData.business}. ${userMessage}`);
        if (logoUrl) {
          setMessages(prev => [...prev, { 
            role: 'model', 
            text: `**LOGO SURGERY SUCCESSFUL!**\n\nMaine aapke brand ke liye ye logo design kiya hai. \n\n• Kya aapko ye pasand aaya?\n• Kuch changes chahiye (e.g. Color change)?\n• Isse download karke check karein.`,
            image: logoUrl 
          }]);
          setLogoMode(false);
        } else {
          setMessages(prev => [...prev, { role: 'model', text: `Maafi chahta hoon, logo operation fail ho gaya. Please try again with more details.` }]);
        }
      } else {
        const result = await chatSession.sendMessage({ message: userMessage });
        setMessages(prev => [...prev, { role: 'model', text: result.text || "Mafi chahta hoon, network error. Please try again." }]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogoRequest = () => {
    const prompt = `Aapke business "${formData.business}" ke liye main ek professional logo design kar sakta hoon.\n\n• Aapko kaunsa color pasand hai?\n• Style kaisa hona chahiye (Modern, Luxury, or Minimal)?\n\nDetails niche message box mein likhein!`;
    setMessages(prev => [...prev, { role: 'model', text: prompt }]);
    setLogoMode(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-amber-500 text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-float relative group"
        >
          <div className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-20"></div>
          <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {isOpen && (
        <div className="w-[350px] md:w-[450px] h-[650px] bg-zinc-950 border border-zinc-800 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          <div className="bg-zinc-900 p-6 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-500">
                <Zap size={20} className="fill-amber-500" />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-tighter text-white">AI Brand Surgeon</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Assistant to Rama Mundhra</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-950 scroll-smooth" ref={scrollRef}>
            {!isLeadCaptured ? (
              <div className="h-full flex flex-col justify-center">
                <div className="text-center mb-8">
                  <h4 className="text-xl font-black uppercase mb-2 italic">Surgery Lab</h4>
                  <p className="text-xs text-zinc-500 font-hindi">Pehle details bharein, fir diagnosis shuru hoga.</p>
                </div>
                <form onSubmit={handleStartChat} className="space-y-3">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={14} />
                    <input type="text" placeholder="Your Name" required className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 pl-10 text-xs text-white outline-none focus:border-amber-500 transition-colors" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={14} />
                    <input type="tel" placeholder="Mobile Number" required className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 pl-10 text-xs text-white outline-none focus:border-amber-500 transition-colors" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10)})} />
                  </div>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={14} />
                    <input type="text" placeholder="Business Type" required className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 pl-10 text-xs text-white outline-none focus:border-amber-500 transition-colors" value={formData.business} onChange={(e) => setFormData({...formData, business: e.target.value})} />
                  </div>
                  <button type="submit" disabled={loading || formData.phone.length !== 10} className="w-full py-4 bg-amber-500 text-black font-black rounded-xl uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-amber-400 transition-all disabled:opacity-50">
                    {loading ? <Loader2 size={16} className="animate-spin" /> : "Start Diagnosis"}
                  </button>
                </form>
                <div className="mt-8 p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl flex items-center gap-3">
                  <Smartphone className="text-amber-500" size={20} />
                  <p className="text-[9px] text-zinc-500 uppercase font-black leading-tight tracking-widest">Tip: Chrome menu mein jaakar 'Install App' par click karein for APK experience.</p>
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                    <div className={`max-w-[90%] p-5 rounded-[1.5rem] text-[13px] shadow-lg ${msg.role === 'user' ? 'bg-amber-500 text-black font-bold' : 'bg-zinc-900 text-zinc-100 border border-zinc-800 font-hindi'}`}>
                      <div className="prose prose-invert prose-xs max-w-none whitespace-pre-wrap leading-relaxed">
                        {msg.text}
                      </div>
                      {msg.image && (
                        <div className="mt-4 space-y-3">
                          <div className="rounded-xl overflow-hidden border border-zinc-800 bg-black shadow-inner">
                            <img src={msg.image} alt="Logo Result" className="w-full aspect-square object-contain" />
                          </div>
                          <div className="flex gap-2">
                            <a href={msg.image} download={`${formData.business}_Logo.png`} className="flex-1 py-3 bg-amber-500 text-black rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-amber-400 transition-all"><Download size={12} /> Save PNG</a>
                            <button onClick={() => { setLogoMode(true); setInputValue('I want some changes in this logo...'); }} className="flex-1 py-3 bg-zinc-800 text-white rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-700 transition-all"><RefreshCw size={12} /> Refine</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-center gap-3">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      </div>
                      {logoMode && <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Operating...</span>}
                    </div>
                  </div>
                )}

                {!loading && messages.length < 5 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    <button onClick={handleLogoRequest} className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-amber-500 hover:text-black transition-all"><ImageIcon size={14} /> Logo Maker</button>
                    <button onClick={() => setInputValue('Growth tips for Varanasi market')} className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:border-white hover:text-white transition-all"><Zap size={14} /> Growth Tips</button>
                  </div>
                )}
                
                {messages.length > 5 && (
                  <div className="p-5 bg-amber-500/10 border border-amber-500/20 rounded-3xl text-center space-y-3 mt-4">
                    <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Emergency Growth Call?</p>
                    <a href="tel:6387230817" className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-amber-500 text-black text-[10px] font-black rounded-xl uppercase tracking-widest hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/10">
                      <PhoneCall size={14} /> Talk to Rama Mundhra
                    </a>
                  </div>
                )}
              </>
            )}
          </div>

          {isLeadCaptured && (
            <div className="p-4 bg-zinc-900 border-t border-zinc-800">
              <form onSubmit={handleSendMessage} className="relative">
                <input type="text" placeholder={logoMode ? "Describe logo changes..." : "Type message..."} className={`w-full bg-zinc-950 border ${logoMode ? 'border-amber-500' : 'border-zinc-800'} rounded-full px-5 py-4 pr-14 text-xs text-white outline-none focus:border-amber-500 transition-all placeholder:text-zinc-600 shadow-inner`} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit" disabled={!inputValue.trim() || loading} className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 text-amber-500 disabled:text-zinc-700 transition-colors"><Send size={20} /></button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIChatBot;