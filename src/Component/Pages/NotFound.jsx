import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="text-center text-white p-8 bg-opacity-80 rounded-lg shadow-lg max-w-lg mx-auto">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <p className="text-xl font-medium mb-4">Oops! The page you are looking for does not exist.</p>
        <p className="text-md mb-6">You might have mistyped the URL or the page might have been moved or deleted.</p>
        <a
          href="/"
          className="inline-block bg-white text-blue-500 px-6 py-2 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;


