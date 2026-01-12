
import React from 'react';
import { Check, Sparkles } from 'lucide-react';

const realities = [
  "Product perfect है ... पर customer को पता ही नहीं !",
  "वो Instagram पर चला गया... और मैं अभी भी Visiting Card ही बाँट रहा हूँ।",
  "Business चल तो रहा है... पर बढ़ क्यों नहीं रहा?",
  "Google, Facebook, Instagram... सब सुन लिया, पर करे कौन?",
  "सब बोलते हैं Online आओ... पर शुरुआत कहाँ से करें?",
  "काम अच्छा है, पर लोग हमें जानते ही नहीं।",
  "जिस दिन Shop बंद, उस दिन कमाई बंद।"
];

interface RealityCheckProps {
  onContactOpen?: () => void;
}

const RealityCheck: React.FC<RealityCheckProps> = ({ onContactOpen }) => {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden border-t border-zinc-900">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 font-hindi leading-tight text-amber-500 text-center animate-fade-in-up">
          ये दर्द सिर्फ़ <span className="text-white">Businessman</span> ही समझता है।
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-16">
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative group w-full max-w-md animate-float">
              <div className="absolute -inset-4 bg-amber-500/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative overflow-hidden rounded-[3rem] border border-zinc-800 aspect-[4/5] w-full bg-zinc-900 image-tilt shadow-2xl">
                {/* Updated with the specific requested image of an Indian businessman */}
                <img 
                  src="https://media.istockphoto.com/id/1908696215/photo/stressed-businessman-indoor-portrait-of-a-frustrated-young-businessman-in-a-white-shirt-hair.jpg?s=612x612&w=0&k=20&c=sy3PdM0rg-LlR_uCQw9ukHmuIJVyvfn1GqlXajUGxiU=" 
                  alt="Stressed Indian Businessman looking worried" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1556157382-97dee2dcb96a?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="h-0.5 w-12 bg-amber-500 mb-4"></div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">Diagnosis Pending</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 md:space-y-6 order-1 lg:order-2">
            {realities.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-6 group animate-fade-in-up p-4 hover:bg-zinc-900/40 rounded-2xl transition-all duration-300"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex-shrink-0 mt-1 w-8 h-8 md:w-12 md:h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center shadow-lg group-hover:bg-amber-500 group-hover:border-amber-400 transition-all group-hover:scale-110">
                  <Check className="text-amber-500 group-hover:text-black w-5 h-5 md:w-6 md:h-6 stroke-[4] transition-colors" />
                </div>
                <p className="text-lg md:text-2xl font-hindi text-zinc-200 leading-snug group-hover:text-white transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onContactOpen}
            className="flex items-center gap-3 px-10 py-5 bg-amber-500 text-black font-black rounded-full hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20 group active:scale-95 animate-fade-in-up"
            style={{ animationDelay: '1s' }}
          >
            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
            IS DARAD KA ILLAJ KAREIN
          </button>
        </div>
      </div>
    </section>
  );
};

export default RealityCheck;
