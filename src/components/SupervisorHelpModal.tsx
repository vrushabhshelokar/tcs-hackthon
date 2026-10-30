import React from 'react';
import { X, ShieldAlert, PhoneCall, AlertTriangle, UserCheck, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const SupervisorHelpModal: React.FC<Props> = ({
  isOpen,
  onClose,
  language,
}) => {
  const t = translations[language];

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="supervisor-help-title"
    >
      <div 
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4 max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-amber-500 text-white rounded-xl">
              <ShieldAlert className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 id="supervisor-help-title" className="text-base font-bold text-slate-900 dark:text-white">
                {t.supervisorTitle}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Official shop floor escalation hierarchy
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Urgent Warning Notice */}
        <div className="p-3.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 rounded-2xl flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs font-semibold text-amber-900 dark:text-amber-200 leading-relaxed">
            {t.supervisorNotice}
          </p>
        </div>

        {/* Contacts List */}
        <div className="space-y-3">
          {/* Shift In-Charge */}
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Ramesh Deshmukh</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.supervisorRole}</p>
                <p className="text-[11px] font-mono font-medium text-blue-600 dark:text-blue-400 mt-0.5">Desk: Station 04 Desk · Intercom 204</p>
              </div>
            </div>
            <div className="p-2 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 rounded-xl flex items-center gap-1 text-xs font-bold">
              <PhoneCall className="w-4 h-4" />
              <span>Ext. 204</span>
            </div>
          </div>

          {/* Plant Safety Officer */}
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Anil Sharma</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.safetyOfficerRole}</p>
                <p className="text-[11px] font-mono font-medium text-emerald-600 dark:text-emerald-400 mt-0.5">Safety Control Office · Intercom 108</p>
              </div>
            </div>
            <div className="p-2 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 rounded-xl flex items-center gap-1 text-xs font-bold">
              <PhoneCall className="w-4 h-4" />
              <span>Ext. 108</span>
            </div>
          </div>
        </div>

        {/* Guidance summary */}
        <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-2xl border border-blue-100 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-200 space-y-1">
          <div className="flex items-center gap-1.5 font-bold">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Standard Protocol for Missing Information</span>
          </div>
          <p className="text-[11px] leading-relaxed text-blue-800 dark:text-blue-300">
            Never attempt unverified maintenance, calibration, tooling removal, or bypass locks. Your supervisor is physically stationed at Bay 2 and available on every shift.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full min-h-[48px] py-2.5 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm transition-colors"
        >
          {t.close}
        </button>
      </div>
    </div>
  );
};
