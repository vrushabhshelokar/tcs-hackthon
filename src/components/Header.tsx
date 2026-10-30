import React from 'react';
import { Cpu, PhoneCall, ArrowLeft, Sun, Moon, Volume2 } from 'lucide-react';
import { Language, ActiveScreen } from '../types';
import { translations } from '../data/translations';
import { LanguageSelector } from './LanguageSelector';

interface Props {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeScreen: ActiveScreen;
  onNavigateHome: () => void;
  onOpenSupervisorHelp: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  speechRate: number;
  onToggleSpeechRate: () => void;
}

export const Header: React.FC<Props> = ({
  language,
  onLanguageChange,
  activeScreen,
  onNavigateHome,
  onOpenSupervisorHelp,
  isDark,
  onToggleTheme,
  speechRate,
  onToggleSpeechRate,
}) => {
  const t = translations[language];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4">
        {/* Zone 1: Brand wordmark with optional Back button */}
        <div className="flex items-center gap-2 shrink-0">
          {activeScreen !== 'welcome' && (
            <button
              type="button"
              onClick={onNavigateHome}
              aria-label={t.backToHome}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            </button>
          )}
          <button
            type="button"
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 text-left cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-xs">
              <Cpu className="w-4 h-4" aria-hidden="true" />
            </div>
            <div className="leading-tight">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-nowrap block">
                ShopFloor Buddy
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Language Selector */}
        <div className="flex items-center shrink-0">
          <LanguageSelector
            currentLanguage={language}
            onLanguageChange={onLanguageChange}
            compact={true}
          />
        </div>

        {/* Zone 3: Utility Controls (Voice speed, theme, supervisor contact) */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Speech Rate Toggle: 0.85x, 1.0x, 1.15x */}
          <button
            type="button"
            onClick={onToggleSpeechRate}
            title={`${t.speakingRate}: ${speechRate}x`}
            className="min-h-[40px] px-2 py-1 text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg flex items-center gap-1 transition-colors"
          >
            <Volume2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{speechRate}x</span>
          </button>

          {/* Theme Switcher */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Supervisor Call Trigger */}
          <button
            type="button"
            onClick={onOpenSupervisorHelp}
            title={t.contactSupervisor}
            className="min-h-[40px] px-2.5 sm:px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs active:scale-95 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">{t.contactSupervisor}</span>
            <span className="sm:hidden">Help</span>
          </button>
        </div>
      </div>
    </header>
  );
};
