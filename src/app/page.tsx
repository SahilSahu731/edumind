"use client";

import AICommandBox from "@/components/AICommandBox";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { aiInsights, quickActions, summaryData } from "@/data/summaryData";
import SummaryCard from "@/components/SummaryCard";
import AICard from "@/components/AICard";
import ChartCard from "@/components/ChartCard";
import { attendanceData, classDistribution, performanceData } from "@/data/chartData";
import QuickActions from "@/components/QuickActions";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [aiChatOpen, setAiChatOpen] = useState(false);

  const handleAIQuery = () => {
    setAiChatOpen(true);
    // The AI chat component will handle the query
  };

  return (
    <div className="h-screen flex bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 overflow-hidden">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onAIToggle={() => setAiChatOpen(true)}
      />
      <div className="flex-1 flex-col overflow-scroll ml-0 lg:ml-70">
          <Header />
          <main className="flex-1 overflow-y-auto p-6 space-y-8">
              <AICommandBox onQuery={handleAIQuery} />
              <section>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Overview
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {summaryData.map((data, index) => (
                <SummaryCard key={data.id} data={data} index={index} />
              ))}
            </div>
          </section>
          <section>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              AI Insights
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {aiInsights.map((insight, index) => (
                <AICard key={insight.id} insight={insight} index={index} />
              ))}
            </div>
          </section>
          <section>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Analytics
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <ChartCard 
                title="Weekly Attendance Trend" 
                data={attendanceData} 
                type="line" 
                index={0}
              />
              <ChartCard 
                title="Subject Performance" 
                data={performanceData} 
                type="bar" 
                index={1}
              />
              <ChartCard 
                title="Class Distribution" 
                data={classDistribution} 
                type="pie" 
                index={2}
              />
            </div>
          </section>

          <section>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Quick Actions
            </motion.h2>
            <QuickActions actions={quickActions} />
          </section>

          </main>
        </div>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-r from-blue-400 to-purple-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-linear-to-r from-green-400 to-blue-600 rounded-full blur-3xl"
        />
      </div>
    </div>
  );
}
