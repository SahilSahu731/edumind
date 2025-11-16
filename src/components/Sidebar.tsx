'use client';

import { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Calendar, 
  BarChart3, 
  CreditCard, 
  Settings, 
  MessageSquare,
  GraduationCap,
  FileText,
  ChevronLeft,
  Bot
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Users, label: 'Students' },
  { icon: GraduationCap, label: 'Teachers' },
  { icon: BookOpen, label: 'Subjects' },
  { icon: Calendar, label: 'Schedule' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: FileText, label: 'Reports' },
  { icon: CreditCard, label: 'Fees' },
  { icon: MessageSquare, label: 'Messages' },
  { icon: Settings, label: 'Settings' }
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onAIToggle: () => void;
}

export default function Sidebar({ isOpen, onClose, onAIToggle }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : -280,
          width: isOpen ? 280 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed left-0 top-0 h-screen w-280 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-r border-gray-200 dark:border-gray-700 z-50 overflow-hidden"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              {/* <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div> */}
              <span className="font-semibold text-xl text-gray-900 dark:text-white">EduMind</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          {/* AI Assistant Button */}
          <div className="p-4">
            <button
              onClick={onAIToggle}
              className="w-full flex items-center gap-3 p-3 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Bot className="w-5 h-5" />
              <span className="font-medium">AI Assistant</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 pb-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index}>
                    <button
                      className={`w-full flex items-center cursor-pointer gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                        item.active
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                      }`}
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <Icon className={`w-5 h-5 transition-transform duration-200 ${
                        hoveredItem === index ? 'scale-110' : ''
                      }`} />
                      <span className="font-medium">{item.label}</span>
                      
                      {item.active && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="ml-auto w-2 h-2 bg-blue-500 rounded-full"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-8 h-8 bg-linear-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  Admin User
                </p>
                <p className="text-xs text-gray-500 truncate">
                  School Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}