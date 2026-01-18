
import React, { useRef } from 'react';
import { NAVIGATION_ITEMS } from './constants';
import { BusinessInfoSection } from './components/BusinessInfoSection';
import { OwnerInfoSection } from './components/OwnerInfoSection';
import { PickupMethodSection } from './components/PickupMethodSection';
import { PaymentMethodSection } from './components/PaymentMethodSection';
import { BankAccountSection } from './components/BankAccountSection';
import { MFSAccountSection } from './components/MFSAccountSection';
import { AIAssistantSection } from './components/AIAssistantSection';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">
      {/* Top Header & Navigation */}
      <header className="bg-white border-b border-slate-200 z-50 px-6 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-1 bg-brand-orange rounded-full"></div>
              <h1 className="text-2xl font-black text-brand-dark tracking-tight">
                Merchant Settings
              </h1>
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1 ml-11">
              Configuration Panel
            </p>
          </div>

          <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-50 hover:bg-brand-orange/10 border border-slate-200 hover:border-brand-orange text-slate-600 hover:text-brand-orange rounded-xl transition-all duration-200 whitespace-nowrap"
              >
                <span className="scale-75">{item.icon}</span>
                <span className="font-bold text-xs">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content Area - Scrollable */}
      <main className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 space-y-12">
        <div className="max-w-5xl mx-auto pb-24">
          
          {/* Business Info Section */}
          <section id="business" className="scroll-mt-24 transition-all duration-500">
            <div className="mb-4 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
               <h3 className="text-lg font-black text-brand-dark uppercase tracking-tight">Business Information</h3>
            </div>
            <BusinessInfoSection />
          </section>

          <div className="h-px bg-slate-200 my-12"></div>

          {/* Owner Info Section */}
          <section id="owner" className="scroll-mt-24">
            <div className="mb-4 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
               <h3 className="text-lg font-black text-brand-dark uppercase tracking-tight">Owner Profile</h3>
            </div>
            <OwnerInfoSection />
          </section>

          <div className="h-px bg-slate-200 my-12"></div>

          {/* Pickup Method Section */}
          <section id="pickup" className="scroll-mt-24">
            <div className="mb-4 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
               <h3 className="text-lg font-black text-brand-dark uppercase tracking-tight">Pickup & Return Hubs</h3>
            </div>
            <PickupMethodSection />
          </section>

          <div className="h-px bg-slate-200 my-12"></div>

          {/* Payment Method Section */}
          <section id="payment" className="scroll-mt-24">
            <div className="mb-4 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
               <h3 className="text-lg font-black text-brand-dark uppercase tracking-tight">Payment Configuration</h3>
            </div>
            <PaymentMethodSection />
          </section>

          <div className="h-px bg-slate-200 my-12"></div>

          {/* Bank Account Section */}
          <section id="bank" className="scroll-mt-24">
            <div className="mb-4 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
               <h3 className="text-lg font-black text-brand-dark uppercase tracking-tight">Bank Details</h3>
            </div>
            <BankAccountSection />
          </section>

          <div className="h-px bg-slate-200 my-12"></div>

          {/* MFS Account Section */}
          <section id="mfs" className="scroll-mt-24">
            <div className="mb-4 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
               <h3 className="text-lg font-black text-brand-dark uppercase tracking-tight">MFS Accounts</h3>
            </div>
            <MFSAccountSection />
          </section>

          <div className="h-px bg-slate-200 my-12"></div>

          {/* AI Assistant Section */}
          <section id="ai-assistant" className="scroll-mt-24">
            <div className="mb-4 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
               <h3 className="text-lg font-black text-brand-dark uppercase tracking-tight">AI Business Consultant</h3>
            </div>
            <AIAssistantSection />
          </section>

          <footer className="mt-20 py-8 text-center text-xs text-slate-400 font-medium">
            <p>© 2024 Merchant Management System. All information is secured with industry-standard encryption.</p>
          </footer>
        </div>
      </main>

      {/* Floating Action Button for AI (Optional convenience) */}
      <button 
        onClick={() => scrollToSection('ai-assistant')}
        className="fixed bottom-6 right-6 w-14 h-14 bg-brand-orange text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40 md:hidden"
      >
        {NAVIGATION_ITEMS.find(i => i.id === 'ai-assistant')?.icon}
      </button>
    </div>
  );
};

export default App;
