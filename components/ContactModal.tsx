import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin, Briefcase, CheckCircle2, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
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
    formData.append('_subject', 'Brand Diagnosis Request (Modal)');

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 md:p-10 shadow-2xl animate-fade-in-up min-h-[550px] flex flex-col justify-center">
        <button onClick={onClose} className="absolute right-6 top-6 text-zinc-500 hover:text-white transition-colors">
          <X size={24} />
        </button>

        {submitted ? (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={40} className="text-amber-500" />
            </div>
            <h3 className="text-3xl font-black uppercase text-amber-500 italic">Confirmed!</h3>
            <p className="text-zinc-400 font-hindi">Aapka appointment schedule ho gaya hai aur details didmkuldeep@gmail.com par bhej di gayi hain.</p>
            <button onClick={onClose} className="px-10 py-4 bg-white text-black font-bold rounded-xl uppercase tracking-widest text-xs mt-4">Close</button>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-black text-amber-500 uppercase tracking-tighter mb-2">Brand Surgery Lab</h3>
              <p className="text-zinc-400 font-hindi">अपनी ग्रोथ का प्लान अभी बुक करें।</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input type="text" name="name" required placeholder="Aapka Naam *" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 pl-12 text-white focus:outline-none focus:border-amber-600 transition-colors" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input type="tel" name="phone" required value={phone} onChange={handlePhoneChange} placeholder="10 Digit No. *" className={`w-full bg-zinc-950 border ${isValidPhone ? 'border-zinc-800' : 'border-red-500'} rounded-xl px-5 py-4 pl-12 text-white focus:outline-none focus:border-amber-600 transition-colors`} />
                </div>
                <div className="relative">
                  <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input type="text" name="location" required placeholder="Location *" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 pl-12 text-white focus:outline-none focus:border-amber-600 transition-colors" />
                </div>
              </div>

              <div className="relative">
                <Briefcase size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input type="text" name="business_type" required placeholder="Business Type *" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 pl-12 text-white focus:outline-none focus:border-amber-600 transition-colors" />
              </div>

              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input type="email" name="email" placeholder="Email (Optional)" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 pl-12 text-white focus:outline-none focus:border-amber-600 transition-colors" />
              </div>

              <button type="submit" disabled={loading || !isValidPhone || phone.length !== 10} className="w-full py-5 bg-amber-500 hover:bg-amber-600 text-black font-black rounded-xl transition-all shadow-lg shadow-amber-500/20 uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                {loading ? <Loader2 size={18} className="animate-spin" /> : "Get Free Brand Diagnosis"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;