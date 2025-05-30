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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold tracking-tighter text-center mb-8">Yunzdle</h1>
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <h2 className="text-2xl mb-4">Game Over!</h2>
          <p className="text-xl mb-4">Final Score: {score}</p>
          <p className="text-gray-600">You answered {score} out of {questions.length} questions correctly!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold tracking-tighter text-center mb-8">Yunzdle</h1>
      <div className="bg-gray-100 rounded-lg p-6">
        <div className="mb-4">
          <span className="text-2xl font-bold">Time Left: {timeLeft}s</span>
        </div>
        <div className="mb-4">
          <span className="text-xl font-bold">Score: {score}</span>
        </div>
        <div className="mb-6">
          <p className="text-2xl font-bold">{currentQuestion.clue}</p>
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your answer..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
