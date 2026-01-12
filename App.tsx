import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PainPoints from './components/PainPoints';
import RealityCheck from './components/RealityCheck';
import Services from './components/Services';
import AISidebar from './components/AISidebar';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import BrandDiagnosisSection from './components/BrandDiagnosisSection';
import AIChatBot from './components/AIChatBot';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'contact'>('home');

  const openContactModal = () => setIsContactModalOpen(true);
  
  const navigateTo = (page: 'home' | 'about' | 'services' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
        <Suspense fallback={<div style={{color: 'white', textAlign: 'center', padding: '50px'}}>Loading...</div>}>
    <div className="relative min-h-screen selection:bg-amber-500/30 overflow-x-hidden bg-black">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-amber-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-zinc-800/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <Navbar 
        onOpenAI={() => setIsSidebarOpen(true)} 
        onNavigate={navigateTo}
        currentPage={currentPage}
      />
      
      <main className="relative z-10">
        {currentPage === 'home' && (
          <div className="space-y-0">
            <Hero onContactOpen={openContactModal} onServicesClick={() => navigateTo('services')} />
            <BrandDiagnosisSection onContactOpen={openContactModal} />
            <About onContactOpen={openContactModal} />
            <PainPoints onContactOpen={openContactModal} />
            <RealityCheck onContactOpen={openContactModal} />
            <Services onContactOpen={openContactModal} onMoreServices={() => navigateTo('services')} />
          </div>
        )}
        {currentPage === 'about' && (
          <AboutPage onContactOpen={openContactModal} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onContactOpen={openContactModal} />
        )}
        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      <Footer onNavigate={navigateTo} />

      <AISidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      {/* Floating AI ChatBot - Restored */}
      <Suspense fallback={null}>
        <AIChatBot />
      </Suspense>

      <div className="pointer-events-none fixed inset-0 z-50 mix-blend-difference hidden md:block">
        <CustomCursor />
      </div>
    </div>
              </Suspense>
  );
};

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed w-6 h-6 bg-white rounded-full transition-transform duration-75 ease-out"
      style={{ 
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default App;
