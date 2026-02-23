import { Question, Difficulty, GrammarCategory } from '../types';

export const questions: Question[] = [
  {
    id: '1',
    sentence: ['', ' tired, she still finished the report.'],
    options: [
      { id: 'a', text: 'Although' },
      { id: 'b', text: 'Because' },
      { id: 'c', text: 'Unless' },
      { id: 'd', text: 'Since' }
    ],
    correctAnswerId: 'a',
    explanation: {
      rule: 'Although 引导让步状语从句，表示“尽管”。句意为“尽管很累，她还是完成了报告”。',
      example: 'Although it was raining, they went out for a walk.',
      commonMistakes: '容易与 but 连用。注意：although 和 but 不能同时出现在一个句子中。',
      reviewLink: 'https://www.bing.com/search?q=although+usage'
    },
    difficulty: Difficulty.Junior,
    category: GrammarCategory.AdverbialClause
  },
  {
    id: '2',
    sentence: ['The boy ', ' is standing under the tree is my brother.'],
    options: [
      { id: 'a', text: 'which' },
      { id: 'b', text: 'who' },
      { id: 'c', text: 'whom' },
      { id: 'd', text: 'whose' }
    ],
    correctAnswerId: 'b',
    explanation: {
      rule: 'who 引导定语从句，修饰先行词 the boy（人），且在从句中作主语。',
      example: 'The girl who is dancing is my sister.',
      commonMistakes: '混淆 which 和 who。which 修饰物，who 修饰人。',
      reviewLink: 'https://www.bing.com/search?q=relative+clause+who+vs+which'
    },
    difficulty: Difficulty.Junior,
    category: GrammarCategory.RelativeClause
  },
  {
    id: '3',
    sentence: ['', ' the homework, he went out to play football.'],
    options: [
      { id: 'a', text: 'Finish' },
      { id: 'b', text: 'Finished' },
      { id: 'c', text: 'Finishing' },
      { id: 'd', text: 'To finish' }
    ],
    correctAnswerId: 'c',
    explanation: {
      rule: '现在分词（doing）作时间状语，表示动作与主句动作几乎同时发生或紧接着发生，且逻辑主语 he 与 finish 是主动关系。',
      example: 'Hearing the news, they jumped with joy.',
      commonMistakes: '误用过去分词 finished。finished 表示被动或完成，而此处是主动关系。',
      reviewLink: 'https://www.bing.com/search?q=present+participle+as+adverbial'
    },
    difficulty: Difficulty.Middle,
    category: GrammarCategory.NonFinite
  },
  {
    id: '4',
    sentence: ['I don\'t know ', ' he will come or not.'],
    options: [
      { id: 'a', text: 'if' },
      { id: 'b', text: 'whether' },
      { id: 'c', text: 'that' },
      { id: 'd', text: 'when' }
    ],
    correctAnswerId: 'b',
    explanation: {
      rule: 'whether ... or not 是固定搭配，引导宾语从句。虽然 if 也可以引导宾语从句，但在与 or not 直接连用时，通常只用 whether。',
      example: 'I wonder whether it will rain or not.',
      commonMistakes: '在 or not 面前使用 if。',
      reviewLink: 'https://www.bing.com/search?q=whether+vs+if+or+not'
    },
    difficulty: Difficulty.Middle,
    category: GrammarCategory.NounClause
  },
  {
    id: '5',
    sentence: ['This is the house ', ' I lived ten years ago.'],
    options: [
      { id: 'a', text: 'which' },
      { id: 'b', text: 'that' },
      { id: 'c', text: 'where' },
      { id: 'd', text: 'when' }
    ],
    correctAnswerId: 'c',
    explanation: {
      rule: 'where 引导定语从句，修饰先行词 the house（地点），且在从句中作地点状语。',
      example: 'The school where I studied is very beautiful.',
      commonMistakes: '误用 which。如果从句中谓语动词是不及物动词（如 live）且没有介词，则需用关系副词 where。',
      reviewLink: 'https://www.bing.com/search?q=relative+adverb+where'
    },
    difficulty: Difficulty.Middle,
    category: GrammarCategory.RelativeClause
  },
  {
    id: '6',
    sentence: ['The problem is worth ', ' again.'],
    options: [
      { id: 'a', text: 'discussing' },
      { id: 'b', text: 'to discuss' },
      { id: 'c', text: 'discussed' },
      { id: 'd', text: 'being discussed' }
    ],
    correctAnswerId: 'a',
    explanation: {
      rule: 'be worth doing 是固定用法，意为“值得做某事”，其中 doing 用主动形式表示被动意义。',
      example: 'The book is well worth reading.',
      commonMistakes: '误用 be worth to do 或 be worth being done。',
      reviewLink: 'https://www.bing.com/search?q=be+worth+doing+usage'
    },
    difficulty: Difficulty.Senior,
    category: GrammarCategory.NonFinite
  },
  {
    id: '7',
    sentence: ['He spoke so fast ', ' I couldn\'t follow him.'],
    options: [
      { id: 'a', text: 'that' },
      { id: 'b', text: 'as' },
      { id: 'c', text: 'than' },
      { id: 'd', text: 'which' }
    ],
    correctAnswerId: 'a',
    explanation: {
      rule: 'so...that... 引导结果状语从句，意为“如此...以至于...”。',
      example: 'She was so tired that she fell asleep immediately.',
      commonMistakes: '混淆 so...that 和 such...that。so 修饰形容词/副词，such 修饰名词。',
      reviewLink: 'https://www.bing.com/search?q=so+that+result+clause'
    },
    difficulty: Difficulty.Junior,
    category: GrammarCategory.AdverbialClause
  },
  {
    id: '8',
    sentence: ['I will go to the park if it ', ' tomorrow.'],
    options: [
      { id: 'a', text: 'won\'t rain' },
      { id: 'b', text: 'doesn\'t rain' },
      { id: 'c', text: 'didn\'t rain' },
      { id: 'd', text: 'isn\'t raining' }
    ],
    correctAnswerId: 'b',
    explanation: {
      rule: '在 if 引导的条件状语从句中，遵循“主将从现”原则，即主句用将来时，从句用一般现在时表将来。',
      example: 'If he comes, I will tell him.',
      commonMistakes: '从句也使用 will (won\'t rain)。',
      reviewLink: 'https://www.bing.com/search?q=if+clause+present+tense+for+future'
    },
    difficulty: Difficulty.Junior,
    category: GrammarCategory.AdverbialClause
  }
];
