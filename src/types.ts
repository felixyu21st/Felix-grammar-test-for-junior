export enum Difficulty {
  Junior = '初级',
  Middle = '中级',
  Senior = '高级'
}

export enum GrammarCategory {
  NonFinite = '非谓语动词',
  RelativeClause = '定语从句',
  AdverbialClause = '状语从句',
  NounClause = '名词性从句',
  Conjunction = '连词',
  Tense = '时态',
  Voice = '语态'
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  sentence: string[]; // e.g., ["", " tired, she still finished the report."]
  options: Option[];
  correctAnswerId: string;
  explanation: {
    rule: string;
    example: string;
    commonMistakes: string;
    reviewLink?: string;
  };
  difficulty: Difficulty;
  category: GrammarCategory;
}

export interface UserAnswer {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
}
