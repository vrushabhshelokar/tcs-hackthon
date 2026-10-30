# ShopFloor Buddy --- Final Hackathon MVP Build Plan

**Project:** ShopFloor Buddy\
**Challenge:** Factory Worker's AI Companion\
**Target environment:** Engineering and automobile-parts manufacturing\
**Build constraint:** Two-hour hackathon prototype\
**Document purpose:** Give an AI app builder a focused, testable
specification.

------------------------------------------------------------------------

## 1. Executive summary

ShopFloor Buddy is a mobile-first web application that helps factory
workers access machine-specific information in a language and format
they can understand.

A worker scans a machine QR code---or enters its printed machine
code---to open that machine's information page. The worker can select a
language, read short explanations, view simple visual guides, listen to
available audio, and browse a small set of pre-prepared FAQs.

The hackathon prototype must demonstrate one complete journey:

**Open app → identify demo machine → choose language → view information
→ play audio → browse an FAQ.**

This is an information-access and training-support prototype. It does
**not** certify worker competency, replace practical training, replace
supervisors, or provide authorization to operate machinery.

## 2. Problem being addressed

Newly hired and existing production workers in engineering and
automobile-parts factories may have difficulty independently accessing
machine-related information when documentation is lengthy, technical,
text-heavy, or unavailable in a language they understand.

Workers with different language backgrounds, reading abilities, and
levels of digital literacy may consequently depend on supervisors or
experienced colleagues for explanations.

The prototype explores a focused response to this problem: make a small
set of machine-specific information easier to find, understand, and
listen to.

This is a research-informed problem hypothesis. The prototype must not
claim that it has already reduced accidents, training time, or
production costs.

## 3. Target users

### Primary users

-   Newly hired machine operators.
-   Existing machine operators.
-   Assembly-line and production workers in engineering and
    automobile-parts factories.
-   Workers who prefer a regional language or benefit from audio and
    visual explanations.

### Secondary users

-   Supervisors and trainers who may use the app as a supplementary
    information aid.
-   Safety or training officers who could review and approve content in
    a future production version.

Do not assume that every migrant worker has low literacy or that every
local worker understands the same language.

## 4. MVP scope

Build only the following capabilities.

### Feature 1 --- Machine identification

-   Provide a primary **Scan QR Code** action.
-   A valid demo QR code should identify one demo machine and open its
    information page.
-   Provide a guaranteed fallback: enter a machine code manually or
    choose the demo machine from a short list.
-   For the hackathon, one demo machine is sufficient. A second machine
    is optional only if the first complete journey works.
-   Do not require a physical factory, printed QR label, external
    machine integration, or live factory database.

### Feature 2 --- Language selection

-   Support English, Hindi, and Marathi in the demo.
-   Show language names in their native scripts where possible.
-   Let the user change language at any point.
-   Store the selected language locally for the current browser.
-   Use prepared, reviewed demo translations. Do not rely on unverified
    live translation for safety-related content.
-   If a translation is unavailable, say so clearly rather than silently
    showing text in another language.

### Feature 3 --- Audio and visual explanations

-   Present short text with a clear, relevant icon or simple
    illustration.
-   Provide a **Play audio** control for each supported content item.
-   Provide **Play all** only if it can be implemented reliably without
    blocking other controls.
-   Use browser text-to-speech if a suitable voice is available for the
    selected language.
-   Detect unavailable voices and show a clear fallback message. Do not
    make audio playback a dependency for accessing the text.
-   Use large touch targets, readable typography, strong contrast, and
    simple navigation.

### Feature 4 --- Machine information and approved FAQ demo

-   Show a machine overview with clearly separated sections:
    -   General information
    -   Information and safety notices from the sample source
    -   Frequently asked questions
-   Use a small, pre-prepared dataset for one fictional/demo machine.
-   FAQs must be written in advance and tied to the supplied demo
    content.
-   If the source does not contain an answer, display: **"This
    information is not available in the demo content. Please ask your
    supervisor or safety officer."**
-   Do not build an unrestricted chatbot or allow the model to invent
    machine procedures.

## 5. Safety, accuracy, and trust requirements

These requirements override visual polish or feature completeness.

1.  Display a persistent notice wherever machine-related demo
    information appears:

    **"DEMO CONTENT --- NOT AN OFFICIAL FACTORY SOP. Do not use this
    prototype to operate machinery. Follow your factory's approved
    procedures and supervisor instructions."**

