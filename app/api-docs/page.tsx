import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Documentation',
  description: 'Documentation for Yunz API endpoints',
};

export default function ApiDocs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">API Documentation</h1>
      <div className="bg-gray-100 rounded-lg p-6">
        <p className="text-gray-600">This page will contain detailed API documentation for all available endpoints.</p>
      </div>
    </div>
  );
}
