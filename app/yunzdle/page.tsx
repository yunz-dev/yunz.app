"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { questions } from './questions';

export default function Yunzdle() {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [input, setInput] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.toLowerCase());
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (input === currentQuestion.answer) {
      setScore(prev => prev + 1);
      const nextIndex = questions.indexOf(currentQuestion) + 1;
      if (nextIndex < questions.length) {
        setCurrentQuestion(questions[nextIndex]);
        setInput('');
      } else {
        setGameOver(true);
      }
    }
  }, [input, currentQuestion]);

  if (gameOver) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <h1 className="text-6xl font-bold tracking-tighter mb-8 text-gray-800">Yunzdle</h1>
          <div className="bg-white rounded-xl p-12 shadow-2xl">
            <h2 className="text-4xl mb-6 text-gray-700">Game Over!</h2>
            <div className="text-3xl mb-4 text-gray-600">
              Final Score: {score}
            </div>
            <p className="text-xl text-gray-500">
              You answered {score} out of {questions.length} questions correctly!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tighter mb-8 text-white">Yunzdle</h1>
        <div className="bg-gray-800 rounded-xl p-12 shadow-xl w-full max-w-2xl">
          <div className="mb-6">
            <div className="text-3xl font-bold text-gray-300 mb-4">Time Left: {timeLeft}s</div>
            <div className="text-3xl font-bold text-gray-400">Score: {score}</div>
          </div>
          <div className="text-4xl font-bold text-white mb-8">
            {currentQuestion.clue}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your answer..."
              className="flex-1 px-6 py-4 text-xl text-white bg-gray-700 border-2 border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-blue-500 text-white text-xl rounded-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
