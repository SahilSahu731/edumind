'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Mic, Search } from 'lucide-react';

const suggestions = [
  "Generate attendance report for Class 9A",
  "Show students who need help in Mathematics",
  "Create homework summary for this week",
  "Analyze performance trends by subject",
  "List upcoming parent-teacher meetings"
];

export default function AICommandBox({ onQuery }: { onQuery: (query: string) => void }) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onQuery(query);
      setQuery('');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    onQuery(suggestion);
    setQuery('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Main Command Box */}
      <div className={`relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800 transition-all duration-300 ${
        isFocused ? 'ring-2 ring-blue-500 ring-opacity-50 scale-[1.02]' : ''
      }`}>
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              AI Assistant
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Ask me to analyze data, generate reports, or manage tasks
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Ask me to summarize attendance, generate homework, or create reports..."
              className="w-full pl-16 pr-32 py-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <button
                type="button"
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Mic className="w-5 h-5" />
              </button>
              <button
                type="submit"
                disabled={!query.trim()}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
              >
                Ask AI
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>

        {/* Suggestions */}
        <div className="mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Try these suggestions:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl text-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
              >
                {suggestion}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60"
      />
      
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-40"
      />
    </motion.div>
  );
}