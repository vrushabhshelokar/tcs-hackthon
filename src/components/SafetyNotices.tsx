import React from 'react';
import { 
  Lock, 
  Glasses, 
  AlertTriangle, 
  AlertOctagon, 
  ShieldAlert, 
  FileWarning 
} from 'lucide-react';
import { MachineData, Language } from '../types';
import { translations } from '../data/translations';
import { AudioPlayerButton } from './AudioPlayerButton';

interface Props {
  machine: MachineData;
  language: Language;
  speechRate: number;
}

const SAFETY_ICONS: Record<string, React.ElementType> = {
  Lock,
  Glasses,
  AlertTriangle,
  AlertOctagon,
  ShieldAlert,
};

export const SafetyNotices: React.FC<Props> = ({ machine, language, speechRate }) => {
  const t = translations[language];

  return (
    <div className="space-y-4">
      {/* Safety Notice Intro */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span className="font-semibold text-rose-600 dark:text-rose-400">
          Critical Safety Precautions ({machine.safetyNotices.length})
        </span>
        <span>{t.sourceNote}</span>
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:gap-4">
        {machine.safetyNotices.map((notice) => {
          const IconComponent = SAFETY_ICONS[notice.iconName] || FileWarning;
          const noticeTitle = notice.title[language] || notice.title.en;
          const noticeContent = notice.content[language] || notice.content.en;
          const tagLabel = notice.highlightTag ? (notice.highlightTag[language] || notice.highlightTag.en) : null;
          const speechText = `${noticeTitle}. ${noticeContent}`;

          return (
            <article
              key={notice.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-5 border-2 border-rose-200 dark:border-rose-900/60 shadow-xs flex flex-col justify-between gap-3.5"
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 rounded-xl shrink-0">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {noticeTitle}
                      </h3>
                      {tagLabel && (
                        <span className="text-[11px] font-bold text-rose-600 dark:text-rose-400 block mt-0.5">
                          {tagLabel}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                  {noticeContent}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {notice.source}
                </span>
                <AudioPlayerButton
                  textToSpeak={speechText}
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
