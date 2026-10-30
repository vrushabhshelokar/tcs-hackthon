import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { X, QrCode, ExternalLink, Check, Copy } from 'lucide-react';
import { DEMO_MACHINES } from '../data/machines';
import { Language, MachineData } from '../types';
import { translations } from '../data/translations';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectMachine: (machine: MachineData) => void;
  language: Language;
}

export const DemoQRModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSelectMachine,
  language,
}) => {
  const [selectedMachineIndex, setSelectedMachineIndex] = useState<number>(0);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const t = translations[language];
  const activeMachine = DEMO_MACHINES[selectedMachineIndex];

  useEffect(() => {
    if (!isOpen || !activeMachine) return;

    // Generate real QR code image
    QRCode.toDataURL(activeMachine.machineCode, {
      width: 260,
      margin: 2,
      color: {
        dark: '#0f172a',
        light: '#ffffff',
      },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('Error generating QR', err));
  }, [isOpen, selectedMachineIndex, activeMachine]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeMachine.machineCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-qr-modal-title"
    >
      <div 
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4 max-h-[92vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl">
              <QrCode className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 id="demo-qr-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
                {t.viewDemoQRs}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Machine identification tags for demonstration
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Machine Tabs */}
        <div className="flex gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-x-auto">
          {DEMO_MACHINES.map((m, idx) => (
            <button
              key={m.machineId}
              type="button"
              onClick={() => setSelectedMachineIndex(idx)}
              className={`flex-1 py-2 px-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap min-h-[40px] ${
                selectedMachineIndex === idx
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {m.machineCode}
            </button>
          ))}
        </div>

        {/* Machine details card & QR preview */}
        <div className="text-center space-y-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {activeMachine.machineName[language]}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {activeMachine.station} · {activeMachine.cell}
            </p>
          </div>

          {/* QR Display */}
          <div className="inline-block p-4 bg-white rounded-2xl border-2 border-slate-200 dark:border-slate-700 shadow-inner">
            {qrDataUrl ? (
              <img
                src={qrDataUrl}
                alt={`QR code for ${activeMachine.machineCode}`}
                className="w-48 h-48 sm:w-56 sm:h-56 mx-auto object-contain"
              />
            ) : (
              <div className="w-48 h-48 flex items-center justify-center text-slate-400 text-xs">
                Generating QR...
              </div>
            )}
          </div>

          {/* Code Copy Badge */}
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
              {activeMachine.machineCode}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="min-h-[36px] px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-lg flex items-center gap-1 transition-colors"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Scan this tag with the ShopFloor camera scanner, or click the direct button below.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              onSelectMachine(activeMachine);
              onClose();
            }}
            className="w-full min-h-[48px] py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-transform"
          >
            <span>Open {activeMachine.machineCode} Info</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};
