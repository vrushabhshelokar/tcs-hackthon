import { Language } from '../types';

export interface UITranslation {
  appName: string;
  tagline: string;
  demoWarningTitle: string;
  demoWarningText: string;
  scanMachineQR: string;
  enterMachineCode: string;
  orSelectDemoMachine: string;
  viewDemoQRs: string;
  selectLanguage: string;
  machineIdLabel: string;
  stationLabel: string;
  cellLabel: string;
  statusLabel: string;
  statusOperational: string;
  backToHome: string;
  backToOverview: string;
  overviewTab: string;
  infoTab: string;
  safetyTab: string;
  faqsTab: string;
  playAudio: string;
  stopAudio: string;
  audioPlaying: string;
  voiceUnavailableNotice: string;
  listenToExplanation: string;
  expandAnswer: string;
  collapseAnswer: string;
  notFoundQuestion: string;
  notFoundAnswer: string;
  contactSupervisor: string;
  supervisorTitle: string;
  supervisorRole: string;
  safetyOfficerRole: string;
  supervisorNotice: string;
  close: string;
  cameraAccessDenied: string;
  cameraStarting: string;
  pointCameraAtQR: string;
  enterCodePlaceholder: string;
  submitCode: string;
  invalidCodeError: string;
  invalidCodeSubtext: string;
  tryAgain: string;
  selectDemoMachinePrompt: string;
  textSize: string;
  speedControl: string;
  speakingRate: string;
  audioSupportInfo: string;
  allApprovedAnswers: string;
  searchFaqPlaceholder: string;
  noFaqMatches: string;
  sourceNote: string;
}

