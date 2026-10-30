import React from 'react';
import { Languages, Check } from 'lucide-react';
import { Language } from '../types';

interface Props {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  compact?: boolean;
}

const LANGUAGES: { code: Language; label: string; scriptLabel: string }[] = [
  { code: 'en', label: 'English', scriptLabel: 'English' },
  { code: 'hi', label: 'Hindi', scriptLabel: 'हिन्दी' },
  { code: 'mr', label: 'Marathi', scriptLabel: 'मराठी' },
];

export const LanguageSelector: React.FC<Props> = ({
  currentLanguage,
  onLanguageChange,
  compact = false,
}) => {
  if (compact) {
    return (
      <div 
        className="inline-flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
        role="group"
        aria-label="Language selector"
      >
        {LANGUAGES.map((item) => {
          const isActive = currentLanguage === item.code;
          return (
            <button
              key={item.code}
              type="button"
              onClick={() => onLanguageChange(item.code)}
              className={`min-h-[36px] px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>{item.scriptLabel}</span>
              {isActive && <Check className="w-3 h-3 stroke-[2.5]" aria-hidden="true" />}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        <Languages className="w-4 h-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        <span>Select Language / भाषा चुनें / भाषा निवडा</span>
      </div>
      <div 
        className="grid grid-cols-3 gap-2"
        role="radiogroup"
        aria-label="Language options"
      >
        {LANGUAGES.map((item) => {
          const isActive = currentLanguage === item.code;
          return (
            <button
              key={item.code}
              type="button"
              role="radio"
              aria-checked={isActive}
              onClick={() => onLanguageChange(item.code)}
              className={`min-h-[48px] p-2.5 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                isActive
                  ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-600 text-blue-900 dark:text-blue-100 shadow-xs ring-1 ring-blue-600'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="text-sm font-bold tracking-tight">{item.scriptLabel}</span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
