# EduMind - AI-Powered School Management Dashboard

A modern, responsive school management dashboard built with Next.js 16, featuring AI-powered insights, real-time analytics, and an intuitive user interface.

## ✨ Features

### 🎯 Core Functionality
- **AI-Powered Assistant** - Natural language queries for data analysis and report generation
- **Real-time Dashboard** - Live overview of school metrics and KPIs
- **Student Management** - Track attendance, performance, and academic progress
- **Interactive Analytics** - Visual charts and graphs for data insights
- **Smart Notifications** - AI-generated alerts and recommendations

### 🎨 User Experience
- **Modern UI/UX** - Clean, intuitive interface with smooth animations
- **Dark/Light Mode** - Automatic theme switching with system preference
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Accessibility** - WCAG compliant with keyboard navigation support

### 📊 Analytics & Reporting
- **Attendance Tracking** - Weekly and monthly attendance trends
- **Performance Analytics** - Subject-wise student performance metrics
- **Class Distribution** - Visual representation of student enrollment
- **AI Insights** - Automated analysis and actionable recommendations

## 🚀 Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

### UI Components
- **Lucide React** - Beautiful, customizable icons
- **Recharts** - Responsive chart library
- **Custom Components** - Reusable, accessible UI components

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **Babel React Compiler** - Optimized React compilation

## 📁 Project Structure

```
edumind/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable UI components
│   │   ├── AICard.tsx          # AI insight cards
│   │   ├── AIChat.tsx          # AI chat interface
│   │   ├── AICommandBox.tsx    # AI query input
│   │   ├── ChartCard.tsx       # Analytics charts
│   │   ├── Header.tsx          # Navigation header
│   │   ├── QuickActions.tsx    # Action buttons
│   │   ├── Sidebar.tsx         # Navigation sidebar
│   │   └── SummaryCard.tsx     # Metric summary cards
│   ├── data/                   # Static data and mock APIs
│   │   ├── chartData.ts        # Chart datasets
│   │   └── summaryData.ts      # Dashboard metrics
│   └── lib/                    # Utility functions
│       └── utils.ts            # Helper functions
├── public/                     # Static assets
└── package.json               # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd edumind
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Dashboard Overview

### Summary Cards
- **Total Students**: Current enrollment count with weekly changes
- **Today's Attendance**: Real-time attendance percentage
- **Homework Pending**: Outstanding assignments tracking
- **Upcoming Exams**: Scheduled examination alerts
- **Fees Due**: Financial overview and collection status

### AI Insights
- **Attendance Alerts**: Automated notifications for low attendance
- **Performance Analysis**: Subject-wise improvement recommendations
- **Achievement Tracking**: Student accomplishments and milestones
- **Review Reminders**: Pending tasks and administrative alerts

### Analytics Charts
- **Weekly Attendance Trend**: Line chart showing daily attendance patterns
- **Subject Performance**: Bar chart comparing academic performance
- **Class Distribution**: Pie chart of student enrollment by grade

### Quick Actions
- **Add Homework**: Create new assignments
- **Upload Marks**: Update student grades
- **Attendance Report**: Generate attendance summaries
- **Send Announcement**: Notify students and parents

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#3B82F6 to #8B5CF6)
- **Success**: Green (#10B981)
- **Warning**: Orange (#F59E0B)
- **Error**: Red (#EF4444)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Primary Font**: Geist Sans (optimized web font)
- **Monospace**: Geist Mono for code elements
- **Responsive**: Fluid typography scaling

### Components
- **Glass Morphism**: Backdrop blur effects with transparency
- **Smooth Animations**: Framer Motion powered transitions
- **Interactive Elements**: Hover states and micro-interactions

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:
```env
NEXT_PUBLIC_APP_NAME=EduMind
NEXT_PUBLIC_API_URL=your-api-url
```

### Tailwind Configuration
The project uses Tailwind CSS 4 with custom configuration in `tailwind.config.js`

### Next.js Configuration
Custom settings in `next.config.ts` for optimization and deployment

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Adaptive Layout**: Sidebar collapses on mobile, grid adjusts to screen size

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Deploy automatically on push to main branch
3. Custom domain configuration available

### Other Platforms
- **Netlify**: Static site deployment
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library
- **Framer Motion** - For smooth animations

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for modern education management**