'use client';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function ApiDocs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold tracking-tighter text-center mb-8">API Documentation</h1>
      <div className="bg-gray-100 rounded-lg p-6">
        <SwaggerUI
          url="/openapi.yaml"
          docExpansion="list"
          defaultModelsExpandDepth={-1}
        />
      </div>
    </div>
  );
}
