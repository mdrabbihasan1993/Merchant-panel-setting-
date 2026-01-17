
import React from 'react';
import { Building2, Lock } from 'lucide-react';

export const BusinessInfoSection: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-brand-dark/5 text-brand-dark rounded-lg">
            <Building2 size={24} />
          </div>
          <h2 className="text-lg font-bold text-brand-dark">Company Information</h2>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-500 rounded-lg text-xs font-bold uppercase tracking-wider">
          <Lock size={12} />
          Verified
        </div>
      </div>
      <div className="p-8">
        <div className="max-w-md">
          <label className="block text-sm font-semibold text-slate-500 mb-2 uppercase tracking-tight">Registered Company Name</label>
          <div className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-brand-dark font-bold text-lg flex items-center justify-between group">
            <span>Vertex Global Logistics</span>
            <Lock size={18} className="text-slate-300 group-hover:text-slate-400 transition-colors" />
          </div>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed italic">
            Company information is locked after verification. To update your legal business name, please contact our support team with valid documentation.
          </p>
        </div>
      </div>
    </div>
  );
};
