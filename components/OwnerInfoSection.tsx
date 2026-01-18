
import React, { useState } from 'react';
import { User, Camera, Mail, Phone, FileText, BadgeCheck, Fingerprint, UploadCloud, FileImage, ShieldCheck, Loader2 } from 'lucide-react';
import { OTPVerificationOverlay } from './OTPVerificationOverlay';

export const OwnerInfoSection: React.FC = () => {
  const [isSaving, setIsSaving] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [ownerName, setOwnerName] = useState('Ahsan Habib');

  const handleUpdateClick = () => {
    setShowOTP(true);
  };

  const handleVerified = () => {
    setShowOTP(false);
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert('Owner information and documents updated successfully!');
    }, 800);
  };

  return (
    <>
      <div className="space-y-6 pb-12">
        {/* Basic Profile Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <h2 className="text-lg font-bold text-brand-dark flex items-center gap-2">
              <User size={20} className="text-brand-orange" />
              Owner Details
            </h2>
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md uppercase border border-green-100">
              <ShieldCheck size={12} /> Account Verified
            </span>
          </div>
          
          <div className="p-8 space-y-8">
            {/* Profile Picture & Name */}
            <div className="flex items-center gap-6 p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
              <div className="relative group">
                <div className="w-24 h-24 rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden transition-all group-hover:border-brand-orange/50 shadow-inner">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahsan" alt="Owner" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Camera className="text-white" size={24} />
                  </div>
                </div>
                <button className="absolute -bottom-2 -right-2 p-1.5 bg-brand-orange text-white rounded-lg shadow-lg hover:scale-110 transition-transform border-2 border-white">
                  <Camera size={14} />
                </button>
              </div>
              <div>
                <h3 className="font-black text-brand-dark text-2xl tracking-tight">{ownerName}</h3>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Verified Merchant Owner
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <User size={14} className="text-brand-orange" /> Owner Full Name
                </label>
                <input 
                  type="text" 
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-orange/5 focus:border-brand-orange outline-none text-slate-900 font-bold transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Phone size={14} className="text-brand-orange" /> Mobile Number
                </label>
                <input 
                  type="tel" 
                  defaultValue="+880 1711-223344"
                  className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-orange/5 focus:border-brand-orange outline-none text-slate-900 font-bold transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                  <Mail size={14} className="text-brand-orange" /> Email Address
                </label>
                <input 
                  type="email" 
                  defaultValue="owner@vertexglobal.com"
                  className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-orange/5 focus:border-brand-orange outline-none text-slate-900 font-bold transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Identity & Documents Verification Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-lg font-bold text-brand-dark flex items-center gap-2">
              <Fingerprint size={20} className="text-brand-orange" />
              Identity & Documents Verification
            </h2>
          </div>
          
          <div className="p-8 space-y-10">
            {/* NID Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-1.5 w-6 bg-brand-orange rounded-full"></div>
                <h3 className="font-bold text-brand-dark uppercase text-sm tracking-widest">National Identity (NID)</h3>
              </div>
              
              <div className="max-w-md space-y-2 mb-6">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-tight">NID Number</label>
                <input 
                  type="text" 
                  placeholder="Enter 10 or 13 digit NID number"
                  className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-brand-orange/5 focus:border-brand-orange outline-none text-slate-900 font-bold transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">NID Front Side</label>
                  <div className="relative group cursor-pointer">
                    <div className="h-48 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center gap-3 transition-all group-hover:border-brand-orange/40 group-hover:bg-brand-orange/5">
                      <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                        <FileImage size={24} className="text-slate-400 group-hover:text-brand-orange" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-slate-600">Click to Upload Front</p>
                        <p className="text-xs text-slate-400 mt-1">Clear photo showing your name & NID</p>
                      </div>
                      <UploadCloud className="absolute top-4 right-4 text-slate-200 group-hover:text-brand-orange/30" size={24} />
                    </div>
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">NID Back Side</label>
                  <div className="relative group cursor-pointer">
                    <div className="h-48 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center gap-3 transition-all group-hover:border-brand-orange/40 group-hover:bg-brand-orange/5">
                      <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                        <FileImage size={24} className="text-slate-400 group-hover:text-brand-orange" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-slate-600">Click to Upload Back</p>
                        <p className="text-xs text-slate-400 mt-1">Photo showing address & barcode</p>
                      </div>
                      <UploadCloud className="absolute top-4 right-4 text-slate-200 group-hover:text-brand-orange/30" size={24} />
                    </div>
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                  </div>
                </div>
              </div>
            </div>

            {/* Business & Other Documents */}
            <div className="space-y-6 pt-10 border-t border-slate-100">
               <div className="flex items-center gap-2 mb-2">
                <div className="h-1.5 w-6 bg-brand-orange rounded-full"></div>
                <h3 className="font-bold text-brand-dark uppercase text-sm tracking-widest">Business Documents</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <FileText size={14} className="text-brand-orange" /> Trade License <span className="font-normal text-slate-400 font-sans lowercase">(Optional)</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="License Number"
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl focus:border-brand-orange outline-none text-slate-900 font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <BadgeCheck size={14} className="text-brand-orange" /> BIN Number <span className="font-normal text-slate-400 font-sans lowercase">(Optional)</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Business Identification Number"
                    className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-xl focus:border-brand-orange outline-none text-slate-900 font-bold"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                  <label className="text-sm font-bold text-slate-700">Relevant Documents Upload</label>
                  <div className="relative group cursor-pointer">
                    <div className="p-8 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 flex items-center gap-6 transition-all group-hover:border-brand-orange/40 group-hover:bg-brand-orange/5">
                      <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-105 transition-transform shrink-0">
                        <UploadCloud size={32} className="text-brand-orange" />
                      </div>
                      <div className="flex-1">
                        <p className="text-base font-bold text-slate-700">Upload trade license, utility bills or certificates</p>
                        <p className="text-sm text-slate-400 font-medium">Support PDF, JPEG, PNG (Max 5MB per file)</p>
                      </div>
                      <button className="px-5 py-2.5 bg-brand-dark text-white font-bold rounded-xl whitespace-nowrap">
                        Browse Files
                      </button>
                    </div>
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" multiple />
                  </div>
                </div>
            </div>
            
            <div className="flex justify-end pt-6 border-t border-slate-50">
               <button 
                onClick={handleUpdateClick}
                disabled={isSaving}
                className="group relative flex items-center gap-3 px-12 py-4 bg-brand-orange text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all overflow-hidden disabled:opacity-70"
               >
                 {isSaving && <Loader2 size={18} className="animate-spin" />}
                 <span className="relative z-10">{isSaving ? 'Updating...' : 'Save & Verify Identity'}</span>
                 <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
               </button>
            </div>
          </div>
        </div>
      </div>

      <OTPVerificationOverlay 
        isOpen={showOTP}
        onClose={() => setShowOTP(false)}
        onVerify={handleVerified}
        title="Verify Identity Update"
      />
    </>
  );
};
