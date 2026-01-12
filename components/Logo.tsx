import React from 'react';
import { Zap } from 'lucide-react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  return (
    <div className={`flex flex-col leading-none group cursor-pointer ${className}`}>
      <span className={`text-[9px] font-black tracking-[0.4em] uppercase mb-0.5 ${light ? 'text-zinc-500' : 'text-zinc-600'}`}>
        THE BRAND
      </span>
      <div className="flex items-center gap-1">
        <div className="relative flex items-center justify-center">
          <Zap 
            size={22} 
            className="text-amber-500 fill-amber-500/20 transform -rotate-12 transition-transform group-hover:rotate-0" 
            strokeWidth={3}
          />
        </div>
        <span className={`text-3xl font-black tracking-tighter uppercase italic ${light ? 'text-white' : 'text-zinc-100'}`}>
          EDIT<span className="text-amber-500 not-italic">.</span>
        </span>
      </div>
      <span className={`text-[7px] font-black tracking-[0.2em] uppercase mt-1.5 ${light ? 'text-zinc-600' : 'text-zinc-500'}`}>
        BRAND SURGERY LAB
      </span>
    </div>
  );
};

export default Logo;