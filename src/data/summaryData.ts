import { SummaryCardData, AIInsight, QuickAction } from '../types';

export const summaryData: SummaryCardData[] = [
  {
    id: 1,
    title: "Total Students",
    value: "1,247",
    change: "+12",
    changeType: "increase" as const,
    icon: "Users" as const,
    color: "blue"
  },
  {
    id: 2,
    title: "Today's Attendance",
    value: "94.2%",
    change: "+2.1%",
    changeType: "increase" as const,
    icon: "UserCheck" as const,
    color: "green"
  },
  {
    id: 3,
    title: "Homework Pending",
    value: "23",
    change: "-5",
    changeType: "decrease" as const,
    icon: "BookOpen" as const,
    color: "orange"
  },
  {
    id: 4,
    title: "Upcoming Exams",
    value: "8",
    change: "+2",
    changeType: "increase" as const,
    icon: "Calendar" as const,
    color: "purple"
  },
  {
    id: 5,
    title: "Fees Due",
    value: "₹2.4L",
    change: "-₹50K",
    changeType: "decrease" as const,
    icon: "CreditCard" as const,
    color: "red"
  }
];

export const aiInsights: AIInsight[] = [
  {
    id: 1,
    type: "warning" as const,
    title: "Attendance Alert",
    message: "Class 7B attendance dropped to 78% this week. Consider follow-up.",
    priority: "high" as const,
    action: "View Details"
  },
  {
    id: 2,
    type: "info" as const,
    title: "Performance Insight",
    message: "Mathematics scores improved by 15% after AI tutoring sessions.",
    priority: "medium" as const,
    action: "Generate Report"
  },
  {
    id: 3,
    type: "success" as const,
    title: "Achievement",
    message: "5 students qualified for National Science Olympiad.",
    priority: "low" as const,
    action: "Celebrate"
  },
  {
    id: 4,
    type: "warning" as const,
    title: "Review Needed",
    message: "12 homework assignments pending review for over 3 days.",
    priority: "high" as const,
    action: "Review Now"
  }
];

export const quickActions: QuickAction[] = [
  {
    id: 1,
    title: "Add Homework",
    description: "Create new assignments",
    icon: "Plus" as const,
    color: "blue"
  },
  {
    id: 2,
    title: "Upload Marks",
    description: "Update student grades",
    icon: "Upload" as const,
    color: "green"
  },
  {
    id: 3,
    title: "Attendance Report",
    description: "Generate attendance summary",
    icon: "BarChart3" as const,
    color: "purple"
  },
  {
    id: 4,
    title: "Send Announcement",
    description: "Notify students & parents",
    icon: "Megaphone" as const,
    color: "orange"
  }
];