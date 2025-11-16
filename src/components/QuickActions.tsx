'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { getColorClasses } from '../lib/utils';
import { QuickAction } from '../types';

interface QuickActionsProps {
  actions: QuickAction[];
}

export default function QuickActions({ actions }: QuickActionsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {actions.map((action, index) => {
        const Icon = Icons[action.icon] as React.ComponentType<{ className?: string }>;
        
        return (
          <motion.button
            key={action.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/80 dark:bg-gray-800/80 cursor-pointer backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 text-left group"
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${getColorClasses(action.color)} group-hover:scale-110 transition-transform duration-200`}>
                <Icon className="w-6 h-6" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {action.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {action.description}
                </p>
              </div>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}