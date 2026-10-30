import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { speechManager, VoiceStatus } from '../utils/speech';

interface Props {
  textToSpeak: string;
  language: Language;
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  rate?: number;
}

export const AudioPlayerButton: React.FC<Props> = ({
  textToSpeak,
  language,
  label,
  className = '',
  size = 'md',
  rate = 0.95,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [voiceStatus, setVoiceStatus] = useState<VoiceStatus>(() => speechManager.checkVoiceStatus(language));
  const [voiceError, setVoiceError] = useState<string | null>(null);

  const t = translations[language];

  useEffect(() => {
    const updateStatus = () => {
      setVoiceStatus(speechManager.checkVoiceStatus(language));
    };

    updateStatus();
    const unsubscribe = speechManager.subscribe(updateStatus);
    return () => {
      unsubscribe();
      if (isPlaying) {
        speechManager.stop();
      }
    };
  }, [language]);

  const handleTogglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVoiceError(null);

    if (isPlaying) {
      speechManager.stop();
      setIsPlaying(false);
      return;
    }

    const success = speechManager.speak(
      textToSpeak,
      language,
      rate,
      () => {
        setIsPlaying(true);
      },
      () => {
        setIsPlaying(false);
      },
      (err) => {
        setIsPlaying(false);
        console.warn("Speech playback error:", err);
        setVoiceError(t.voiceUnavailableNotice);
      }
    );

    if (!success) {
      setVoiceError(t.voiceUnavailableNotice);
    }
  };

  const buttonHeights = {
    sm: 'min-h-[40px] px-3 py-1.5 text-xs',
    md: 'min-h-[44px] px-3.5 py-2 text-xs sm:text-sm',
    lg: 'min-h-[48px] px-4 py-2.5 text-sm sm:text-base font-semibold',
  };

  return (
    <div className="flex flex-col gap-1.5">
      <button
        type="button"
        onClick={handleTogglePlay}
        aria-label={isPlaying ? t.stopAudio : t.playAudio}
        className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all cursor-pointer ${
          isPlaying
            ? 'bg-amber-600 text-white shadow-md active:scale-95'
            : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white active:scale-95 shadow-xs'
        } ${buttonHeights[size]} ${className}`}
      >
        {isPlaying ? (
          <>
            <VolumeX className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t.stopAudio}</span>
            {/* Audio Wave Visualizer */}
            <span className="flex items-center gap-0.5 ml-1 h-4" aria-hidden="true">
              <span className="w-1 bg-white rounded-full animate-soundwave-1"></span>
              <span className="w-1 bg-white rounded-full animate-soundwave-2"></span>
              <span className="w-1 bg-white rounded-full animate-soundwave-3"></span>
              <span className="w-1 bg-white rounded-full animate-soundwave-4"></span>
            </span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{label || t.playAudio}</span>
          </>
        )}
      </button>

      {/* Fallback Notice if voice is unavailable or encountered error */}
      {voiceError && (
        <div 
          role="status"
          className="flex items-start gap-1.5 p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-[11px] leading-tight"
        >
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <span>{voiceError}</span>
        </div>
      )}
    </div>
  );
};
