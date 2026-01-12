import React, { useState, useRef } from 'react';
import { Sparkles, Loader2, RefreshCw, Target, ShieldCheck, Download, Activity, MapPin, User, CheckCircle2, Phone, Mail, Globe } from 'lucide-react';
import { getBrandStrategy } from '../services/geminiService';
import { AIResponse } from '../types';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface BrandDiagnosisSectionProps {
  onContactOpen?: () => void;
}

const BrandDiagnosisSection: React.FC<BrandDiagnosisSectionProps> = ({ onContactOpen }) => {
  const [brandName, setBrandName] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResponse | null>(null);
  const reportRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !industry || !location || !userName) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('name', userName);
      formData.append('brand', brandName);
      formData.append('location', location);
      formData.append('industry', industry);
      formData.append('_subject', 'AI Diagnosis Lead Generated');

      await fetch("https://formspree.io/f/didmkuldeep@gmail.com", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
    } catch (err) { 
      console.error("Lead capture failed", err); 
    }

    const data = await getBrandStrategy(brandName, industry, location, userName);
    setResult(data);
    setLoading(false);
  };

  const downloadPDF = async () => {
    if (!reportRef.current) return;
    const element = reportRef.current;
    
    // Preparation for capture: Make sure it's temporarily visible off-screen
    const originalStyle = element.getAttribute('style') || '';
    element.style.display = 'block';
    element.style.position = 'fixed';
    element.style.left = '-10000px';
    element.style.top = '0';
    element.style.width = '800px';
    element.style.height = 'auto';

    try {
      const canvas = await html2canvas(element, { 
        scale: 2, 
        backgroundColor: '#000000', 
        useCORS: true,
        logging: false 
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${brandName}_Surgical_Report.pdf`);
    } catch (err) { 
      console.error("PDF Download error", err); 
    } finally {
      element.setAttribute('style', originalStyle);
      element.style.display = 'none';
    }
  };

  return (
    <section className="py-24 px-6 bg-black relative" id="brand-diagnosis">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-[10px] font-black uppercase tracking-widest">
            <Sparkles size={12} className="animate-pulse" /> Free Growth Roadmap
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">GET YOUR <span className="text-amber-500">PLAN.</span></h2>
          <p className="text-zinc-400 max-w-xl mx-auto font-hindi text-lg">Apne business ke liye details bharein aur strategy paayein.</p>
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800 rounded-[3rem] overflow-hidden min-h-[500px] backdrop-blur-3xl shadow-2xl">
          {!result ? (
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-14 border-r border-zinc-800/50">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-amber-500" size={16} />
                    <input type="text" placeholder="Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} required className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 pl-12 text-white outline-none focus:border-amber-500 transition-all" />
                  </div>
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-amber-500" size={16} />
                    <input type="text" placeholder="Location / City" value={location} onChange={(e) => setLocation(e.target.value)} required className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 pl-12 text-white outline-none focus:border-amber-500 transition-all" />
                  </div>
                  <div className="relative group">
                    <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-amber-500" size={16} />
                    <input type="text" placeholder="Business Name" value={brandName} onChange={(e) => setBrandName(e.target.value)} required className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 pl-12 text-white outline-none focus:border-amber-500 transition-all" />
                  </div>
                  <div className="relative group">
                    <Activity className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-amber-500" size={16} />
                    <input type="text" placeholder="Industry Type" value={industry} onChange={(e) => setIndustry(e.target.value)} required className="w-full bg-black border border-zinc-800 rounded-xl px-5 py-4 pl-12 text-white outline-none focus:border-amber-500 transition-all" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full py-5 bg-amber-500 text-black font-black rounded-xl uppercase tracking-widest text-xs flex items-center justify-center gap-3 active:scale-95 transition-all">
                    {loading ? <Loader2 size={20} className="animate-spin" /> : "Generate Growth Strategy"}
                  </button>
                </form>
              </div>
              <div className="hidden lg:flex flex-col justify-center items-center p-16 text-center space-y-6">
                <div className="w-20 h-20 bg-amber-500/10 rounded-3xl flex items-center justify-center text-amber-500 animate-float border border-amber-500/20 shadow-lg shadow-amber-500/10"><Target size={40} /></div>
                <h4 className="text-xl font-black uppercase tracking-tight">AI Diagnostic Tool</h4>
                <p className="text-zinc-500 text-sm font-hindi max-w-xs leading-relaxed">Data-driven strategy seedha aapke inbox aur screen par. Result immediate aur actionable honge.</p>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in-up">
              <div className="p-8 md:p-12 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <CheckCircle2 size={32} className="text-amber-500" />
                  <div>
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Diagnosis Ready For</p>
                    <h3 className="text-2xl font-black uppercase">{brandName}</h3>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={downloadPDF} className="px-8 py-4 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-xl flex items-center gap-2 hover:bg-zinc-200 transition-all">
                    <Download size={16} /> Download PDF
                  </button>
                  <button onClick={() => setResult(null)} className="p-4 bg-zinc-800 rounded-xl text-zinc-400 hover:text-white transition-colors"><RefreshCw size={18} /></button>
                </div>
              </div>
              <div className="p-10 md:p-14 space-y-12 bg-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-amber-500 rounded-[2.5rem] text-black shadow-xl">
                    <p className="text-[10px] font-black uppercase tracking-widest mb-3 opacity-70">Deep Diagnosis</p>
                    <p className="text-xl font-black italic tracking-tighter leading-tight">"{result.diagnosis}"</p>
                  </div>
                  <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-[2.5rem]">
                    <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-3">Surgical Strategy</p>
                    <p className="text-base font-hindi text-zinc-200 leading-relaxed">{result.strategy}</p>
                  </div>
                </div>
                <div className="space-y-4">
                   <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] mb-4">3-Month Action Roadmap</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {result.concepts.map((c, i) => (
                      <div key={i} className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl flex flex-col gap-4 group hover:border-amber-500/30 transition-all">
                        <span className="w-10 h-10 flex items-center justify-center bg-amber-500/10 text-amber-500 text-xs font-black rounded-xl">Month 0{i+1}</span>
                        <p className="text-sm font-hindi text-zinc-300 leading-relaxed">{c}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* PDF TEMPLATE (HIDDEN ON PAGE, USED BY HTML2CANVAS) */}
      <div ref={reportRef} style={{ display: 'none', backgroundColor: '#000000', color: '#ffffff', padding: '60px', width: '800px' }}>
        <div style={{ border: '5px solid #f59e0b', padding: '50px', borderRadius: '40px', minHeight: '1000px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px', alignItems: 'flex-start' }}>
            <div>
              <h1 style={{ fontSize: '48px', fontWeight: 900, color: '#f59e0b', margin: 0, lineHeight: 1 }}>SURGERY REPORT</h1>
              <p style={{ letterSpacing: '4px', textTransform: 'uppercase', opacity: 0.5, fontSize: '12px', marginTop: '10px' }}>Pot Sot Media | Digital Branding Surgery Lab</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontWeight: 900, color: '#f59e0b', margin: 0, fontSize: '18px' }}>DOC_ID: #{Math.floor(Math.random() * 9000) + 1000}</p>
              <p style={{ opacity: 0.5, fontSize: '14px' }}>{new Date().toLocaleDateString('en-GB')}</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
            <div style={{ background: '#111', padding: '25px', borderRadius: '20px', border: '1px solid #222' }}>
              <p style={{ fontSize: '10px', color: '#f59e0b', fontWeight: 900, margin: '0 0 5px 0', letterSpacing: '2px' }}>PATIENT / CLIENT</p>
              <p style={{ fontSize: '24px', fontWeight: 900, margin: 0 }}>{userName}</p>
            </div>
            <div style={{ background: '#111', padding: '25px', borderRadius: '20px', border: '1px solid #222' }}>
              <p style={{ fontSize: '10px', color: '#f59e0b', fontWeight: 900, margin: '0 0 5px 0', letterSpacing: '2px' }}>BRAND NAME</p>
              <p style={{ fontSize: '24px', fontWeight: 900, margin: 0 }}>{brandName}</p>
            </div>
          </div>

          <div style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '16px', color: '#f59e0b', fontWeight: 900, borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '20px', letterSpacing: '3px' }}>DEEP DIAGNOSIS</h2>
            <p style={{ fontSize: '28px', fontStyle: 'italic', fontWeight: 700, lineHeight: '1.2', color: '#eee' }}>"{result?.diagnosis}"</p>
          </div>

          <div style={{ background: '#f59e0b', color: '#000', padding: '40px', borderRadius: '30px', marginBottom: '50px', boxShadow: '0 10px 30px rgba(245,158,11,0.2)' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 900, marginBottom: '15px', letterSpacing: '2px' }}>SURGICAL STRATEGY</h2>
            <p style={{ fontSize: '20px', lineHeight: '1.5', margin: 0, fontWeight: 600 }}>{result?.strategy}</p>
          </div>

          <div style={{ marginBottom: '60px', flex: 1 }}>
            <h2 style={{ fontSize: '16px', color: '#f59e0b', fontWeight: 900, marginBottom: '25px', letterSpacing: '3px' }}>3-MONTH EXECUTION ROADMAP</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {result?.concepts.map((c, i) => (
                <div key={i} style={{ background: '#0a0a0a', padding: '25px', borderRadius: '20px', display: 'flex', gap: '25px', alignItems: 'center', border: '1px solid #222' }}>
                  {/* Fix: Removed invalid 'justifyCenter' property from the style object, as 'justifyContent' is already provided. */}
                  <div style={{ minWidth: '50px', height: '50px', background: '#f59e0b', borderRadius: '12px', display: 'flex', alignItems: 'center', color: '#000', fontWeight: 900, fontSize: '20px', justifyContent: 'center' }}>
                    0{i+1}
                  </div>
                  <p style={{ margin: 0, fontSize: '18px', lineHeight: '1.4', opacity: 0.9 }}>{c}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '2px solid #222', paddingTop: '50px', textAlign: 'center', marginTop: 'auto' }}>
            <div style={{ marginBottom: '30px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '6px', fontWeight: 900, color: '#f59e0b', margin: '0 0 10px 0' }}>SIGNED BY CHIEF SURGEON</p>
              <h3 style={{ fontSize: '42px', fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-1px' }}>Rama Mundhra</h3>
              <p style={{ fontSize: '14px', fontWeight: 700, opacity: 0.6, textTransform: 'uppercase', letterSpacing: '4px', marginTop: '5px' }}>Digital Growth Specialist | Varanasi</p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', background: '#111', padding: '30px', borderRadius: '25px' }}>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '10px', fontWeight: 900, color: '#f59e0b', margin: '0 0 5px 0' }}>PHONE</p>
                <p style={{ fontSize: '20px', fontWeight: 900, margin: 0 }}>+91 6387230817</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '10px', fontWeight: 900, color: '#f59e0b', margin: '0 0 5px 0' }}>EMAIL</p>
                <p style={{ fontSize: '20px', fontWeight: 900, margin: 0 }}>didmkuldeep@gmail.com</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '10px', fontWeight: 900, color: '#f59e0b', margin: '0 0 5px 0' }}>LAB LOCATION</p>
                <p style={{ fontSize: '20px', fontWeight: 900, margin: 0 }}>Varanasi, UP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandDiagnosisSection;