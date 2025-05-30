'use client';

import { SwaggerUIBundle } from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function SwaggerUI() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-8">API Documentation</h1>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <SwaggerUIBundle
            url="/openapi.yaml"
            docExpansion="list"
            defaultModelsExpandDepth={-1}
          />
        </div>
      </div>
    </div>
  );
}
