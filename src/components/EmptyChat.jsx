import React from "react";

const EmptyState = () => {
  return (
    <div className="h-screen w-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto">
        {/* Icon */}
        <div className="mb-6">
          <svg
            className="w-16 h-16 text-blue-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>

        {/* Text Content */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          No message selected
        </h2>

        <p className="text-gray-600 mb-6">
          Please select one message from the
          <br />
          chat sidebar
        </p>

        {/* Optional: Add a subtle decorative element */}
        <div className="w-12 h-1 bg-blue-500 rounded-full mx-auto opacity-60"></div>
      </div>
    </div>
  );
};

export default EmptyState;
