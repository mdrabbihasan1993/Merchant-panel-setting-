
import React from 'react';
import { Building2, Lock, ShieldCheck, AlertCircle } from 'lucide-react';

export const BusinessInfoSection: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-brand-dark/5 text-brand-dark rounded-xl">
            <Building2 size={22} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-brand-dark leading-tight">Business Profile</h2>
            <p className="text-xs text-slate-400 font-medium">Core registration information</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-600 rounded-lg text-[10px] font-black uppercase tracking-wider border border-green-100">
          <ShieldCheck size={12} />
          Identity Verified
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-widest">
                Registered Company Name
              </label>
              <span className="flex items-center gap-1 text-[10px] text-slate-400 font-bold italic">
                <Lock size={10} /> Permanent Record
              </span>
            </div>
            
            <div className="relative group">
              <div className="w-full px-6 py-5 bg-slate-50/80 border-2 border-slate-100 rounded-2xl text-brand-dark font-black text-xl flex items-center justify-between transition-all group-hover:bg-slate-100/50">
                <span className="tracking-tight">Vertex Global Logistics</span>
                <div className="p-2 bg-white rounded-lg shadow-sm text-slate-300">
                  <Lock size={18} />
                </div>
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-orange/0 via-brand-orange/5 to-brand-orange/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>
          
          <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-2xl flex items-start gap-4">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <AlertCircle size={18} />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-blue-900">Why can't I change this?</h4>
              <p className="text-xs text-blue-700/80 font-medium leading-relaxed">
                The Registered Company Name is tied to your legal Trade License and NID verification. 
                For legal compliance, this name <span className="font-bold underline">cannot be modified</span> from the merchant panel.
              </p>
              <p className="text-[10px] text-blue-500 font-bold mt-2 uppercase">
                Contact support if there is a spelling error.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
