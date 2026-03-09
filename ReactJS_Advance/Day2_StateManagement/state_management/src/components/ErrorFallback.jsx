import React from "react";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="p-6 border-2 border-red-200 bg-red-50 rounded-xl text-center">
      <h2 className="text-xl font-bold text-red-700">Something went wrong</h2>
      <pre className="text-sm text-red-500 mt-2 mb-4 bg-white p-2 rounded border">
        {error.message}
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}
