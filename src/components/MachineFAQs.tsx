import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Search, 
  ShieldAlert, 
  UserCheck, 
  MessageSquareQuote,
  CheckCircle2
} from 'lucide-react';
import { MachineData, Language, MachineFAQ } from '../types';
import { translations } from '../data/translations';
import { AudioPlayerButton } from './AudioPlayerButton';

interface Props {
  machine: MachineData;
  language: Language;
  speechRate: number;
  onOpenSupervisorHelp: () => void;
}

export const MachineFAQs: React.FC<Props> = ({
  machine,
  language,
  speechRate,
  onOpenSupervisorHelp,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(machine.faqs[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const t = translations[language];

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = machine.faqs.filter((faq) => {
    if (!searchQuery.trim()) return true;
    const q = (faq.question[language] || faq.question.en).toLowerCase();
    const a = (faq.answer[language] || faq.answer.en).toLowerCase();
    const term = searchQuery.toLowerCase();
    return q.includes(term) || a.includes(term);
  });

  return (
    <div className="space-y-4">
      {/* Search Input Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t.searchFaqPlaceholder}
          className="w-full min-h-[44px] pl-10 pr-4 py-2 text-xs sm:text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-slate-900 dark:text-white"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            Clear
          </button>
        )}
      </div>

      {/* Info notice about pre-approved answers */}
      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 px-1">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
        <span>{t.allApprovedAnswers}</span>
      </div>

      {/* FAQs List */}
      <div className="space-y-2.5">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            const questionText = faq.question[language] || faq.question.en;
            const answerText = faq.answer[language] || faq.answer.en;
            const combinedSpeechText = `${questionText}. ${answerText}`;

            return (
              <div
                key={faq.id}
                className={`bg-white dark:bg-slate-800 rounded-2xl border transition-all ${
                  isExpanded
                    ? 'border-blue-600 dark:border-blue-500 ring-1 ring-blue-600/20 shadow-xs'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                {/* Header row / trigger */}
                <button
                  type="button"
                  onClick={() => toggleExpand(faq.id)}
                  aria-expanded={isExpanded}
                  className="w-full min-h-[52px] p-4 text-left flex items-start justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
                      isExpanded
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {questionText}
                    </span>
                  </div>
                  <div className="shrink-0 text-slate-400 pt-0.5">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expanded Answer Body */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-100 dark:border-slate-700 space-y-3 animate-in fade-in-50 duration-150">
                    <div className="flex items-start gap-2.5 bg-slate-50 dark:bg-slate-900/60 p-3 sm:p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
                      <MessageSquareQuote className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                        {answerText}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {faq.source}
                      </span>
                      <AudioPlayerButton
                        textToSpeak={combinedSpeechText}
                        language={language}
                        rate={speechRate}
                        size="sm"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-6 text-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              {t.noFaqMatches}
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 underline"
            >
              Reset Search Filter
            </button>
          </div>
        )}
      </div>

      {/* Mandatory Missing Information / Supervisor Escalation Card */}
      <div 
        role="region" 
        aria-label="Supervisor Escalation"
        className="mt-6 p-4 sm:p-5 bg-blue-50 dark:bg-blue-950/40 rounded-2xl border border-blue-200 dark:border-blue-900/60 space-y-3"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-600 text-white rounded-xl shrink-0">
            <UserCheck className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-blue-950 dark:text-blue-100">
              {t.notFoundQuestion}
            </h4>
            <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-200 leading-relaxed font-medium">
              {t.notFoundAnswer}
            </p>
          </div>
        </div>

        <div className="pt-1 flex items-center justify-between gap-3 flex-wrap">
          <AudioPlayerButton
            textToSpeak={`${t.notFoundQuestion}. ${t.notFoundAnswer}`}
            language={language}
            rate={speechRate}
            size="sm"
            label="Listen"
          />
          <button
            type="button"
            onClick={onOpenSupervisorHelp}
            className="min-h-[44px] px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>{t.contactSupervisor}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
