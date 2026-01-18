
import React, { useState, useRef, useEffect } from 'react';
import { Landmark, Save, AlertCircle, Loader2, ChevronDown, Search, Check } from 'lucide-react';
import { OTPVerificationOverlay } from './OTPVerificationOverlay';

const BANGLADESH_BANKS = [
  "Dutch Bangla Bank PLC",
  "Sonali Bank PLC",
  "BRAC Bank PLC",
  "Islami Bank Bangladesh PLC",
  "City Bank PLC",
  "Eastern Bank PLC (EBL)",
  "United Commercial Bank (UCB)",
  "Mutual Trust Bank (MTB)",
  "Prime Bank PLC",
  "Bank Asia PLC",
  "Standard Chartered Bank",
  "HSBC Bangladesh",
  "Pubali Bank PLC",
  "Janat Bank PLC",
  "Agrani Bank PLC",
  "Rupali Bank PLC",
  "Social Islami Bank PLC",
  "Al-Arafah Islami Bank PLC",
  "Mercantile Bank PLC",
  "Southeast Bank PLC",
  "One Bank PLC",
  "National Bank PLC",
  "IFIC Bank PLC",
  "Exim Bank PLC",
  "First Security Islami Bank PLC",
  "Jamuna Bank PLC",
  "NRB Bank",
  "Modhumoti Bank",
  "South Bangla Agriculture & Commerce Bank",
  "Midland Bank",
  "Meghna Bank"
].sort();

export const BankAccountSection: React.FC = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isBankDropdownOpen, setIsBankDropdownOpen] = useState(false);
  const [bankSearch, setBankSearch] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredBanks = BANGLADESH_BANKS.filter(bank => 
    bank.toLowerCase().includes(bankSearch.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsBankDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBank) {
      alert('Please select a bank from the list.');
      return;
    }
    setShowOTP(true);
  };

  const handleVerified = () => {
    setShowOTP(false);
    setIsUpdating(true);
    // Simulate API call
    setTimeout(() => {
      setIsUpdating(false);
      alert('Bank account information updated successfully!');
    }, 800);
  };

  const handleBankSelect = (bank: string) => {
    setSelectedBank(bank);
    setBankSearch(bank);
    setIsBankDropdownOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-lg font-bold text-brand-dark flex items-center gap-2">
            <Landmark size={20} className="text-brand-orange" />
            Update Bank Details
          </h2>
          <span className="text-xs font-semibold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full uppercase">
            Mandatory Fields
          </span>
        </div>
        
        <div className="p-8">
          <div className="mb-8 p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
            <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-amber-800">
              Please ensure all bank details are correct to avoid payment delays. The Account Holder Name must match your Trade License or NID.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Searchable Bank Dropdown */}
              <div className="space-y-2 relative" ref={dropdownRef}>
                <label className="text-sm font-bold text-slate-700">Name of Bank *</label>
                <div 
                  className={`relative flex items-center bg-white border rounded-xl transition-all ${isBankDropdownOpen ? 'border-brand-orange ring-4 ring-brand-orange/5' : 'border-slate-200'}`}
                >
                  <div className="pl-4 text-slate-400">
                    <Search size={18} />
                  </div>
                  <input 
                    required
                    type="text" 
                    value={bankSearch}
                    onChange={(e) => {
                      setBankSearch(e.target.value);
                      if (!isBankDropdownOpen) setIsBankDropdownOpen(true);
                    }}
                    onFocus={() => setIsBankDropdownOpen(true)}
                    placeholder="Type to search bank..."
                    className="w-full px-3 py-3 bg-transparent outline-none text-slate-900 font-medium"
                  />
                  <button 
                    type="button"
                    onClick={() => setIsBankDropdownOpen(!isBankDropdownOpen)}
                    className="pr-4 text-slate-400 hover:text-brand-dark transition-colors"
                  >
                    <ChevronDown size={20} className={`transition-transform duration-200 ${isBankDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Dropdown Menu */}
                {isBankDropdownOpen && (
                  <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-2xl max-h-60 overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-top-2 duration-200">
                    {filteredBanks.length > 0 ? (
                      filteredBanks.map((bank) => (
                        <button
                          key={bank}
                          type="button"
                          onClick={() => handleBankSelect(bank)}
                          className={`w-full flex items-center justify-between px-5 py-3 text-left text-sm font-medium transition-colors hover:bg-slate-50 ${selectedBank === bank ? 'text-brand-orange bg-brand-orange/5' : 'text-slate-700'}`}
                        >
                          {bank}
                          {selectedBank === bank && <Check size={16} />}
                        </button>
                      ))
                    ) : (
                      <div className="px-5 py-4 text-sm text-slate-400 italic">
                        No banks found matching "{bankSearch}"
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Branch Name *</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Uttara Branch"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-dark/5 focus:border-brand-dark outline-none transition-all text-slate-900 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Account Holder Name *</label>
                <input 
                  required
                  type="text" 
                  placeholder="Exact name as on bank record"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-dark/5 focus:border-brand-dark outline-none transition-all text-slate-900 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Bank Account Number *</label>
                <input 
                  required
                  type="text" 
                  placeholder="000.000.000.0000"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-dark/5 focus:border-brand-dark outline-none transition-all text-slate-900 font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Routing Number *</label>
                <input 
                  required
                  type="text" 
                  placeholder="9-digit routing number"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-dark/5 focus:border-brand-dark outline-none transition-all text-slate-900 font-medium"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex justify-end">
              <button 
                type="submit" 
                disabled={isUpdating}
                className="flex items-center gap-2 px-10 py-4 bg-brand-orange text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all overflow-hidden disabled:opacity-70"
              >
                {isUpdating ? <Loader2 size={18} className="animate-spin" /> : <Save size={20} />}
                <span className="relative z-10">{isUpdating ? 'Updating...' : 'Update Bank Account'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <OTPVerificationOverlay 
        isOpen={showOTP}
        onClose={() => setShowOTP(false)}
        onVerify={handleVerified}
        title="Verify Bank Update"
      />
    </>
  );
};