2.  Use a fictional machine or clearly labelled demonstration dataset.
    Do not present invented steps as real instructions for a drill
    press, lathe, press, CNC machine, or other industrial equipment.

3.  Do not generate, infer, or improvise:

    -   Machine start-up or shutdown procedures.
    -   Emergency-stop or emergency-recovery procedures.
    -   Guard, interlock, electrical, or maintenance instructions.
    -   PPE requirements for a specific machine.
    -   Troubleshooting actions that could expose a worker to danger.

4.  If actual factory documentation is supplied in a future version,
    content must be reviewed by an authorized factory safety or
    engineering representative before deployment.

5.  Preserve source references for any real content in a future version
    (document name, page or section, version, and approval status).

6.  Do not claim that translation alone makes a procedure safe or
    officially approved.

7.  The application supports formal induction and supervisor guidance;
    it does not replace either.

## 6. Demo user journey

### Screen 1 --- Welcome

-   App name and a short explanation.
-   Language selector.
-   Primary button: **Scan machine QR**.
-   Secondary action: **Enter machine code**.
-   A visible demo-content notice.

### Screen 2 --- Identify machine

-   QR scanner interface, if camera access is available.
-   Manual machine-code field and demo-machine selector as fallback.
-   For the demo, a sample QR code may encode the demo machine ID or its
    app route.
-   Handle invalid codes with a useful message and a way back.

### Screen 3 --- Machine overview

-   Demo machine name and ID.
-   Selected language and a visible language-switch control.
-   Persistent demo-content warning.
-   Three large navigation cards:
    -   Machine information
    -   Safety and information notices
    -   Common questions

### Screen 4 --- Information

-   Short, prepared content cards.
-   One clear icon or illustration per card where appropriate.
-   Play-audio control where a matching voice is available.
-   No fabricated operational sequence.

### Screen 5 --- Common questions

-   A short list of prepared questions.
-   Expand a question to show its prepared answer.
-   Audio playback where supported.
-   If an answer is not in the demo dataset, show the
    unavailable-information message and direct the worker to a
    supervisor or safety officer.

### Navigation

-   Keep a visible back action.
-   Allow the user to change language without restarting.
-   Allow the user to return home and identify another demo machine.

## 7. Data and content model

Use static JSON or the simplest data store supported by the app builder.
A live database is not required for the hackathon unless the builder
creates one automatically without delaying the core flow.

Suggested structure:

``` json
{
  "machineId": "DEMO-MACHINE-01",
  "machineName": "Demonstration Machine",
  "isDemo": true,
  "contentNotice": "Demo content — not an official factory SOP.",
  "availableLanguages": ["en", "hi", "mr"],
  "sections": [
    {
      "id": "general-info-1",
      "type": "general_information",
      "text": {
        "en": "Illustrative information about this demonstration machine.",
        "hi": "इस प्रदर्शन मशीन के बारे में उदाहरणात्मक जानकारी।",
        "mr": "या प्रात्यक्षिक मशीनबद्दल उदाहरणार्थ माहिती."
      },
      "source": "Prepared demonstration content"
    }
  ],
  "faqs": [
    {
      "id": "faq-1",
      "question": {
        "en": "Where can I find approved operating instructions?",
        "hi": "मुझे स्वीकृत संचालन निर्देश कहाँ मिलेंगे?",
        "mr": "मला मंजूर संचालन सूचना कुठे मिळतील?"
      },
      "answer": {
        "en": "Ask your supervisor or safety officer for the current approved procedure.",
        "hi": "वर्तमान स्वीकृत प्रक्रिया के लिए अपने पर्यवेक्षक या सुरक्षा अधिकारी से पूछें।",
        "mr": "सध्याच्या मंजूर प्रक्रियेसाठी आपल्या पर्यवेक्षक किंवा सुरक्षा अधिकाऱ्यांना विचारा."
      },
      "source": "Prepared demonstration FAQ"
    }
  ]
}
```

The example is a UI/data demonstration, not a machine operating
procedure. Have a fluent speaker review translations before presenting
them as accurate.

## 8. Technical implementation guidance

Keep the implementation deliberately simple.

### Frontend

-   Build a responsive, mobile-first web application.
-   Prefer the app builder's default supported frontend stack. If a
    choice is required, use React.
-   Use reusable components for language selection, machine
    identification, content cards, FAQ items, audio controls, and the
    demo warning.
