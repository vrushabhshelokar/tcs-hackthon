import React from 'react';
import { 
  ShieldCheck, 
  Droplet, 
  Trash2, 
  Tv, 
  Hand, 
  Eye, 
  Gauge, 
  Wrench, 
  Shield, 
  FileText,
  Volume2
} from 'lucide-react';
import { MachineData, Language } from '../types';
import { translations } from '../data/translations';
import { AudioPlayerButton } from './AudioPlayerButton';

interface Props {
  machine: MachineData;
  language: Language;
  speechRate: number;
}

const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  Droplet,
  Trash2,
  Tv,
  Hand,
  Eye,
  Gauge,
  Wrench,
  Shield,
  FileText,
};

export const MachineInfoCards: React.FC<Props> = ({ machine, language, speechRate }) => {
  const t = translations[language];

  return (
    <div className="space-y-4">
      {/* Intro info bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>{machine.sections.length} Prepared Explanations</span>
        <span>{t.sourceNote}</span>
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:gap-4">
        {machine.sections.map((section, idx) => {
          const IconComponent = ICON_MAP[section.iconName] || FileText;
          const sectionTitle = section.title[language] || section.title.en;
          const sectionContent = section.content[language] || section.content.en;
          const tagLabel = section.highlightTag ? (section.highlightTag[language] || section.highlightTag.en) : null;
          const combinedSpeechText = `${sectionTitle}. ${sectionContent}`;

          return (
            <article
              key={section.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-700 shadow-xs hover:border-slate-300 dark:hover:border-slate-600 transition-all flex flex-col justify-between gap-3.5"
            >
              <div className="space-y-2.5">
                {/* Header row with icon, title, and optional badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {sectionTitle}
                      </h3>
                      {tagLabel && (
                        <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 block mt-0.5">
                          {tagLabel}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content description */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                  {sectionContent}
                </p>
              </div>

              {/* Card Footer with Audio and Source */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {section.source}
                </span>
                <AudioPlayerButton
                  textToSpeak={combinedSpeechText}
                  language={language}
                  rate={speechRate}
                  size="sm"
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
