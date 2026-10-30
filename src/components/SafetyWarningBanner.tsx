import React from 'react';
import { AlertTriangle, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface Props {
  language: Language;
  compact?: boolean;
}

export const SafetyWarningBanner: React.FC<Props> = ({ language, compact = false }) => {
  const t = translations[language];

  if (compact) {
    return (
      <div 
        role="alert" 
        className="w-full bg-amber-500/10 border border-amber-600/30 text-amber-900 dark:text-amber-200 px-3 py-2 rounded-xl flex items-center gap-2.5 text-xs font-medium"
      >
        <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" aria-hidden="true" />
        <span className="leading-tight">
          <strong className="font-semibold">{t.demoWarningTitle}:</strong> {t.demoWarningText}
        </span>
      </div>
    );
  }

  return (
    <div 
      role="alert" 
      className="w-full bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-500/40 text-amber-950 dark:text-amber-100 p-3.5 sm:p-4 rounded-2xl shadow-xs"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 bg-amber-500 text-white rounded-xl shrink-0 mt-0.5">
          <ShieldAlert className="w-5 h-5" aria-hidden="true" />
        </div>
        <div className="space-y-1">
          <h2 className="text-xs sm:text-sm font-bold tracking-wide uppercase text-amber-900 dark:text-amber-300">
            {t.demoWarningTitle}
          </h2>
          <p className="text-xs sm:text-sm font-medium text-amber-800 dark:text-amber-200/90 leading-relaxed">
            {t.demoWarningText}
          </p>
        </div>
      </div>
    </div>
  );
};