-   Use local JSON/static data for the demo.

### QR handling

-   Use a browser QR-scanning library only if it works reliably in the
    builder's preview and deployed environment.
-   Request camera permission only after the user taps the scan action.
-   Always keep manual machine-code entry available.
-   Do not let camera permission failure block the demo.

### Audio

-   Use browser speech synthesis only when the selected language has an
    available voice.
-   Stop current playback when another item is played or the user leaves
    the screen.
-   Provide a visible unsupported/unavailable state.
-   Do not claim offline audio support unless it has been tested.

### Persistence

-   Local browser storage may remember the preferred language.
-   No user account, authentication, personal worker data, or backend
    database is required for this prototype.

### Avoid unnecessary integrations

Do not add WhatsApp, external translation APIs, PDF ingestion, cloud
storage, authentication, HR integrations, attendance, factory maps,
grievance reporting, analytics dashboards, PLC/sensor connections, or
kiosk hardware to the MVP.

## 9. Build priority and time management

Build in this order. Do not start a lower-priority item until the
previous item works.

1.  **Core screens and navigation:** welcome, machine overview,
    information, FAQs.
2.  **Seeded demo data:** one machine, three languages, prepared content
    and FAQs.
3.  **Language switching:** ensure every visible content area changes
    language correctly.
4.  **Audio playback:** implement and test available browser voices;
    retain text fallback.
5.  **Machine identification:** QR scan if feasible, plus manual code
    entry.
6.  **Polish and testing:** mobile layout, error states, demo warning,
    and complete user journey.

If time becomes limited, preserve this minimum working flow:

**Open app → choose language → select/enter demo machine → view prepared
information → play audio or see fallback → open an FAQ.**

A reliable manual fallback is better than a QR scanner that fails during
the presentation.

## 10. Acceptance checklist

The MVP is ready to demonstrate only when the following checks pass:

-   [ ] App opens in a mobile-sized viewport.
-   [ ] User can identify the demo machine by QR or manual code.
-   [ ] Invalid machine codes show a useful error.
-   [ ] User can switch between English, Hindi, and Marathi.
-   [ ] Machine information and FAQs change with the selected language.
-   [ ] Text remains readable and controls are easy to tap.
-   [ ] Audio plays when a supported voice is available.
-   [ ] A clear fallback appears when a voice is unavailable.
-   [ ] FAQ answers come only from prepared demo content.
-   [ ] Missing information is not guessed.
-   [ ] The demo warning is visible on machine-information screens.
-   [ ] No screen implies that the app authorizes or teaches real
    machine operation.
-   [ ] The complete user journey works without relying on an external
    API or physical factory equipment.

## 11. Demo presentation

Demonstrate one short scenario:

1.  A newly hired worker opens ShopFloor Buddy.
2.  The worker selects Hindi or Marathi.
3.  The worker scans the demo QR code or enters the machine code.
4.  The machine information page opens in the selected language.
5.  The worker opens an information card and plays its audio, if
    supported.
6.  The worker opens a prepared FAQ and hears or reads the answer.
7.  The app explains where to get official instructions when the
    requested information is unavailable.

State clearly that the content and machine are illustrative. Do not
claim measured reductions in accidents, training time, or production
costs.

## 12. Future scope --- explicitly outside the hackathon MVP

Only consider these after validating the core experience with actual
workers and factory representatives:

-   Authorized document upload and extraction from PDF manuals.
-   Human review and approval workflow for translated content.
-   Version control and expiry/review dates for factory instructions.
-   Additional languages and reviewed audio recordings.
-   Offline content access.
-   Shared factory devices or kiosk mode.
-   Worker feedback and carefully designed confidential grievance
    workflows.
-   Factory navigation.
-   WhatsApp access.
-   Supervisor and safety-officer dashboard.
-   Integration with factory identity, training, or HR systems.

These are future possibilities, not promised MVP capabilities.

------------------------------------------------------------------------

## Final instruction to the AI app builder

Build the smallest polished, functional mobile-first web prototype that
satisfies the acceptance checklist. Prioritize a complete and reliable
worker journey over feature count. Use prepared fictional demonstration
data, not invented real-world machine procedures. Do not add features
outside the MVP scope. If a capability such as camera scanning or
language-specific speech synthesis is unsupported in the preview
environment, keep the manual or text fallback working and explain the
limitation in the interface.