export const translations: Record<Language, UITranslation> = {
  en: {
    appName: "ShopFloor Buddy",
    tagline: "Multilingual factory machine companion for quick information and safety guidance.",
    demoWarningTitle: "DEMO CONTENT — NOT AN OFFICIAL FACTORY SOP",
    demoWarningText: "Do not use this prototype to operate machinery. Follow your factory's approved procedures and supervisor instructions.",
    scanMachineQR: "Scan Machine QR Code",
    enterMachineCode: "Enter Machine Code",
    orSelectDemoMachine: "Or select a demonstration machine below:",
    viewDemoQRs: "View Printable Demo QR Codes",
    selectLanguage: "Language",
    machineIdLabel: "Machine ID",
    stationLabel: "Station",
    cellLabel: "Production Cell",
    statusLabel: "Status",
    statusOperational: "Demo Active",
    backToHome: "Change Machine",
    backToOverview: "Machine Menu",
    overviewTab: "Overview",
    infoTab: "Machine Information",
    safetyTab: "Safety & Notices",
    faqsTab: "Approved FAQs",
    playAudio: "Play Audio",
    stopAudio: "Stop Audio",
    audioPlaying: "Playing voice guide...",
    voiceUnavailableNotice: "Audio voice for this language is not installed on this browser. Text is fully readable above.",
    listenToExplanation: "Listen to this explanation in your selected language",
    expandAnswer: "View Answer",
    collapseAnswer: "Hide Answer",
    notFoundQuestion: "Don't see your question?",
    notFoundAnswer: "This information is not available in the demo content. Please ask your supervisor or safety officer.",
    contactSupervisor: "Ask Supervisor / Safety Officer",
    supervisorTitle: "Station Supervisor & Safety Contacts",
    supervisorRole: "Shift In-Charge (Cell 04)",
    safetyOfficerRole: "Plant Safety Officer",
    supervisorNotice: "If in any doubt or if warning lights illuminate, STOP work immediately and inform your supervisor.",
    close: "Close",
    cameraAccessDenied: "Camera permission is required to scan QR codes. You can also enter the machine code manually below.",
    cameraStarting: "Starting camera...",
    pointCameraAtQR: "Point your camera at the machine QR code plate",
    enterCodePlaceholder: "e.g. CNC-LATHE-01",
    submitCode: "Open Machine Info",
    invalidCodeError: "Machine Code Not Recognized",
    invalidCodeSubtext: "The scanned code or typed ID does not match any registered demonstration machine in this facility.",
    tryAgain: "Try Another Code",
    selectDemoMachinePrompt: "Select a prepared demonstration machine:",
    textSize: "Text Size",
    speedControl: "Voice Speed",
    speakingRate: "Speech Rate",
    audioSupportInfo: "Speech synthesis uses browser regional voice.",
    allApprovedAnswers: "All answers are from prepared, reviewed factory demo materials.",
    searchFaqPlaceholder: "Search common questions...",
    noFaqMatches: "No matching questions found in demo content.",
    sourceNote: "Source: Reviewed Demonstration Data"
  },
  hi: {
    appName: "शॉपफ्लोर बडी (ShopFloor Buddy)",
    tagline: "मशीन की जानकारी और सुरक्षा मार्गदर्शन के लिए बहुभाषी फैक्ट्री सहायक।",
    demoWarningTitle: "डेमो सामग्री — यह आधिकारिक फैक्ट्री SOP नहीं है",
    demoWarningText: "मशीनरी चलाने के लिए इस प्रोटोटाइप का उपयोग न करें। अपनी फैक्ट्री की स्वीकृत प्रक्रियाओं और सुपरवाइजर के निर्देशों का पालन करें।",
    scanMachineQR: "मशीन का QR कोड स्कैन करें",
    enterMachineCode: "मशीन कोड दर्ज करें",
    orSelectDemoMachine: "या नीचे दी गई डेमो मशीन चुनें:",
    viewDemoQRs: "डेमो QR कोड देखें",
    selectLanguage: "भाषा चुनें",
    machineIdLabel: "मशीन आईडी",
    stationLabel: "स्टेशन",
    cellLabel: "उत्पादन सेल",
    statusLabel: "स्थिति",
    statusOperational: "डेमो सक्रिय",
    backToHome: "मशीन बदलें",
    backToOverview: "मशीन मेनू",
    overviewTab: "मशीन विवरण",
    infoTab: "मशीन की जानकारी",
    safetyTab: "सुरक्षा एवं सूचनाएं",
    faqsTab: "स्वीकृत प्रश्नोत्तर (FAQ)",
    playAudio: "आवाज सुनें",
    stopAudio: "रोकें",
    audioPlaying: "ध्वनि चल रही है...",
    voiceUnavailableNotice: "इस ब्राउज़र में इस भाषा की आवाज़ उपलब्ध नहीं है। कृपया ऊपर लिखा विवरण पढ़ें।",
    listenToExplanation: "अपनी भाषा में यह विवरण सुनें",
    expandAnswer: "उत्तर देखें",
    collapseAnswer: "उत्तर छिपाएं",
    notFoundQuestion: "क्या आपका सवाल यहाँ नहीं है?",
    notFoundAnswer: "यह जानकारी डेमो सामग्री में उपलब्ध नहीं है। कृपया अपने सुपरवाइजर या सुरक्षा अधिकारी से पूछें।",
    contactSupervisor: "सुपरवाइजर / सुरक्षा अधिकारी से संपर्क करें",
    supervisorTitle: "स्टेशन सुपरवाइजर और सुरक्षा संपर्क",
    supervisorRole: "शिफ्ट इंचार्ज (सेल 04)",
    safetyOfficerRole: "प्लांट सुरक्षा अधिकारी",
    supervisorNotice: "यदि कोई संदेह हो या लाल बत्ती जले, तो तुरंत काम रोकें और अपने सुपरवाइजर को सूचित करें।",
    close: "बंद करें",
    cameraAccessDenied: "QR कोड स्कैन करने के लिए कैमरा अनुमति चाहिए। आप नीचे मशीन कोड भी लिख सकते हैं।",
    cameraStarting: "कैमरा शुरू हो रहा है...",
    pointCameraAtQR: "कैमरे को मशीन के QR कोड के सामने रखें",
    enterCodePlaceholder: "उदा. CNC-LATHE-01",
    submitCode: "मशीन जानकारी खोलें",
    invalidCodeError: "मशीन कोड मान्य नहीं है",
    invalidCodeSubtext: "दर्ज किया गया कोड किसी भी पंजीकृत डेमो मशीन से मेल नहीं खाता है।",
    tryAgain: "फिर से प्रयास करें",
    selectDemoMachinePrompt: "तैयार की गई डेमो मशीन चुनें:",
    textSize: "अक्षर आकार",
    speedControl: "आवाज की गति",
    speakingRate: "गति",
    audioSupportInfo: "आवाज़ ब्राउज़र के टेक्स्ट-टू-स्पीच इंजन द्वारा दी जा रही है।",
    allApprovedAnswers: "सभी उत्तर तैयार और जांची गई फैक्ट्री डेमो सामग्री से हैं।",
    searchFaqPlaceholder: "सवाल खोजें...",
    noFaqMatches: "डेमो सामग्री में कोई मिलता-जुलता सवाल नहीं मिला।",
    sourceNote: "स्रोत: जांची गई प्रदर्शन सामग्री"
  },
  mr: {
    appName: "शॉपफ्लोअर बडी (ShopFloor Buddy)",
    tagline: "कारखान्यातील कामगारांसाठी मशीन माहिती आणि सुरक्षा मार्गदर्शक बहुभाषिक मित्र.",
    demoWarningTitle: "प्रात्यक्षिक माहिती — अधिकृत फॅक्टरी SOP नाही",
    demoWarningText: "मशीन चालवण्यासाठी या ॲपचा वापर करू नका. आपल्या कारखान्याच्या अधिकृत कार्यपद्धती आणि पर्यवेक्षकांच्या सूचनांचे पालन करा.",
    scanMachineQR: "मशीनचा QR कोड स्कॅन करा",
    enterMachineCode: "मशीन कोड टाका",
    orSelectDemoMachine: "किंवा खालीलपैकी प्रात्यक्षिक मशीन निवडा:",
    viewDemoQRs: "नमुना QR कोड पहा",
    selectLanguage: "भाषा निवडा",
    machineIdLabel: "मशीन ओळख (ID)",
    stationLabel: "स्टेशन क्रमांक",
    cellLabel: "उत्पादन विभाग",
    statusLabel: "स्थिती",
    statusOperational: "डेमो सक्रिय",
    backToHome: "दुसरी मशीन निवडा",
    backToOverview: "मशीन मेनू",
    overviewTab: "मशीन माहिती",
    infoTab: "घटक व माहिती",
    safetyTab: "सुरक्षा व सूचना",
    faqsTab: "वारंवार विचारले जाणारे प्रश्न",
    playAudio: "आवाज ऐका",
    stopAudio: "थांबवा",
    audioPlaying: "ऑडिओ मार्गदर्शन सुरू आहे...",
    voiceUnavailableNotice: "या ब्राउझरमध्ये या भाषेचा आवाज उपलब्ध नाही. कृपया वरील मजकूर वाचा.",
    listenToExplanation: "तुमच्या भाषेत स्पष्टीकरण ऐका",
    expandAnswer: "उत्तर पहा",
    collapseAnswer: "उत्तर लपवा",
    notFoundQuestion: "आपला प्रश्न येथे दिसत नाही का?",
    notFoundAnswer: "ही माहिती या डेमोमध्ये उपलब्ध नाही. कृपया आपल्या पर्यवेक्षक (Supervisor) किंवा सुरक्षा अधिकाऱ्यांना विचारा.",
    contactSupervisor: "पर्यवेक्षक / सुरक्षा अधिकाऱ्यांशी संपर्क",
    supervisorTitle: "स्टेशन पर्यवेक्षक आणि सुरक्षा संपर्क",
    supervisorRole: "शिफ्ट इन्चार्ज (विभाग ०४)",
    safetyOfficerRole: "कारखाना सुरक्षा अधिकारी",
    supervisorNotice: "काही शंका असल्यास किंवा चेतावणी दिवा लागल्यास, त्वरित काम थांबवा आणि पर्यवेक्षकांना सांगा.",
    close: "बंद करा",
    cameraAccessDenied: "QR स्कॅन करण्यासाठी कॅमेरा परवानगी आवश्यक आहे. आपण खाली मशीन कोड लिहू शकता.",
    cameraStarting: "कॅमेरा सुरू होत आहे...",
    pointCameraAtQR: "कॅमेरा मशीनच्या QR कोड प्लेटसमोर धरा",
    enterCodePlaceholder: "उदा. CNC-LATHE-01",
    submitCode: "माहिती उघडा",
    invalidCodeError: "मशीन कोड चुकीचा आहे",
    invalidCodeSubtext: "स्कॅन केलेला किंवा टाकलेला कोड कोणत्याही नोंदणीकृत डेमो मशीनशी जुळत नाही.",
    tryAgain: "पुन्हा प्रयत्न करा",
    selectDemoMachinePrompt: "खालीलपैकी प्रात्यक्षिक मशीन निवडा:",
    textSize: "फॉन्ट आकार",
    speedControl: "आवाजाचा वेग",
    speakingRate: "वेग",
    audioSupportInfo: "ब्राउझरच्या स्पीच इंजिनद्वारे आवाज ऐकवला जातो.",
    allApprovedAnswers: "सर्व उत्तरे कारखान्याच्या मंजूर नमुना माहितीवर आधारित आहेत.",
    searchFaqPlaceholder: "प्रश्न शोधा...",
    noFaqMatches: "कोणताही संबंधित प्रश्न सापडला नाही.",
    sourceNote: "स्रोत: तपासलेली प्रात्यक्षिक सामग्री"
  }
};
