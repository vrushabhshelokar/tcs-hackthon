import { MachineData } from '../types';

export const DEMO_MACHINES: MachineData[] = [
  {
    machineId: "DEMO-MACHINE-01",
    machineCode: "CNC-LATHE-01",
    machineName: {
      en: "CNC Component Lathe — Station 04",
      hi: "सीएनसी कंपोनेंट लेथ — स्टेशन 04",
      mr: "सीएनसी घटक लेथ — स्टेशन ०४"
    },
    category: {
      en: "Shaft Turning & Machining",
      hi: "शाफ्ट टर्निंग और मशीनिंग",
      mr: "शाफ्ट टर्निंग आणि मशीनिंग"
    },
    station: "Bay 2, Stn-04",
    cell: "Powertrain Components Cell",
    isDemo: true,
    contentNotice: "DEMO CONTENT — NOT AN OFFICIAL FACTORY SOP. Do not use this prototype to operate machinery. Follow your factory's approved procedures and supervisor instructions.",
    availableLanguages: ["en", "hi", "mr"],
    sections: [
      {
        id: "lathe-part-1",
        type: "general_information",
        title: {
          en: "Workpiece Chuck & Safety Enclosure",
          hi: "वर्कपीस चक और सुरक्षा कवर",
          mr: "वर्कपीस चक आणि सुरक्षा कव्हर"
        },
        content: {
          en: "This machine turns cylindrical transmission shafts. The transparent sliding enclosure prevents metal chips and coolant spray from escaping the cutting chamber.",
          hi: "यह मशीन ऑटोमोबाइल ट्रांसमिशन शाफ्ट को आकार देती है। पारदर्शी स्लाइडिंग दरवाजा धातु के चिप्स और कूलेंट के छींटों को बाहर आने से रोकता है।",
          mr: "हे मशीन ऑटोमोबाईल ट्रान्समिशन शाफ्टचे टर्निंग करते. पारदर्शक सरकणारा दरवाजा कटिंग ऑइल आणि धातूचे बारीक तुकडे बाहेर उडण्यापासून रोखतो."
        },
        iconName: "ShieldCheck",
        source: "Demonstration Training Manual v1.2",
        highlightTag: {
          en: "Enclosure Area",
          hi: "सुरक्षा दरवाजा",
          mr: "सुरक्षा कव्हर"
        }
      },
      {
        id: "lathe-part-2",
        type: "general_information",
        title: {
          en: "Coolant & Fluid Level Sight Glass",
          hi: "कूलेंट स्तर निरीक्षण ग्लास",
          mr: "कूलंट पातळी तपासणी काच"
        },
        content: {
          en: "Located on the lower right flank of the unit. The fluid level should be observed between the upper and lower marker lines prior to shift start.",
          hi: "मशीन के निचले दाएं हिस्से पर स्थित है। शिफ्ट शुरू होने से पहले तरल स्तर को ऊपरी और निचली रेखा के बीच देखा जाना चाहिए।",
          mr: "मशीनच्या खालच्या उजव्या बाजूला आहे. शिफ्ट सुरू करण्यापूर्वी कुलंटची पातळी वरच्या आणि खालच्या खूण रेषेच्या दरम्यान असणे आवश्यक आहे."
        },
        iconName: "Droplet",
        source: "Demonstration Daily Checklist",
        highlightTag: {
          en: "Fluid Inspection",
          hi: "द्रव जांच",
          mr: "पातळी तपासणी"
        }
      },
      {
        id: "lathe-part-3",
        type: "general_information",
        title: {
          en: "Chip Conveyor & Swarf Bin",
          hi: "चिप कन्वेयर और कचरा बिन",
          mr: "चिप कन्व्हेयर आणि कचरा पेटी"
        },
        content: {
          en: "Machined steel swarf automatically discharges from the bottom trough into the mobile collection cart. Never reach inside the discharge chute by hand.",
          hi: "मशीनिंग के दौरान निकलने वाले धातु के छिलके नीचे की ट्रॉली में गिरते हैं। हाथ से कभी भी डिस्चार्ज रास्ते के अंदर न पहुंचें।",
          mr: "कापलेले धातूचे तुकडे खालून चाकांच्या ट्रॉलीमध्ये पडतात. बाहेर पडण्याच्या जागेत कधीही हाताने हात घालू नका."
        },
        iconName: "Trash2",
        source: "Demonstration Equipment Layout",
        highlightTag: {
          en: "Waste Swarf",
          hi: "कतरन निकासी",
          mr: "कचरा बाहेर पडणे"
        }
      },
      {
        id: "lathe-part-4",
        type: "general_information",
        title: {
          en: "Operator Control Pendant",
          hi: "ऑपरेटर कंट्रोल पेंडेंट स्क्रीन",
          mr: "ऑपरेटर नियंत्रण स्क्रीन"
        },
        content: {
          en: "Displays program cycle progress, cycle time, and spindle rpm. Operators only press green Cycle Start after verifying safety door lock engages.",
          hi: "यह स्क्रीन प्रोग्राम का समय और स्पिंडल गति दर्शाती है। सुरक्षा द्वार बंद होने की पुष्टि के बाद ही ऑपरेटर साइकिल शुरू करते हैं।",
          mr: "या स्क्रीनवर चालू सायकलची वेळ आणि फिरण्याचा वेग दिसतो. सेफ्टी डोअर लॉक झाल्याची खात्री झाल्यावरच हिरवे बटण दाबावे."
        },
        iconName: "Tv",
        source: "Operator Demonstration Overview",
        highlightTag: {
          en: "HMI Display",
          hi: "डिस्प्ले पैनल",
          mr: "स्क्रीन पॅनेल"
        }
      }
    ],
    safetyNotices: [
      {
        id: "lathe-safe-1",
        type: "safety_notice",
        title: {
          en: "Interlock Guard Never Bypassed",
          hi: "इंटरलॉक गार्ड को कभी बायपास न करें",
          mr: "इंटरलाक गार्ड कधीही बंद करू नका"
        },
        content: {
          en: "The magnetic door switch prevents spindle movement while the hood is open. Tampering or placing override magnets on interlocks is strictly prohibited.",
          hi: "दरवाजा खुला होने पर स्पिंडल को घूमने से रोकने के लिए मैग्नेटिक स्विच लगा है। इसे बाईपास करना या छेड़छाड़ करना सख्त मना है।",
          mr: "दरवाजा उघडा असताना मशीन फिरू नये म्हणून मॅग्नेटिक स्विच आहे. या स्विचमध्ये छेडछाड करणे सक्त मनाई आहे."
        },
        iconName: "Lock",
        source: "Plant Safety Policy Sample",
        highlightTag: {
          en: "Mandatory Safety",
          hi: "अनिवार्य सुरक्षा",
          mr: "सक्तीचे नियम"
        }
      },
      {
        id: "lathe-safe-2",
        type: "safety_notice",
        title: {
          en: "Required PPE in Station Zone",
          hi: "स्टेशन क्षेत्र में आवश्यक सुरक्षा उपकरण (PPE)",
          mr: "स्टेशन क्षेत्रात आवश्यक सुरक्षा साधने (PPE)"
        },
        content: {
          en: "Approved impact safety glasses with side shields, steel-toe boots, and ear protection are required. Never wear loose gloves near rotating chucks.",
          hi: "साइड शील्ड वाले सुरक्षा चश्मे, स्टील-टो जूते और कान की सुरक्षा अनिवार्य है। घूमते हुए चक्स के पास ढीले दस्ताने कभी न पहनें।",
          mr: "सुरक्षा चष्मा, स्टील-टो बूट आणि कानाचे संरक्षक वापरणे बंधनकारक आहे. फिरणाऱ्या भागाजवळ सैल हातमोजे घालू नका."
        },
        iconName: "Glasses",
        source: "PPE General Reference Card",
        highlightTag: {
          en: "PPE Protection",
          hi: "सुरक्षा साधन",
          mr: "सुरक्षा साधन"
        }
      },
      {
        id: "lathe-safe-3",
        type: "safety_notice",
        title: {
          en: "Emergency Stop (E-Stop) Location",
          hi: "इमर्जेंसी स्टॉप बटन का स्थान",
          mr: "आणीबाणी थांबवा (E-Stop) बटण"
        },
        content: {
          en: "A red mushroom push-button is located on both the front operator console and the side access panel. Press firmly to halt all motorized motion.",
          hi: "लाल रंग का बड़ा स्टॉप बटन ऑपरेटर कंसोल और साइड पैनल दोनों पर मौजूद है। आपात स्थिति में मोटर तुरंत रोकने के लिए इसे जोर से दबाएं।",
          mr: "लाल रंगाचे मोठे गोल बटण ऑपरेटर पॅनेलवर आणि बाजूला दिले आहे. संकटसमयी सर्व हालचाल थांबवण्यासाठी ते जोराने दाबा."
        },
        iconName: "AlertTriangle",
        source: "General Machine Safety Notice",
        highlightTag: {
          en: "E-Stop Awareness",
          hi: "आपातकालीन बटन",
          mr: "आणीबाणी बटन"
        }
      }
    ],
    faqs: [
      {
        id: "lathe-faq-1",
        category: "safety",
        question: {
          en: "Where can I find the official approved operating instructions?",
          hi: "मुझे स्वीकृत संचालन निर्देश (SOP) कहाँ मिलेंगे?",
          mr: "मला कारखान्याची अधिकृत कार्यपद्धती (SOP) कुठे मिळेल?"
        },
        answer: {
          en: "Official approved SOPs are physically laminated at the supervisor desk and stored in the plant document cabinet. Ask your shift supervisor for the latest revision.",
          hi: "आधिकारिक स्वीकृत SOP सुपरवाइजर डेस्क पर लेमिनेटेड रूप में और प्लांट दस्तावेज़ कैबिनेट में उपलब्ध हैं। नवीनतम प्रति के लिए अपने शिफ्ट सुपरवाइजर से पूछें।",
          mr: "अधिकृत मंजूर SOP सुपरवायझरच्या टेबलावर लॅमिनेटेड स्वरूपात उपलब्ध आहेत. नवीन प्रतीसाठी कृपया आपल्या शिफ्ट पर्यवेक्षकांशी संपर्क साधा."
        },
        source: "Reviewed Factory Onboarding FAQ"
      },
      {
        id: "lathe-faq-2",
        category: "operation",
        question: {
          en: "What does the amber signal tower light mean when flashing?",
          hi: "अंबर (पीली) लाइट चमकने का क्या अर्थ है?",
          mr: "पिवळा दिवा लुकलुकत असल्यास त्याचा काय अर्थ होतो?"
        },
        answer: {
          en: "An amber flash signals that the automatic machining cycle has completed and the machine is awaiting parts unloading, or the coolant level is near low.",
          hi: "पीली बत्ती का मतलब है कि साइकिल पूरी हो चुकी है और पुर्जा बाहर निकालने की प्रतीक्षा है, या कूलेंट का स्तर कम होने वाला है।",
          mr: "पिवळा दिवा दर्शवतो की मशीनचे काम पूर्ण झाले असून पार्ट बाहेर काढायचा आहे, किंवा कूलंट संपत आले आहे."
        },
        source: "Machine Status Light Guide"
      },
      {
        id: "lathe-faq-3",
        category: "safety",
        question: {
          en: "Can I use bare hands or a cotton cloth to clear metal chips?",
          hi: "क्या मैं हाथ या सूती कपड़े से धातु के छिलके हटा सकता हूँ?",
          mr: "मी हाताने किंवा सुती कपड्याने धातूचे तुकडे बाजूला करू शकतो का?"
        },
        answer: {
          en: "No. Never clear sharp chips with your bare hands or rag cloths, which can snag on burs. Always use the provided long-handled brass chip hook while the spindle is at rest.",
          hi: "नहीं। कभी भी नंगे हाथ या कपड़े से तेज चिप्स न हटाएं। स्पिंडल रुकने के बाद हमेशा दिए गए लंबे हैंडल वाले चिप हुक का उपयोग करें।",
          mr: "नाही! धारदार चिप्स हाताने किंवा कपड्याने कधीही काढू नका. मशीन पूर्ण थांबल्यावरच दिलेल्या लांब चिप हुकचा वापर करा."
        },
        source: "Safe Swarf Handling SOP Ref"
      },
      {
        id: "lathe-faq-4",
        category: "maintenance",
        question: {
          en: "What should I do if the cutting tool produces an unusual squealing sound?",
          hi: "यदि कटिंग टूल से असामान्य चीखने की आवाज आए तो मुझे क्या करना चाहिए?",
          mr: "टूलमधून अचानक वेगळा किंवा विचित्र आवाज आल्यास काय करावे?"
        },
        answer: {
          en: "Stop the cycle at the end of the stroke or press Feed Hold. Do not force the cycle. Inform your tooling setter or line supervisor immediately to inspect tool insert wear.",
          hi: "तुरंत फीड होल्ड दबाएं या चक्र समाप्त करें। मशीन पर दबाव न डालें। टूल घिसने की जांच के लिए तुरंत टूल सेटर या लाइन सुपरवाइजर को बताएं।",
          mr: "सायकल थांबवा किंवा फीड होल्ड दाबा. जबरदस्तीने मशीन चालवू नका. टूलची झीज तपासण्यासाठी त्वरित टूल सेटर किंवा पर्यवेक्षकांना सांगा."
        },
        source: "Tool Wear Guidance Sheet"
      },
      {
        id: "lathe-faq-5",
        category: "escalation",
        question: {
          en: "How do I perform a machine shutdown or emergency lockout?",
          hi: "मैं मशीन शटडाउन या लॉकआउट प्रक्रिया कैसे करूं?",
          mr: "मशीनचे शटडाउन किंवा लॉकआउट कसे करावे?"
        },
        answer: {
          en: "This information is not available in the demo content. Lockout/Tagout (LOTO) is an authorized procedure. Please ask your supervisor or safety officer.",
          hi: "यह जानकारी डेमो सामग्री में उपलब्ध नहीं है। लॉकआउट/टैगआउट केवल अधिकृत व्यक्तियों के लिए है। कृपया अपने सुपरवाइजर या सुरक्षा अधिकारी से पूछें।",
          mr: "ही माहिती या डेमोमध्ये उपलब्ध नाही. मशीन लॉकआउट ही अधिकृत प्रक्रिया आहे. कृपया आपल्या पर्यवेक्षक किंवा सुरक्षा अधिकाऱ्यांशी संपर्क साधा."
        },
        source: "Prepared Non-Operational Fallback"
      }
    ]
  },
  {
    machineId: "HYD-PRESS-02",
    machineCode: "HYD-PRESS-02",
    machineName: {
      en: "50-Ton Hydraulic Stamping Press — Station 02",
      hi: "50-टन हाइड्रोलिक स्टैम्पिंग प्रेस — स्टेशन 02",
      mr: "५०-टन हायड्रॉलिक स्टॅम्पिंग प्रेस — स्टेशन ०२"
    },
    category: {
      en: "Sheet Metal Bracket Forming",
      hi: "शीट मेटल ब्रैकेट फॉर्मिंग",
      mr: "शीट मेटल ब्रॅकेट तयार करणे"
    },
    station: "Bay 1, Stn-02",
    cell: "Chassis Bracket Forming Cell",
    isDemo: true,
    contentNotice: "DEMO CONTENT — NOT AN OFFICIAL FACTORY SOP. Do not use this prototype to operate machinery. Follow your factory's approved procedures and supervisor instructions.",
    availableLanguages: ["en", "hi", "mr"],
    sections: [
      {
        id: "press-part-1",
        type: "general_information",
        title: {
          en: "Dual Anti-Tie-Down Palm Buttons",
          hi: "दोहरे पाम नियंत्रण बटन",
          mr: "दोन हातांची सुरक्षा बटणे"
        },
        content: {
          en: "The press ram descends only when both spaced palm buttons are pressed simultaneously within 0.5 seconds, ensuring both hands remain outside the die danger area.",
          hi: "प्रेस केवल तभी नीचे आती है जब दोनों हाथों से एक साथ दो अलग-अलग बटन दबाए जाते हैं। इससे हाथ डाई के खतरे वाले क्षेत्र से बाहर रहते हैं।",
          mr: "प्रेस तेव्हाच खाली येते जेव्हा दोन्ही हातांनी एकाच वेळी दोन स्वतंत्र बटणे दाबली जातात, ज्यामुळे दोन्ही हात सुरक्षित राहतात."
        },
        iconName: "Hand",
        source: "Demonstration Press Safety Standard",
        highlightTag: {
          en: "Hand Safety",
          hi: "हाथ सुरक्षा",
          mr: "हात सुरक्षा"
        }
      },
      {
        id: "press-part-2",
        type: "general_information",
        title: {
          en: "Infrared Optical Light Curtain",
          hi: "इन्फ्रारेड लाइट कर्टेन सुरक्षा सेंसर",
          mr: "इन्फ्रारेड लाइट कर्टन सेन्सर"
        },
        content: {
          en: "An invisible infrared beam barrier surrounds the die opening. If any worker reaches across the beam while the ram is moving down, the hydraulic valve instantly disengages.",
          hi: "डाई के सामने अदृश्य सेंसर बीम लगी है। यदि प्रेस चलते समय कोई हाथ बीम को पार करता है, तो मशीन तुरंत रुक जाती है।",
          mr: "डाईसमोर इन्फ्रारेड बीमचा सुरक्षा पडदा आहे. प्रेस खाली येत असताना कोणी हात पुढे केल्यास मशीन जागेवरच थांबते."
        },
        iconName: "Eye",
        source: "Press Safeguarding Guideline",
        highlightTag: {
          en: "Presence Sensor",
          hi: "सेंसर सुरक्षा",
          mr: "सेन्सर सुरक्षा"
        }
      },
      {
        id: "press-part-3",
        type: "general_information",
        title: {
          en: "Hydraulic System Pressure Gauge",
          hi: "हाइड्रोलिक सिस्टम प्रेशर गेज",
          mr: "हायड्रॉलिक प्रेशर मीटर"
        },
        content: {
          en: "The analog gauge on the top manifold displays system pressure in bar. The green sector indicates the normal operating pressure range.",
          hi: "ऊपरी हिस्से पर लगा गेज बार में दबाव दिखाता है। हरा क्षेत्र सामान्य कार्य दबाव का संकेत देता है।",
          mr: "वरील मीटर हायड्रॉलिक दाब बारमध्ये दाखवतो. हिरवा भाग सुरक्षित कार्याचा दाब दर्शवतो."
        },
        iconName: "Gauge",
        source: "Demonstration Fluid System Specs",
        highlightTag: {
          en: "Pressure Meter",
          hi: "दबाव मीटर",
          mr: "दाब मीटर"
        }
      }
    ],
    safetyNotices: [
      {
        id: "press-safe-1",
        type: "safety_notice",
        title: {
          en: "Die Area Hands-Free Clearance",
          hi: "डाई क्षेत्र में हाथ न डालें",
          mr: "डाईच्या भागात हात घालू नये"
        },
        content: {
          en: "Always use magnetic sheet pickers or pneumatic vacuum wands to position steel blanks. Never reach bodily between upper and lower tooling dies.",
          hi: "शीट को सही जगह रखने के लिए हमेशा मैग्नेटिक पिकर या वैक्यूम स्टिक का उपयोग करें। डाई के बीच कभी हाथ न डालें।",
          mr: "शीट ठेवण्यासाठी नेहमी मॅग्नेटिक स्टिकचा वापर करा. वरच्या आणि खालच्या डाईच्या मध्ये हात कधीही घालू नका."
        },
        iconName: "AlertOctagon",
        source: "Stamping Press Safety Rules",
        highlightTag: {
          en: "Pinch Hazard",
          hi: "गंभीर खतरा",
          mr: "गंभीर धोका"
        }
      },
      {
        id: "press-safe-2",
        type: "safety_notice",
        title: {
          en: "Report Hydraulic Oil Leaks Immediately",
          hi: "तेल रिसाव होने पर तुरंत सूचित करें",
          mr: "ऑइल गळती झाल्यास त्वरित सांगा"
        },
        content: {
          en: "High-pressure hydraulic fluid can penetrate skin. If any puddle, drip, or hiss is noticed, stop operation and alert maintenance.",
          hi: "उच्च दबाव वाला तेल त्वचा के लिए बहुत खतरनाक हो सकता है। कोई रिसाव या बूंद दिखे तो तुरंत काम रोकें और सूचना दें।",
          mr: "हाय-प्रेशर ऑइल शरीरासाठी अत्यंत धोकादायक ठरू शकते. ऑइल गळती दिसल्यास त्वरित काम थांबवून मेंटेनन्सला सांगा."
        },
        iconName: "AlertTriangle",
        source: "Hydraulic Hazard Bulletin",
        highlightTag: {
          en: "High Pressure",
          hi: "उच्च दबाव",
          mr: "उच्च दाब"
        }
      }
    ],
    faqs: [
      {
        id: "press-faq-1",
        category: "safety",
        question: {
          en: "What should I do if a blank gets misaligned in the die?",
          hi: "यदि शीट डाई में गलत बैठ जाए तो मुझे क्या करना चाहिए?",
          mr: "डाईमध्ये पत्र्याचा तुकडा तिरका बसल्यास काय करावे?"
        },
        answer: {
          en: "Do not attempt to push it with your fingers. Use the brass alignment tool while the press is fully stopped, or call your supervisor.",
          hi: "उंगलियों से धकेलने की कोशिश न करें। मशीन बंद होने पर पीतल के टूल का उपयोग करें या सुपरवाइजर को बुलाएं।",
          mr: "बोटांनी सरकवण्याचा प्रयत्न करू नका. मशीन पूर्ण थांबवून पितळी साधनाने सरकवा किंवा पर्यवेक्षकांना बोलवा."
        },
        source: "Demonstration Press FAQs"
      },
      {
        id: "press-faq-2",
        category: "safety",
        question: {
          en: "How do I check if the light curtain is functioning before my shift?",
          hi: "शिफ्ट से पहले लाइट कर्टेन की जांच कैसे करें?",
          mr: "शिफ्ट सुरू करण्यापूर्वी लाइट कर्टन कसा तपासावा?"
        },
        answer: {
          en: "Refer to the supervisor-led pre-shift test procedure card. A test rod is passed through the beam to verify instant stop lights trigger.",
          hi: "सुपरवाइजर द्वारा दी गई प्री-शिफ्ट टेस्ट प्रक्रिया का पालन करें। टेस्ट रॉड डालकर जांच की जाती है कि लाल लाइट जलती है या नहीं।",
          mr: "पर्यवेक्षकांनी दिलेल्या तपासणी पद्धतीनुसार टेस्ट रॉड बीमसमोर धरून दिवा लाल होतो का ते तपासावे लागते."
        },
        source: "Safety Interlock Demonstration"
      },
      {
        id: "press-faq-3",
        category: "escalation",
        question: {
          en: "What is the procedure for changing the stamping die?",
          hi: "स्टैम्पिंग डाई बदलने की क्या प्रक्रिया है?",
          mr: "स्टॅम्पिंग डाई बदलण्याची पद्धत काय आहे?"
        },
        answer: {
          en: "This information is not available in the demo content. Die changeover requires certified toolmakers and crane riggers. Please ask your supervisor.",
          hi: "यह जानकारी डेमो सामग्री में उपलब्ध नहीं है। डाई बदलना केवल अधिकृत टूलमेकर्स का कार्य है। कृपया अपने सुपरवाइजर से पूछें।",
          mr: "ही माहिती या डेमोमध्ये उपलब्ध नाही. डाई बदलणे हे केवळ प्रमाणित टूलमेकरचे काम आहे. कृपया पर्यवेक्षकांशी संपर्क साधा."
        },
        source: "Prepared Non-Operational Fallback"
      }
    ]
  },
  {
    machineId: "DRILL-AUTO-03",
    machineCode: "DRILL-AUTO-03",
    machineName: {
      en: "Multi-Spindle Gang Drill — Station 07",
      hi: "मल्टी-स्पिंडल ड्रिल मशीन — स्टेशन 07",
      mr: "मल्टी-स्पिंडल गँग ड्रिल — स्टेशन ०७"
    },
    category: {
      en: "Flange Hole Drilling & Chamfering",
      hi: "फ्लैंज होल ड्रिलिंग और चम्फरिंग",
      mr: "फ्लॅंज होल ड्रिलिंग आणि चॅम्फरिंग"
    },
    station: "Bay 3, Stn-07",
    cell: "Engine Block Sub-Assembly Cell",
    isDemo: true,
    contentNotice: "DEMO CONTENT — NOT AN OFFICIAL FACTORY SOP. Do not use this prototype to operate machinery. Follow your factory's approved procedures and supervisor instructions.",
    availableLanguages: ["en", "hi", "mr"],
    sections: [
      {
        id: "drill-part-1",
        type: "general_information",
        title: {
          en: "Multi-Spindle Tooling Head",
          hi: "मल्टी-स्पिंडल टूल हेड",
          mr: "मल्टी-स्पिंडल टूल हेड"
        },
        content: {
          en: "Carries 6 carbide drill bits simultaneously to drill precision mounting holes into cast aluminium casing flanges in a single pass.",
          hi: "इसमें एक साथ 6 कार्बाइड ड्रिल बिट लगे हैं जो एल्यूमीनियम केसिंग में एक ही बार में छेद करते हैं।",
          mr: "यामध्ये एकाच वेळी ६ ड्रिल बिट्स असून ते ॲल्युमिनियम केसिंगमध्ये एकाच वेळी अचूक छिद्रे पाडतात."
        },
        iconName: "Wrench",
        source: "Demonstration Drill Specifications",
        highlightTag: {
          en: "Spindle Array",
          hi: "स्पिंडल समूह",
          mr: "स्पिंडल संच"
        }
      },
      {
        id: "drill-part-2",
        type: "general_information",
        title: {
          en: "Pneumatic Clamp & Locator Pins",
          hi: "न्यूमेटिक क्लैंप और लोकेटर पिन",
          mr: "न्यूमॅटिक क्लॅम्प आणि लोकेटर पिन"
        },
        content: {
          en: "Heavy-duty pneumatic clamps secure the casting firmly against two hardened locator pins before the drill head descends.",
          hi: "ड्रिल हेड नीचे आने से पहले न्यूमेटिक क्लैंप पुर्जे को दो लोकेटर पिनों के सहारे मजबूती से पकड़ते हैं।",
          mr: "ड्रिल खाली येण्यापूर्वी न्यूमॅटिक क्लॅम्प्स पार्टला दोन लोकेटर पिनवर घट्ट पकडून ठेवतात."
        },
        iconName: "Shield",
        source: "Clamping Standard Overview",
        highlightTag: {
          en: "Fixture Clamping",
          hi: "क्लैम्पिंग",
          mr: "फिक्सचर"
        }
      }
    ],
    safetyNotices: [
      {
        id: "drill-safe-1",
        type: "safety_notice",
        title: {
          en: "No Loose Clothing or Ties Near Drill Head",
          hi: "ड्रिल के पास ढीले कपड़े या धागे न हों",
          mr: "ड्रिलजवळ सैल कपडे किंवा धागे असू नयेत"
        },
        content: {
          en: "Rotating drill flutes can catch loose sleeves, neck chains, or hair. Hair nets and secured cuffs are strictly enforced.",
          hi: "घूमते हुए ड्रिल बिट ढीली आस्तीन या बालों को खींच सकते हैं। बाल बांधना और आस्तीन सुरक्षित रखना अनिवार्य है।",
          mr: "फिरणाऱ्या ड्रिलमध्ये सैल बाह्या किंवा केस अडकण्याचा मोठा धोका असतो. केस बांधणे आणि कपडे नीट असणे बंधनकारक आहे."
        },
        iconName: "AlertTriangle",
        source: "General Machine Safety",
        highlightTag: {
          en: "Entanglement Warning",
          hi: "उलझाव का खतरा",
          mr: "अडकण्याचा धोका"
        }
      }
    ],
    faqs: [
      {
        id: "drill-faq-1",
        category: "operation",
        question: {
          en: "What should I do if a drill bit breaks during drilling?",
          hi: "ड्रिलिंग के दौरान बिट टूट जाए तो क्या करें?",
          mr: "ड्रिल करताना बिट तुटल्यास काय करावे?"
        },
        answer: {
          en: "Hit E-Stop immediately. Do not touch the hot metal bit. Tag the component as 'REJECT — SUSPECT BROKEN TOOL' and notify your supervisor.",
          hi: "तुरंत ई-स्टॉप दबाएं। गर्म बिट को न छुएं। पुर्जे पर 'रिजेक्ट - टूटा टूल' का टैग लगाएं और सुपरवाइजर को बताएं।",
          mr: "त्वरित ई-स्टॉप दाबा. गरम बिटला हात लावू नका. पार्टवर 'रिजेक्ट - तुटलेले टूल' चा टॅग लावा आणि पर्यवेक्षकांना सांगा."
        },
        source: "Tool Failure Protocol"
      },
      {
        id: "drill-faq-2",
        category: "escalation",
        question: {
          en: "How do I calibrate drill depth and spindle speed?",
          hi: "ड्रिल की गहराई और गति कैसे सेट करें?",
          mr: "ड्रिलची खोली आणि वेग कसा ठरवावा?"
        },
        answer: {
          en: "This information is not available in the demo content. Spindle speeds and feeds are preset by manufacturing engineering. Please ask your supervisor.",
          hi: "यह जानकारी डेमो सामग्री में उपलब्ध नहीं है। गति और गहराई इंजीनियरिंग विभाग द्वारा निर्धारित की जाती है। कृपया अपने सुपरवाइजर से पूछें।",
          mr: "ही माहिती या डेमोमध्ये उपलब्ध नाही. ड्रिलचा वेग आणि खोली इंजिनिअरिंग विभाग ठरवतो. कृपया पर्यवेक्षकांना विचारा."
        },
        source: "Prepared Non-Operational Fallback"
      }
    ]
  }
];

export function findMachineByCode(code: string): MachineData | undefined {
  if (!code) return undefined;
  const cleanCode = code.trim().toUpperCase();
  return DEMO_MACHINES.find(m => 
    m.machineId.toUpperCase() === cleanCode || 
    m.machineCode.toUpperCase() === cleanCode
  );
}
