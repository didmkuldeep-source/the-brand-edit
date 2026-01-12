
import React from 'react';
import { ArrowRight, X, Sparkles } from 'lucide-react';

const painPoints = [
  "इतने साल से बिना marketing के चला है, आगे भी चल जाएगा।",
  "हमारा काम reference से चलता है, ads की ज़रूरत नहीं।",
  "Online-wonline हमारे type के business के लिए नहीं।",
  "Product अच्छा है, publicity की क्या ज़रूरत।",
  "Local दुकान हैं, Google पर आने से क्या फ़ायदा।",
  "Marketing का result तुरंत नहीं दिखता, तो मत करो।",
  "Marketing me paisa daalna matlab waste."
];

interface PainPointsProps {
  onContactOpen?: () => void;
}

const PainPoints: React.FC<PainPointsProps> = ({ onContactOpen }) => {
  return (
    <section className="py-24 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 font-hindi leading-tight text-amber-500">
          ये दर्द सिर्फ़ <span className="text-white">Businessman</span> ही समझता है।
        </h2>

        <div className="space-y-5 mb-16">
          {painPoints.map((point, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-6 p-4 md:p-6 bg-zinc-950/50 border border-zinc-900 rounded-2xl group hover:border-amber-500/20 transition-all duration-300 shadow-xl"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                  <ArrowRight className="text-black w-6 h-6 md:w-8 md:h-8 stroke-[3]" />
                </div>
              </div>
              <p className="flex-1 text-lg md:text-2xl font-hindi text-white leading-relaxed font-medium">
                {point}
              </p>
              <div className="flex-shrink-0">
                <div className="p-1 group-hover:scale-125 transition-transform duration-300">
                  <X className="text-red-500 w-8 h-8 md:w-12 md:h-12 font-black stroke-[4] opacity-90" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onContactOpen}
            className="flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-black hover:bg-zinc-200 transition-all shadow-2xl group"
          >
            <Sparkles className="text-amber-500 group-hover:scale-110 transition-transform" />
            IS DARAD KA ILLAJ KAREIN
          </button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
