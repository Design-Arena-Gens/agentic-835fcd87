'use client';

import { TrendingUp, Users, Eye, ThumbsUp, Calendar } from 'lucide-react';

interface DashboardProps {
  stats: {
    postsScheduled: number;
    postsPublished: number;
    totalEngagement: number;
    newConnections: number;
    profileViews: number;
  };
  refreshStats: () => void;
}

export default function Dashboard({ stats, refreshStats }: DashboardProps) {
  const statCards = [
    {
      title: 'Posts Scheduled',
      value: stats.postsScheduled,
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Posts Published',
      value: stats.postsPublished,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Total Engagement',
      value: stats.totalEngagement,
      icon: ThumbsUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'New Connections',
      value: stats.newConnections,
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      title: 'Profile Views',
      value: stats.profileViews,
      icon: Eye,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <button
          onClick={refreshStats}
          className="px-4 py-2 bg-linkedin-primary text-white rounded-lg hover:bg-linkedin-hover transition-colors"
        >
          Refresh Stats
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.title}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <ActivityItem
              title="Post published successfully"
              time="2 hours ago"
              type="success"
            />
            <ActivityItem
              title="5 new connection requests sent"
              time="5 hours ago"
              type="info"
            />
            <ActivityItem
              title="Content generated for tomorrow"
              time="1 day ago"
              type="success"
            />
            <ActivityItem
              title="Weekly analytics report available"
              time="2 days ago"
              type="info"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Posts</h3>
          <div className="space-y-4">
            <UpcomingPost
              content="5 tips for improving your professional network..."
              scheduledTime="Today, 9:00 AM"
            />
            <UpcomingPost
              content="The future of AI in business automation..."
              scheduledTime="Tomorrow, 10:00 AM"
            />
            <UpcomingPost
              content="How to build a strong personal brand on LinkedIn..."
              scheduledTime="Dec 27, 11:00 AM"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ title, time, type }: { title: string; time: string; type: 'success' | 'info' }) {
  return (
    <div className="flex items-start space-x-3">
      <div className={`w-2 h-2 rounded-full mt-2 ${type === 'success' ? 'bg-green-500' : 'bg-blue-500'}`} />
      <div className="flex-1">
        <p className="text-sm text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
}

function UpcomingPost({ content, scheduledTime }: { content: string; scheduledTime: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <p className="text-sm text-gray-900 mb-2">{content}</p>
      <p className="text-xs text-gray-500 flex items-center">
        <Calendar className="h-3 w-3 mr-1" />
        {scheduledTime}
      </p>
    </div>
  );
}
