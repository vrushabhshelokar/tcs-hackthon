import React from 'react';
import { 
  Info, 
  ShieldAlert, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Factory, 
  MapPin, 
  Layers, 
  CheckCircle2,
  Volume2
} from 'lucide-react';
import { MachineData, Language, ActiveScreen } from '../types';
import { translations } from '../data/translations';
import { SafetyWarningBanner } from './SafetyWarningBanner';
import { AudioPlayerButton } from './AudioPlayerButton';

interface Props {
  machine: MachineData;
  language: Language;
  speechRate: number;
  onNavigateTab: (screen: ActiveScreen) => void;
  onChangeMachine: () => void;
}

export const MachineOverview: React.FC<Props> = ({
  machine,
  language,
  speechRate,
  onNavigateTab,
  onChangeMachine,
}) => {
  const t = translations[language];

  const machineName = machine.machineName[language] || machine.machineName.en;
  const categoryName = machine.category[language] || machine.category.en;
  const overviewAudioText = `${machineName}. Station: ${machine.station}. Cell: ${machine.cell}. Category: ${categoryName}. Prepared for information and safety training support.`;

  return (
    <div className="space-y-4 sm:space-y-5 animate-in fade-in duration-200">
      {/* Persistent Non-SOP Demo Warning */}
      <SafetyWarningBanner language={language} />

      {/* Machine Identification Header Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-lg border border-blue-200 dark:border-blue-800">
                {machine.machineCode}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                {t.statusOperational}
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
              {machineName}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
              {categoryName}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <AudioPlayerButton
              textToSpeak={overviewAudioText}
              language={language}
              rate={speechRate}
              size="sm"
              label="Listen Overview"
            />
          </div>
        </div>

        {/* Location & Cell Metadata Strip */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-700 text-xs">
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 p-2 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
            <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
            <div className="truncate">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">{t.stationLabel}</span>
              <span className="font-semibold">{machine.station}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 p-2 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
            <Factory className="w-4 h-4 text-blue-600 shrink-0" />
            <div className="truncate">
              <span className="text-[10px] text-slate-400 block uppercase font-bold">{t.cellLabel}</span>
              <span className="font-semibold truncate">{machine.cell}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Large Touch Navigation Cards (as specified in Screen 3) */}
      <div className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1">
          Machine Information Menu
        </h2>

        {/* Card 1: Machine Information */}
        <button
          type="button"
          onClick={() => onNavigateTab('information')}
          className="w-full text-left bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 p-4 sm:p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all flex items-center justify-between gap-4 group cursor-pointer shadow-xs"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
              <Info className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {t.infoTab}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {machine.sections.length} visual explanations & audio guides
              </p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0" />
        </button>

        {/* Card 2: Safety & Information Notices */}
        <button
          type="button"
          onClick={() => onNavigateTab('safety')}
          className="w-full text-left bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 p-4 sm:p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-rose-500 dark:hover:border-rose-500 transition-all flex items-center justify-between gap-4 group cursor-pointer shadow-xs"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 rounded-2xl group-hover:bg-rose-600 group-hover:text-white transition-colors shrink-0">
              <ShieldAlert className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                {t.safetyTab}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {machine.safetyNotices.length} critical precautions & PPE requirements
              </p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 group-hover:translate-x-1 transition-all shrink-0" />
        </button>

        {/* Card 3: Common Questions / Approved FAQs */}
        <button
          type="button"
          onClick={() => onNavigateTab('faqs')}
          className="w-full text-left bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 p-4 sm:p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all flex items-center justify-between gap-4 group cursor-pointer shadow-xs"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
              <HelpCircle className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {t.faqsTab}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {machine.faqs.length} pre-approved answers & supervisor escalation
              </p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0" />
        </button>
      </div>

      {/* Change Machine Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={onChangeMachine}
          className="w-full min-h-[48px] py-2.5 px-4 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>{t.backToHome}</span>
        </button>
      </div>
    </div>
  );
};
