'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Info, CheckCircle, Clock } from 'lucide-react';

const iconMap = {
  warning: AlertTriangle,
  info: Info,
  success: CheckCircle,
  default: Clock
};

const colorMap = {
  warning: {
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    border: 'border-orange-200 dark:border-orange-800',
    icon: 'text-orange-600 dark:text-orange-400',
    button: 'bg-orange-100 hover:bg-orange-200 dark:bg-orange-800 dark:hover:bg-orange-700 text-orange-700 dark:text-orange-300'
  },
  info: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    icon: 'text-blue-600 dark:text-blue-400',
    button: 'bg-blue-100 hover:bg-blue-200 dark:bg-blue-800 dark:hover:bg-blue-700 text-blue-700 dark:text-blue-300'
  },
  success: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    icon: 'text-green-600 dark:text-green-400',
    button: 'bg-green-100 hover:bg-green-200 dark:bg-green-800 dark:hover:bg-green-700 text-green-700 dark:text-green-300'
  }
};

export default function AICard({ insight, index }: { insight: any, index: number }) {
  const Icon = iconMap[insight.type] || iconMap.default;
  const colors = colorMap[insight.type] || colorMap.info;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`${colors.bg} ${colors.border} border rounded-2xl p-5 hover:shadow-md transition-all duration-300`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-2 rounded-lg ${colors.icon} bg-white/50 dark:bg-gray-800/50`}>
          <Icon className="w-5 h-5" />
        </div>
        
        <div className="flex-1 space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              {insight.title}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {insight.message}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
              insight.priority === 'high' 
                ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                : insight.priority === 'medium'
                ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
            }`}>
              {insight.priority} priority
            </span>
            
            <button className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${colors.button}`}>
              {insight.action}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}