import { Language } from '../types';

export interface VoiceStatus {
  supported: boolean;
  hasVoice: boolean;
  voiceName?: string;
  lang: Language;
}

class SpeechManager {
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private listeners: Set<() => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.loadVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        this.loadVoices();
      };
    }
  }

  private loadVoices() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.voices = window.speechSynthesis.getVoices();
      this.notifyListeners();
    }
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(fn => fn());
  }

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public getVoiceForLanguage(lang: Language): SpeechSynthesisVoice | null {
    if (!this.isSupported()) return null;
    if (this.voices.length === 0) {
      this.voices = window.speechSynthesis.getVoices();
    }

    const langCodes: Record<Language, string[]> = {
      en: ['en-IN', 'en-US', 'en-GB', 'en'],
      hi: ['hi-IN', 'hi_IN', 'hi'],
      mr: ['mr-IN', 'mr_IN', 'mr']
    };

    const targetCodes = langCodes[lang] || ['en'];

    // 1. Try exact or prefix match
    for (const code of targetCodes) {
      const match = this.voices.find(v => 
        v.lang.toLowerCase() === code.toLowerCase() || 
        v.lang.toLowerCase().startsWith(code.toLowerCase())
      );
      if (match) return match;
    }

    // 2. Try match on voice name (e.g. "Google हिन्दी", "Hindi India")
    const nameKeywords: Record<Language, string[]> = {
      en: ['english', 'india'],
      hi: ['hindi', 'हिन्दी', 'devanagari'],
      mr: ['marathi', 'मराठी']
    };

    const keywords = nameKeywords[lang] || [];
    for (const kw of keywords) {
      const match = this.voices.find(v => v.name.toLowerCase().includes(kw));
      if (match) return match;
    }

    // Fallback: If English, any english voice; for regional, return null if no native voice
    if (lang === 'en' && this.voices.length > 0) {
      return this.voices.find(v => v.lang.startsWith('en')) || this.voices[0];
    }

    return null;
  }

  public checkVoiceStatus(lang: Language): VoiceStatus {
    const supported = this.isSupported();
    if (!supported) {
      return { supported: false, hasVoice: false, lang };
    }
    const voice = this.getVoiceForLanguage(lang);
    return {
      supported: true,
      hasVoice: !!voice,
      voiceName: voice?.name,
      lang
    };
  }

  public speak(
    text: string,
    lang: Language,
    rate: number = 0.95,
    onStart?: () => void,
    onEnd?: () => void,
    onError?: (error: any) => void
  ): boolean {
    if (!this.isSupported()) {
      if (onError) onError(new Error("Speech synthesis not supported in this browser"));
      return false;
    }

    this.stop();

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = this.getVoiceForLanguage(lang);

      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        // Assign default lang code
        const codeMap: Record<Language, string> = {
          en: 'en-IN',
          hi: 'hi-IN',
          mr: 'mr-IN'
        };
        utterance.lang = codeMap[lang];
      }

      utterance.rate = rate; // 0.8 to 1.2
      utterance.pitch = 1.0;

      utterance.onstart = () => {
        if (onStart) onStart();
      };

      utterance.onend = () => {
        this.currentUtterance = null;
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        this.currentUtterance = null;
        if (onError) onError(e);
      };

      this.currentUtterance = utterance;
      window.speechSynthesis.speak(utterance);
      return true;
    } catch (err) {
      this.currentUtterance = null;
      if (onError) onError(err);
      return false;
    }
  }

  public stop(): void {
    if (this.isSupported()) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {
        console.warn("speech cancel error", e);
      }
    }
    this.currentUtterance = null;
  }
}

export const speechManager = new SpeechManager();
