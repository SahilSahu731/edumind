import * as Icons from 'lucide-react';

export interface SummaryCardData {
  id: number;
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: keyof typeof Icons;
  color: string;
}

export interface AIInsight {
  id: number;
  type: 'warning' | 'info' | 'success';
  title: string;
  message: string;
  priority: 'high' | 'medium' | 'low';
  action: string;
}

export interface QuickAction {
  id: number;
  title: string;
  description: string;
  icon: keyof typeof Icons;
  color: string;
}

export interface AttendanceData {
  name: string;
  attendance: number;
}

export interface PerformanceData {
  subject: string;
  score: number;
  previous: number;
}

export interface ClassDistribution {
  name: string;
  students: number;
  color: string;
}

export interface ChartData {
  [key: string]: string | number;
}