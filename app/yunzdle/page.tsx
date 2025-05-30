import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yunzdle',
  description: 'Better than Wordle',
};

export default function Yunzdle() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold tracking-tighter text-center mb-8">Yunzdle</h1>
      <div className="bg-gray-100 rounded-lg p-6">
        <p className="text-gray-600">First Yunzdle Coming out tommorrow!! Stay Tuned :D </p>
      </div>
    </div>
  );
}
