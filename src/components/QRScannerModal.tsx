import React, { useState, useRef, useEffect } from 'react';
import jsQR from 'jsqr';
import { Camera, X, AlertTriangle, ArrowRight, CheckCircle2, RotateCcw, Keyboard, QrCode } from 'lucide-react';
import { Language, MachineData } from '../types';
import { translations } from '../data/translations';
import { findMachineByCode } from '../data/machines';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onMachineIdentified: (machine: MachineData) => void;
  onOpenDemoQRs: () => void;
  language: Language;
}

export const QRScannerModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onMachineIdentified,
  onOpenDemoQRs,
  language,
}) => {
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [manualCode, setManualCode] = useState<string>('');
  const [scanError, setScanError] = useState<string | null>(null);
  const [scannedSuccessCode, setScannedSuccessCode] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const t = translations[language];

  // Start Camera
  const startCamera = async () => {
    setCameraError(null);
    setScanError(null);
    setScannedSuccessCode(null);

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setCameraError("Camera access is not supported by your current browser. Please enter the machine code manually.");
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.setAttribute('playsinline', 'true');
        await videoRef.current.play();
        setCameraActive(true);
        startScanLoop();
      }
    } catch (err: any) {
      console.warn("Camera start error:", err);
      setCameraError(t.cameraAccessDenied);
      setCameraActive(false);
    }
  };

  // Stop Camera
  const stopCamera = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  // Continuous QR scan loop
  const startScanLoop = () => {
    const scan = () => {
      if (!videoRef.current || !canvasRef.current || videoRef.current.readyState !== videoRef.current.HAVE_ENOUGH_DATA) {
        animationFrameRef.current = requestAnimationFrame(scan);
        return;
      }

      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d', { willReadFrequently: true });

      if (context) {
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: 'dontInvert',
        });

        if (code && code.data) {
          handleDetectedCode(code.data);
          return; // Stop scan loop on success
        }
      }

      animationFrameRef.current = requestAnimationFrame(scan);
    };

    animationFrameRef.current = requestAnimationFrame(scan);
  };

  const handleDetectedCode = (codeString: string) => {
    setScannedSuccessCode(codeString);
    stopCamera();

    const machine = findMachineByCode(codeString);
    if (machine) {
      setTimeout(() => {
        onMachineIdentified(machine);
        onClose();
      }, 500);
    } else {
      setScanError(`${t.invalidCodeError}: "${codeString}". ${t.invalidCodeSubtext}`);
    }
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualCode.trim()) return;

    setScanError(null);
    const machine = findMachineByCode(manualCode);
    if (machine) {
      stopCamera();
      onMachineIdentified(machine);
      onClose();
    } else {
      setScanError(`${t.invalidCodeError}: "${manualCode}". ${t.invalidCodeSubtext}`);
    }
  };

  useEffect(() => {
    if (isOpen) {
      startCamera();
    } else {
      stopCamera();
      setScanError(null);
      setScannedSuccessCode(null);
      setManualCode('');
    }

    return () => {
      stopCamera();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="scanner-modal-title"
    >
      <div 
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4 max-h-[94vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-600 text-white rounded-xl">
              <Camera className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 id="scanner-modal-title" className="text-base font-bold text-slate-900 dark:text-white">
                {t.scanMachineQR}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {t.pointCameraAtQR}
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

        {/* Viewfinder Area */}
        <div className="relative w-full aspect-square max-h-64 sm:max-h-72 bg-slate-950 rounded-2xl overflow-hidden flex items-center justify-center border-2 border-slate-700 shadow-inner">
          <video
            ref={videoRef}
            className={`w-full h-full object-cover ${cameraActive ? 'block' : 'hidden'}`}
          />
          <canvas ref={canvasRef} className="hidden" />

          {/* Target Reticle Overlay */}
          {cameraActive && !scannedSuccessCode && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-48 h-48 border-2 border-dashed border-blue-400/80 rounded-2xl relative animate-pulse flex items-center justify-center">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-blue-500 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-blue-500 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-blue-500 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-blue-500 rounded-br-lg"></div>
                <span className="text-[11px] font-semibold text-white/90 bg-black/60 px-2 py-0.5 rounded-full">
                  Align QR Code
                </span>
              </div>
            </div>
          )}

          {/* Success Detected Overlay */}
          {scannedSuccessCode && (
            <div className="absolute inset-0 bg-emerald-950/80 flex flex-col items-center justify-center text-white p-4 text-center animate-in zoom-in-95">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-2" />
              <p className="text-xs uppercase tracking-wider font-semibold text-emerald-200">Recognized</p>
              <p className="text-base font-bold font-mono">{scannedSuccessCode}</p>
            </div>
          )}

          {/* Camera Error or Fallback Message */}
          {cameraError && (
            <div className="p-4 text-center text-slate-300 space-y-2">
              <AlertTriangle className="w-8 h-8 text-amber-400 mx-auto" />
              <p className="text-xs font-medium leading-relaxed">{cameraError}</p>
              <button
                type="button"
                onClick={startCamera}
                className="mt-2 min-h-[36px] px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry Camera</span>
              </button>
            </div>
          )}

          {/* Camera Starting State */}
          {!cameraActive && !cameraError && (
            <div className="text-center text-slate-400 space-y-2">
              <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-xs font-medium">{t.cameraStarting}</p>
            </div>
          )}
        </div>

        {/* Scan Error Alert */}
        {scanError && (
          <div 
            role="alert"
            className="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-900 dark:text-red-200 rounded-xl text-xs space-y-1"
          >
            <div className="flex items-center gap-1.5 font-bold">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{t.invalidCodeError}</span>
            </div>
            <p className="text-[11px] text-red-800 dark:text-red-300">{scanError}</p>
            <div className="pt-1 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setScanError(null);
                  startCamera();
                }}
                className="text-xs font-bold underline hover:text-red-950 dark:hover:text-white"
              >
                {t.tryAgain}
              </button>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => {
                  onOpenDemoQRs();
                  onClose();
                }}
                className="text-xs font-bold underline hover:text-red-950 dark:hover:text-white"
              >
                {t.viewDemoQRs}
              </button>
            </div>
          </div>
        )}

        {/* Manual Code Input Fallback */}
        <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-800">
          <label htmlFor="manual-code-input" className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            {t.enterMachineCode} (Manual Fallback)
          </label>
          <form onSubmit={handleManualSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <input
                id="manual-code-input"
                type="text"
                value={manualCode}
                onChange={(e) => setManualCode(e.target.value)}
                placeholder={t.enterCodePlaceholder}
                className="w-full min-h-[44px] px-3 py-2 text-sm font-mono uppercase bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-600 text-slate-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              disabled={!manualCode.trim()}
              className="min-h-[44px] px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>{t.submitCode}</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </form>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Valid demo IDs: <code className="font-bold text-slate-700 dark:text-slate-300">CNC-LATHE-01</code>, <code className="font-bold text-slate-700 dark:text-slate-300">HYD-PRESS-02</code>, <code className="font-bold text-slate-700 dark:text-slate-300">DRILL-AUTO-03</code>
          </p>
        </div>

        {/* View Demo QR tags helper button */}
        <div className="pt-1">
          <button
            type="button"
            onClick={() => {
              onOpenDemoQRs();
              onClose();
            }}
            className="w-full min-h-[44px] py-2 px-3 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <QrCode className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>{t.viewDemoQRs}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
