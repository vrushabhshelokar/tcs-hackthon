export type Language = 'en' | 'hi' | 'mr';

export interface LocalizedString {
  en: string;
  hi: string;
  mr: string;
}

export type SectionType = 'general_information' | 'safety_notice' | 'component_guide';

export interface MachineSection {
  id: string;
  type: SectionType;
  title: LocalizedString;
  content: LocalizedString;
  iconName: string;
  source: string;
  highlightTag?: LocalizedString;
}

export interface MachineFAQ {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  source: string;
  category?: 'safety' | 'operation' | 'maintenance' | 'escalation';
}

export interface MachineData {
  machineId: string;
  machineCode: string;
  machineName: LocalizedString;
  category: LocalizedString;
  station: string;
  cell: string;
  isDemo: true;
  contentNotice: string;
  availableLanguages: Language[];
  sections: MachineSection[];
  safetyNotices: MachineSection[];
  faqs: MachineFAQ[];
}

export type ActiveScreen = 
  | 'welcome' 
  | 'scanner' 
  | 'overview' 
  | 'information' 
  | 'safety' 
  | 'faqs';
