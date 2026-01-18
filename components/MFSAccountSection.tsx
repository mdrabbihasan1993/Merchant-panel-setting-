
import React, { useState } from 'react';
import { Smartphone, CheckCircle2, Wallet, AlertCircle, Save } from 'lucide-react';
import { OTPVerificationOverlay } from './OTPVerificationOverlay';

interface MFSState {
  value: string;
  error: string;
}

export const MFSAccountSection: React.FC = () => {
  const [accounts, setAccounts] = useState<Record<string, MFSState>>({
    bkash: { value: '', error: '' },
    nagad: { value: '', error: '' },
    rocket: { value: '', error: '' }
  });
  const [showOTP, setShowOTP] = useState(false);

  const validPrefixes = ['013', '014', '015', '016', '017', '018', '019'];

  const getValidationError = (id: string, val: string): string => {
    if (!val) return '';
    if (val.length >= 3) {
      const prefix = val.substring(0, 3);
      if (!validPrefixes.includes(prefix)) {
        return 'Invalid operator prefix (Use 013-019)';
      }
    }
    return ''; 
  };

  const handleInputChange = (id: string, val: string) => {
    const maxLen = id === 'rocket' ? 12 : 11;
    const cleanVal = val.replace(/\D/g, '');
    if (cleanVal.length > maxLen) return;
    const error = getValidationError(id, cleanVal);
    setAccounts(prev => ({
      ...prev,
      [id]: { value: cleanVal, error }
    }));
  };

  const handleSaveClick = () => {
    let globalError = false;
    const newAccounts = { ...accounts };

    Object.keys(newAccounts).forEach(id => {
      const acc = newAccounts[id];
      const targetLength = id === 'rocket' ? 12 : 11;
      if (!acc.value) return; 
      if (acc.value.length !== targetLength) {
        acc.error = `Must be exactly ${targetLength} digits`;
        globalError = true;
      } else if (!validPrefixes.includes(acc.value.substring(0, 3))) {
        acc.error = 'Invalid operator prefix';
        globalError = true;
      }
    });

    setAccounts(newAccounts);

    if (!globalError) {
      const hasAny = (Object.values(accounts) as MFSState[]).some(a => a.value !== '');
      if (hasAny) {
        setShowOTP(true);
      } else {
        alert('Please enter at least one MFS number to save.');
      }
    }
  };

  const handleVerified = () => {
    setShowOTP(false);
    alert('MFS Account information updated successfully!');
  };

  const mfsList = [
    { 
      id: 'bkash', 
      name: 'bKash', 
      icon: <Wallet className="w-8 h-8 text-pink-500" />,
      bgColor: 'bg-pink-50',
      length: 11
    },
    { 
      id: 'nagad', 
      name: 'Nagad', 
      icon: <Wallet className="w-8 h-8 text-orange-500" />,
      bgColor: 'bg-orange-50',
      length: 11
    },
    { 
      id: 'rocket', 
      name: 'Rocket', 
      icon: <Wallet className="w-8 h-8 text-purple-600" />,
      bgColor: 'bg-purple-50',
      length: 12
    }
  ];

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 rounded-t-2xl">
          <h2 className="text-lg font-bold text-brand-dark flex items-center gap-2">
            <Smartphone size={20} className="text-brand-orange" />
            MFS (Mobile Financial Services)
          </h2>
        </div>
        
        <div className="p-8 space-y-8">
          {mfsList.map((mfs) => {
            const acc = accounts[mfs.id];
            const isComplete = acc.value.length === mfs.length && !acc.error;
            
            return (
              <div key={mfs.id} className="flex flex-col md:flex-row md:items-start gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all hover:border-brand-orange/30">
                <div className={`w-16 h-16 shrink-0 ${mfs.bgColor} rounded-xl flex items-center justify-center shadow-inner mt-1`}>
                  {mfs.icon}
                </div>
                
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-brand-dark text-lg">{mfs.name} Wallet</h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase ${isComplete ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-slate-100 text-slate-500'}`}>
                      {isComplete ? 'Verified Format' : 'Not Linked'}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">Link your {mfs.length}-digit {mfs.name} number.</p>
                  {acc.error && (
                    <div className="flex items-center gap-1.5 text-red-500 text-xs font-bold mt-2 animate-in fade-in slide-in-from-left-2">
                      <AlertCircle size={14} />
                      {acc.error}
                    </div>
                  )}
                </div>
                
                <div className="md:w-80 relative group">
                  <input 
                    type="text" 
                    inputMode="numeric"
                    value={acc.value}
                    onChange={(e) => handleInputChange(mfs.id, e.target.value)}
                    placeholder={`01XXXXXXXXX${mfs.id === 'rocket' ? 'X' : ''}`}
                    className={`w-full px-5 py-3.5 bg-white border-2 rounded-xl outline-none pr-12 font-bold transition-all placeholder:text-slate-300 placeholder:font-normal ${
                      acc.error 
                        ? 'border-red-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
                        : isComplete 
                          ? 'border-green-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 text-green-700'
                          : 'border-slate-100 focus:ring-4 focus:ring-brand-orange/10 focus:border-brand-orange text-slate-900'
                    }`}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                     {isComplete && (
                       <CheckCircle2 size={20} className="text-green-500" />
                     )}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pt-6 border-t border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Validation Requirements:</p>
              <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-sm">
                • Numbers must start with: 013, 014, 015, 016, 017, or 019.<br/>
                • bKash/Nagad: 11 digits. Rocket: 12 digits.
              </p>
            </div>
            <button 
              onClick={handleSaveClick}
              className="group relative flex items-center gap-3 px-10 py-4 bg-brand-orange text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all overflow-hidden"
            >
              <Save size={20} />
              <span className="relative z-10">Save MFS Settings</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>

      <OTPVerificationOverlay 
        isOpen={showOTP}
        onClose={() => setShowOTP(false)}
        onVerify={handleVerified}
        title="Verify MFS Update"
      />
    </>
  );
};
