export type BinCategory = 'organic' | 'residual' | 'recyclable';

export interface WasteItem {
  id: string;
  name: string;
  emoji: string;
  bin: BinCategory;
  defaultClass: string;
  confidence: number;
  rationale: string;
  isDirtyRecyclableSave?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WasteStatDay {
  day: string;
  generated: number;
  misplaced: number;
  organic: number;
  residual: number;
  recyclable: number;
}
