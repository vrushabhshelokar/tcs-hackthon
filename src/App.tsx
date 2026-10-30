/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Factory, 
  Info, 
  ShieldAlert, 
  HelpCircle, 
  LayoutDashboard, 
  ArrowLeft,
  RotateCcw
} from 'lucide-react';
import { Language, ActiveScreen, MachineData } from './types';
import { translations } from './data/translations';
import { DEMO_MACHINES } from './data/machines';
import { speechManager } from './utils/speech';

// Components
import { Header } from './components/Header';
import { WelcomeScreen } from './components/WelcomeScreen';
import { MachineOverview } from './components/MachineOverview';
import { MachineInfoCards } from './components/MachineInfoCards';
import { SafetyNotices } from './components/SafetyNotices';
import { MachineFAQs } from './components/MachineFAQs';
import { QRScannerModal } from './components/QRScannerModal';
import { DemoQRModal } from './components/DemoQRModal';
import { SupervisorHelpModal } from './components/SupervisorHelpModal';
import { SafetyWarningBanner } from './components/SafetyWarningBanner';

const SPEECH_RATES = [0.85, 1.0, 1.15];

export default function App() {
  // 1. Language state with localStorage persistence
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('shopfloor_language');
      if (saved === 'en' || saved === 'hi' || saved === 'mr') {
        return saved;
      }
    }
    return 'en';
  });

  // 2. Machine & Navigation State
  const [selectedMachine, setSelectedMachine] = useState<MachineData | null>(null);
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('welcome');

  // 3. Modals State
  const [isScannerOpen, setIsScannerOpen] = useState<boolean>(false);
  const [isDemoQRsOpen, setIsDemoQRsOpen] = useState<boolean>(false);
  const [isSupervisorModalOpen, setIsSupervisorModalOpen] = useState<boolean>(false);

  // 4. Dark Theme & Accessibility
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [speechRateIndex, setSpeechRateIndex] = useState<number>(1); // 1.0x default
  const currentSpeechRate = SPEECH_RATES[speechRateIndex];

  // Sync dark class on documentElement
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Handle language change
  const handleLanguageChange = (newLang: Language) => {
    speechManager.stop();
    setLanguage(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('shopfloor_language', newLang);
    }
  };

  // Handle machine selection
  const handleSelectMachine = (machine: MachineData) => {
    speechManager.stop();
    setSelectedMachine(machine);
    setActiveScreen('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return to welcome / machine select
  const handleResetMachine = () => {
    speechManager.stop();
    setSelectedMachine(null);
    setActiveScreen('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Change screen tab
  const handleNavigateTab = (screen: ActiveScreen) => {
    speechManager.stop();
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle speech rate
  const handleToggleSpeechRate = () => {
    setSpeechRateIndex((prev) => (prev + 1) % SPEECH_RATES.length);
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors pb-20 sm:pb-8">
      {/* Top Application Header */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        activeScreen={activeScreen}
        onNavigateHome={handleResetMachine}
        onOpenSupervisorHelp={() => setIsSupervisorModalOpen(true)}
        isDark={isDark}
        onToggleTheme={() => setIsDark((d) => !d)}
        speechRate={currentSpeechRate}
        onToggleSpeechRate={handleToggleSpeechRate}
      />

      {/* Main Body Container (Optimized for Mobile with Desktop Balance) */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-3.5 sm:px-6 py-4 sm:py-6">
        {/* Welcome Screen */}
        {activeScreen === 'welcome' && (
          <WelcomeScreen
            language={language}
            onLanguageChange={handleLanguageChange}
            onOpenScanner={() => setIsScannerOpen(true)}
            onOpenDemoQRs={() => setIsDemoQRsOpen(true)}
            onSelectMachine={handleSelectMachine}
            onManualCodeClick={() => setIsScannerOpen(true)}
          />
        )}

        {/* Machine Overview Screen */}
        {selectedMachine && activeScreen === 'overview' && (
          <MachineOverview
            machine={selectedMachine}
            language={language}
            speechRate={currentSpeechRate}
            onNavigateTab={handleNavigateTab}
            onChangeMachine={handleResetMachine}
          />
        )}

        {/* Machine Information Screen */}
        {selectedMachine && activeScreen === 'information' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {/* Top Navigation Strip */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleNavigateTab('overview')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-1 px-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.backToOverview}</span>
              </button>
              <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                {selectedMachine.machineCode}
              </span>
            </div>

            <SafetyWarningBanner language={language} compact={true} />

            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h1 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                {t.infoTab}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {selectedMachine.machineName[language] || selectedMachine.machineName.en}
              </p>
            </div>

            <MachineInfoCards
              machine={selectedMachine}
              language={language}
              speechRate={currentSpeechRate}
            />
          </div>
        )}

        {/* Safety & Information Notices Screen */}
        {selectedMachine && activeScreen === 'safety' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleNavigateTab('overview')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-1 px-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.backToOverview}</span>
              </button>
              <span className="font-mono text-xs font-bold text-rose-600 dark:text-rose-400">
                {selectedMachine.machineCode}
              </span>
            </div>

            <SafetyWarningBanner language={language} />

            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h1 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                {t.safetyTab}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {selectedMachine.machineName[language] || selectedMachine.machineName.en}
              </p>
            </div>

            <SafetyNotices
              machine={selectedMachine}
              language={language}
              speechRate={currentSpeechRate}
            />
          </div>
        )}

        {/* Machine FAQs Screen */}
        {selectedMachine && activeScreen === 'faqs' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleNavigateTab('overview')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white py-1 px-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.backToOverview}</span>
              </button>
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                {selectedMachine.machineCode}
              </span>
            </div>

            <SafetyWarningBanner language={language} compact={true} />

            <div className="border-b border-slate-200 dark:border-slate-800 pb-2">
              <h1 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                {t.faqsTab}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {selectedMachine.machineName[language] || selectedMachine.machineName.en}
              </p>
            </div>

            <MachineFAQs
              machine={selectedMachine}
              language={language}
              speechRate={currentSpeechRate}
              onOpenSupervisorHelp={() => setIsSupervisorModalOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Persistent Bottom Mobile Navigation Bar when Machine is Selected */}
      {selectedMachine && (
        <nav 
          aria-label="Machine navigation"
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-lg"
        >
          <div className="max-w-2xl mx-auto grid grid-cols-4 items-center h-16 px-2">
            {/* Tab 1: Overview */}
            <button
              type="button"
              onClick={() => handleNavigateTab('overview')}
              className={`flex flex-col items-center justify-center h-full min-h-[48px] transition-colors ${
                activeScreen === 'overview'
                  ? 'text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="text-[10px] tracking-tight mt-1">{t.overviewTab}</span>
            </button>

            {/* Tab 2: Information */}
            <button
              type="button"
              onClick={() => handleNavigateTab('information')}
              className={`flex flex-col items-center justify-center h-full min-h-[48px] transition-colors ${
                activeScreen === 'information'
                  ? 'text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Info className="w-5 h-5" />
              <span className="text-[10px] tracking-tight mt-1">{t.infoTab}</span>
            </button>

            {/* Tab 3: Safety */}
            <button
              type="button"
              onClick={() => handleNavigateTab('safety')}
              className={`flex flex-col items-center justify-center h-full min-h-[48px] transition-colors ${
                activeScreen === 'safety'
                  ? 'text-rose-600 dark:text-rose-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <ShieldAlert className="w-5 h-5" />
              <span className="text-[10px] tracking-tight mt-1">{t.safetyTab}</span>
            </button>

            {/* Tab 4: FAQs */}
            <button
              type="button"
              onClick={() => handleNavigateTab('faqs')}
              className={`flex flex-col items-center justify-center h-full min-h-[48px] transition-colors ${
                activeScreen === 'faqs'
                  ? 'text-emerald-600 dark:text-emerald-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <HelpCircle className="w-5 h-5" />
              <span className="text-[10px] tracking-tight mt-1">{t.faqsTab}</span>
            </button>
          </div>
        </nav>
      )}

      {/* QR Code Camera Scanner Modal */}
      <QRScannerModal
        isOpen={isScannerOpen}
        onClose={() => setIsScannerOpen(false)}
        onMachineIdentified={handleSelectMachine}
        onOpenDemoQRs={() => setIsDemoQRsOpen(true)}
        language={language}
      />

      {/* Printable / Test Demo QR Badges Modal */}
      <DemoQRModal
        isOpen={isDemoQRsOpen}
        onClose={() => setIsDemoQRsOpen(false)}
        onSelectMachine={handleSelectMachine}
        language={language}
      />

      {/* Supervisor & Safety Escalation Contacts Modal */}
      <SupervisorHelpModal
        isOpen={isSupervisorModalOpen}
        onClose={() => setIsSupervisorModalOpen(false)}
        language={language}
      />
    </div>
  );
}
