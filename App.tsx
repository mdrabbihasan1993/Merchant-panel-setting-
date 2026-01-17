
import React, { useState } from 'react';
import { SectionType } from './types';
import { NAVIGATION_ITEMS } from './constants';
import { BusinessInfoSection } from './components/BusinessInfoSection';
import { OwnerInfoSection } from './components/OwnerInfoSection';
import { PickupMethodSection } from './components/PickupMethodSection';
import { PaymentMethodSection } from './components/PaymentMethodSection';
import { BankAccountSection } from './components/BankAccountSection';
import { MFSAccountSection } from './components/MFSAccountSection';
import { AIAssistantSection } from './components/AIAssistantSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('business');

  const renderContent = () => {
    switch (activeSection) {
      case 'business': return <BusinessInfoSection />;
      case 'owner': return <OwnerInfoSection />;
      case 'pickup': return <PickupMethodSection />;
      case 'payment': return <PaymentMethodSection />;
      case 'bank': return <BankAccountSection />;
      case 'mfs': return <MFSAccountSection />;
      case 'ai-assistant': return <AIAssistantSection />;
      default: return <BusinessInfoSection />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-6 animate-in fade-in duration-700">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-1 bg-brand-orange rounded-full"></div>
              <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight">
                Settings
              </h2>
            </div>
            <p className="text-slate-500 font-medium ml-11">
              Configure your merchant preferences and account details.
            </p>
          </div>

          {/* Navigation Buttons - Now below the title area */}
          <div className="mb-8 border-b border-slate-200 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-200 group whitespace-nowrap border-2 ${
                    activeSection === item.id 
                      ? 'bg-brand-dark border-brand-dark text-white shadow-md' 
                      : 'bg-white border-slate-200 text-slate-600 hover:border-brand-orange hover:text-brand-orange'
                  }`}
                >
                  <span className={`${activeSection === item.id ? 'text-brand-orange' : 'text-slate-400 group-hover:text-brand-orange'}`}>
                    {item.icon}
                  </span>
                  <span className="font-bold text-sm tracking-tight">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Section Title */}
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-brand-dark flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
              {NAVIGATION_ITEMS.find(n => n.id === activeSection)?.label}
            </h3>
          </div>

          {/* Content Wrapper */}
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-500">
            {renderContent()}
          </div>
        </div>

        <footer className="mt-20 py-8 border-t border-slate-200 text-center text-xs text-slate-400 font-medium">
          <p>© 2024 Merchant Management System. All information is secured.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
