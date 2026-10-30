import React from 'react';
import { 
  Camera, 
  Keyboard, 
  QrCode, 
  ArrowRight, 
  Factory, 
  Sparkles, 
  ShieldCheck, 
  Volume2, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';
import { Language, MachineData } from '../types';
import { translations } from '../data/translations';
import { DEMO_MACHINES } from '../data/machines';
import { LanguageSelector } from './LanguageSelector';
import { SafetyWarningBanner } from './SafetyWarningBanner';

interface Props {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenScanner: () => void;
  onOpenDemoQRs: () => void;
  onSelectMachine: (machine: MachineData) => void;
  onManualCodeClick: () => void;
}

export const WelcomeScreen: React.FC<Props> = ({
  language,
  onLanguageChange,
  onOpenScanner,
  onOpenDemoQRs,
  onSelectMachine,
  onManualCodeClick,
}) => {
  const t = translations[language];

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {/* Prominent Demo Warning */}
      <SafetyWarningBanner language={language} />

      {/* Hero Welcome Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <Factory className="w-6 h-6" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {t.appName}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              {t.tagline}
            </p>
          </div>
        </div>

        {/* Value Highlights */}
        <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 dark:border-slate-700 text-center">
          <div className="p-2 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Languages</span>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">EN · HI · MR</span>
          </div>
          <div className="p-2 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Audio Guidance</span>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Voice-Enabled</span>
          </div>
          <div className="p-2 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Safety Status</span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Non-SOP Demo</span>
          </div>
        </div>
      </div>

      {/* Language Selector Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700 shadow-xs">
        <LanguageSelector
          currentLanguage={language}
          onLanguageChange={onLanguageChange}
        />
      </div>

      {/* Primary Actions Card: Scan QR & Enter Code */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Machine Identification
        </h2>

        {/* Primary Action Button: Scan QR Code */}
        <button
          type="button"
          onClick={onOpenScanner}
          className="w-full min-h-[54px] px-5 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-sm sm:text-base flex items-center justify-between shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-blue-500/80 rounded-xl">
              <Camera className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span>{t.scanMachineQR}</span>
          </div>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Secondary Action: Enter Machine Code manually */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={onManualCodeClick}
            className="min-h-[46px] px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Keyboard className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>{t.enterMachineCode}</span>
          </button>

          <button
            type="button"
            onClick={onOpenDemoQRs}
            className="min-h-[46px] px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <QrCode className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>{t.viewDemoQRs}</span>
          </button>
        </div>
      </div>

      {/* Guaranteed Fallback List: Select a Demo Machine Directly */}
      <div className="space-y-2.5">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1">
          {t.orSelectDemoMachine}
        </h2>

        <div className="space-y-2.5">
          {DEMO_MACHINES.map((machine) => {
            const machineName = machine.machineName[language] || machine.machineName.en;
            const categoryName = machine.category[language] || machine.category.en;

            return (
              <button
                key={machine.machineId}
                type="button"
                onClick={() => onSelectMachine(machine)}
                className="w-full text-left bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all flex items-center justify-between gap-3 group cursor-pointer shadow-2xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md border border-blue-200 dark:border-blue-800">
                      {machine.machineCode}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      {machine.station}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {machineName}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {categoryName} · {machine.sections.length} Guides · {machine.faqs.length} FAQs
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
