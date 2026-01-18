
import React, { useState } from 'react';
import { CreditCard, Landmark, Wallet, CheckCircle2, History, Save } from 'lucide-react';
import { OTPVerificationOverlay } from './OTPVerificationOverlay';

export const PaymentMethodSection: React.FC = () => {
  const [defaultPayment, setDefaultPayment] = useState('bank');
  const [withdrawalFreq, setWithdrawalFreq] = useState('daily');
  const [isSaving, setIsSaving] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const methods = [
    { id: 'bank', name: 'Bank Account', icon: <Landmark className="w-5 h-5" /> },
    { id: 'bkash', name: 'bKash', icon: <Wallet className="w-5 h-5 text-pink-500" /> },
    { id: 'nagad', name: 'Nagad', icon: <Wallet className="w-5 h-5 text-orange-500" /> },
    { id: 'rocket', name: 'Rocket', icon: <Wallet className="w-5 h-5 text-purple-600" /> },
  ];

  const handleUpdateClick = () => {
    setShowOTP(true);
  };

  const handleVerified = () => {
    setShowOTP(false);
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert('Payment settings saved successfully!');
    }, 800);
  };

  return (
    <>
      <div className="space-y-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-brand-dark mb-6 flex items-center gap-2">
            <CreditCard className="text-brand-orange" />
            Primary Payment Method
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {methods.map((method) => (
              <button
                key={method.id}
                onClick={() => setDefaultPayment(method.id)}
                className={`relative flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-200 ${
                  defaultPayment === method.id 
                  ? 'border-brand-orange bg-brand-orange/5 scale-[1.02]' 
                  : 'border-slate-100 hover:border-brand-dark/20'
                }`}
              >
                <div className={`p-3 rounded-xl ${defaultPayment === method.id ? 'bg-brand-orange text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {method.icon}
                </div>
                <span className={`font-bold text-sm ${defaultPayment === method.id ? 'text-brand-orange' : 'text-slate-600'}`}>
                  {method.name}
                </span>
                {defaultPayment === method.id && (
                  <div className="absolute top-2 right-2 text-brand-orange">
                    <CheckCircle2 size={16} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-brand-dark mb-6 flex items-center gap-2">
            <History className="text-brand-orange" />
            Withdrawal Frequency
          </h3>
          
          <div className="flex flex-col md:flex-row gap-4">
            {[
              { id: 'daily', label: 'Daily Withdrawal', desc: 'Transfer funds every 24 hours' },
              { id: 'request', label: 'As Per Request', desc: 'Withdraw manually when needed' }
            ].map((option) => (
              <label 
                key={option.id}
                className={`flex-1 cursor-pointer p-6 rounded-2xl border-2 transition-all ${
                  withdrawalFreq === option.id 
                  ? 'border-brand-dark bg-brand-dark text-white' 
                  : 'border-slate-100 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <input 
                  type="radio" 
                  className="hidden" 
                  checked={withdrawalFreq === option.id}
                  onChange={() => setWithdrawalFreq(option.id)}
                />
                <div className="font-bold text-lg">{option.label}</div>
                <div className={`text-sm mt-1 ${withdrawalFreq === option.id ? 'text-slate-300' : 'text-slate-400'}`}>
                  {option.desc}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button 
            onClick={handleUpdateClick}
            disabled={isSaving}
            className="group relative flex items-center gap-3 px-10 py-4 bg-brand-orange text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all overflow-hidden disabled:opacity-70"
          >
            <Save size={20} className={isSaving ? 'animate-pulse' : ''} />
            <span className="relative z-10">{isSaving ? 'Saving...' : 'Save Payment Configuration'}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </div>
      </div>

      <OTPVerificationOverlay 
        isOpen={showOTP}
        onClose={() => setShowOTP(false)}
        onVerify={handleVerified}
        title="Verify Payment Settings"
      />
    </>
  );
};
