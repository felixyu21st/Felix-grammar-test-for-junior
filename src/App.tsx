/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  RotateCcw, 
  BookOpen, 
  Trophy,
  ExternalLink,
  Info,
  GraduationCap
} from 'lucide-react';
import { questions } from './data/questions';
import { Question, UserAnswer, Difficulty } from './types';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleOptionSelect = (optionId: string) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const handleSubmit = () => {
    if (!selectedAnswers[currentQuestion.id]) return;
    setIsSubmitted(true);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsSubmitted(false);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
    setShowExplanation(false);
    setQuizFinished(false);
  };

  const score = useMemo(() => {
    return Object.entries(selectedAnswers).reduce((acc, [qId, aId]) => {
      const q = questions.find(q => q.id === qId);
      return q?.correctAnswerId === aId ? acc + 1 : acc;
    }, 0);
  }, [selectedAnswers]);

  const getEncouragement = (score: number, total: number) => {
    const ratio = score / total;
    if (ratio === 1) return "太棒了！你是语法大师！🌟";
    if (ratio >= 0.8) return "非常出色！继续保持！👏";
    if (ratio >= 0.6) return "做得不错！再接再厉！💪";
    return "别灰心，多练习一定会进步的！📚";
  };

  if (quizFinished) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4 font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center"
        >
          <div className="mb-6 inline-flex p-4 bg-emerald-50 rounded-full">
            <Trophy className="w-12 h-12 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">测试完成!</h2>
          <div className="text-6xl font-light text-emerald-500 mb-4">
            {score}<span className="text-2xl text-gray-400">/{questions.length}</span>
          </div>
          <p className="text-gray-600 mb-8 text-lg">
            {getEncouragement(score, questions.length)}
          </p>
          <button
            onClick={handleReset}
            className="w-full py-4 bg-gray-900 text-white rounded-2xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            重新开始
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-gray-900 font-sans p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-900 rounded-xl">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">GrammarMaster</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-500">
              进度: {currentIndex + 1} / {questions.length}
            </div>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Question Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 relative overflow-hidden"
            >
              {/* Tags */}
              <div className="flex gap-2 mb-8">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                  currentQuestion.difficulty === Difficulty.Junior ? 'bg-blue-50 text-blue-600' :
                  currentQuestion.difficulty === Difficulty.Middle ? 'bg-orange-50 text-orange-600' :
                  'bg-red-50 text-red-600'
                }`}>
                  {currentQuestion.difficulty}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {currentQuestion.category}
                </span>
              </div>

              {/* Sentence */}
              <div className="text-2xl md:text-3xl leading-relaxed font-medium mb-12">
                {currentQuestion.sentence[0]}
                <span className={`inline-block min-w-[120px] border-b-2 mx-2 text-center transition-all ${
                  isSubmitted 
                    ? selectedAnswers[currentQuestion.id] === currentQuestion.correctAnswerId
                      ? 'text-emerald-500 border-emerald-500'
                      : 'text-red-500 border-red-500'
                    : 'text-gray-900 border-gray-300'
                }`}>
                  {selectedAnswers[currentQuestion.id] 
                    ? currentQuestion.options.find(o => o.id === selectedAnswers[currentQuestion.id])?.text 
                    : '______'}
                </span>
                {currentQuestion.sentence[1]}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedAnswers[currentQuestion.id] === option.id;
                  const isCorrect = option.id === currentQuestion.correctAnswerId;
                  
                  let buttonClass = "p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between group ";
                  
                  if (isSubmitted) {
                    if (isCorrect) {
                      buttonClass += "border-emerald-500 bg-emerald-50 text-emerald-700";
                    } else if (isSelected) {
                      buttonClass += "border-red-500 bg-red-50 text-red-700";
                    } else {
                      buttonClass += "border-gray-100 text-gray-400 opacity-50";
                    }
                  } else {
                    buttonClass += isSelected 
                      ? "border-gray-900 bg-gray-900 text-white" 
                      : "border-gray-100 hover:border-gray-300 bg-white text-gray-700";
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(option.id)}
                      disabled={isSubmitted}
                      className={buttonClass}
                    >
                      <span className="font-medium">{option.text}</span>
                      {isSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5" />}
                      {isSubmitted && isSelected && !isCorrect && <XCircle className="w-5 h-5" />}
                    </button>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="mt-12 flex justify-end">
                {!isSubmitted ? (
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedAnswers[currentQuestion.id]}
                    className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 ${
                      selectedAnswers[currentQuestion.id]
                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    提交答案
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all flex items-center gap-2"
                  >
                    {currentIndex < questions.length - 1 ? '下一题' : '查看结果'}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>

          {/* Explanation Section */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              {showExplanation ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sticky top-8"
                >
                  <div className="flex items-center gap-2 mb-6 text-emerald-600">
                    <BookOpen className="w-5 h-5" />
                    <h3 className="font-bold text-lg">详解卡片</h3>
                  </div>

                  <div className="space-y-6">
                    <section>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">语法规则</h4>
                      <p className="text-gray-700 leading-relaxed">{currentQuestion.explanation.rule}</p>
                    </section>

                    <section>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">典型例句</h4>
                      <div className="p-3 bg-gray-50 rounded-xl border-l-4 border-emerald-500 italic text-gray-600">
                        "{currentQuestion.explanation.example}"
                      </div>
                    </section>

                    <section>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">常见误区</h4>
                      <p className="text-gray-700 leading-relaxed">{currentQuestion.explanation.commonMistakes}</p>
                    </section>

                    {currentQuestion.explanation.reviewLink && (
                      <a 
                        href={currentQuestion.explanation.reviewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-blue-50 text-blue-700 rounded-2xl hover:bg-blue-100 transition-colors group"
                      >
                        <span className="text-sm font-bold">相关语法复习</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ) : (
                <div className="bg-gray-100 rounded-3xl border-2 border-dashed border-gray-200 p-8 text-center flex flex-col items-center justify-center h-full min-h-[300px]">
                  <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                    <Info className="w-8 h-8 text-gray-300" />
                  </div>
                  <p className="text-gray-400 font-medium">提交答案后<br/>即可查看详细解析</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </main>

        {/* Footer Info */}
        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-400 text-sm">
          <p>© 2024 GrammarMaster - 专为初中生打造的语法提升工具</p>
        </footer>
      </div>
    </div>
  );
}
