'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { getIconColorClasses } from '../lib/utils';
import { SummaryCardData } from '../types';

interface SummaryCardProps {
  data: SummaryCardData;
  index: number;
}

export default function SummaryCard({ data, index }: SummaryCardProps) {
  const Icon = Icons[data.icon] as React.ComponentType<{ className?: string }>;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-3 rounded-xl ${getIconColorClasses(data.color)} group-hover:scale-110 transition-transform duration-200`}>
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {data.title}
            </h3>
          </div>
          
          <div className="space-y-2">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {data.value}
            </p>
            
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                data.changeType === 'increase' 
                  ? 'text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/20' 
                  : 'text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/20'
              }`}>
                {data.change}
              </span>
              <span className="text-xs text-gray-500">vs last week</span>
            </div>
          </div>
        </div>
        
        {/* Trend Indicator */}
        <div className={`w-2 h-16 rounded-full ${
          data.changeType === 'increase' ? 'bg-green-200 dark:bg-green-800' : 'bg-red-200 dark:bg-red-800'
        }`}>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '60%' }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className={`w-full rounded-full ${
              data.changeType === 'increase' ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}