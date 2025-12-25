'use client';

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Analytics() {
  const engagementData = [
    { date: 'Dec 18', likes: 45, comments: 12, shares: 8 },
    { date: 'Dec 19', likes: 52, comments: 15, shares: 10 },
    { date: 'Dec 20', likes: 78, comments: 23, shares: 15 },
    { date: 'Dec 21', likes: 65, comments: 18, shares: 12 },
    { date: 'Dec 22', likes: 90, comments: 28, shares: 20 },
    { date: 'Dec 23', likes: 105, comments: 35, shares: 25 },
    { date: 'Dec 24', likes: 120, comments: 42, shares: 30 },
  ];

  const profileViewsData = [
    { date: 'Dec 18', views: 120 },
    { date: 'Dec 19', views: 145 },
    { date: 'Dec 20', views: 180 },
    { date: 'Dec 21', views: 165 },
    { date: 'Dec 22', views: 210 },
    { date: 'Dec 23', views: 245 },
    { date: 'Dec 24', views: 280 },
  ];

  const contentPerformance = [
    { type: 'Tips & Advice', posts: 12, avgEngagement: 85 },
    { type: 'Industry Insights', posts: 8, avgEngagement: 120 },
    { type: 'Personal Stories', posts: 6, avgEngagement: 150 },
    { type: 'Questions', posts: 10, avgEngagement: 95 },
    { type: 'Lists', posts: 7, avgEngagement: 110 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
        <p className="text-gray-600 mt-1">Track your LinkedIn growth and engagement</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard title="Total Reach" value="12,450" change="+15%" trend="up" />
        <MetricCard title="Engagement Rate" value="8.2%" change="+2.1%" trend="up" />
        <MetricCard title="New Followers" value="145" change="+12%" trend="up" />
        <MetricCard title="Post Frequency" value="3.5/week" change="+0.5" trend="up" />
      </div>

      {/* Engagement Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="likes" stroke="#0A66C2" strokeWidth={2} />
            <Line type="monotone" dataKey="comments" stroke="#10B981" strokeWidth={2} />
            <Line type="monotone" dataKey="shares" stroke="#F59E0B" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Views */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Views</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={profileViewsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="views" fill="#0A66C2" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Content Performance */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={contentPerformance} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="type" type="category" width={120} />
              <Tooltip />
              <Bar dataKey="avgEngagement" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Performing Posts */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Posts</h3>
        <div className="space-y-4">
          {[
            {
              content: '5 lessons I learned from building my first startup...',
              engagement: 245,
              date: 'Dec 22',
            },
            {
              content: 'The future of AI in business: Key trends to watch...',
              engagement: 198,
              date: 'Dec 20',
            },
            {
              content: 'How I grew my network from 500 to 5000 connections...',
              engagement: 176,
              date: 'Dec 18',
            },
          ].map((post, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex-1">
                <p className="text-gray-900 mb-1">{post.content}</p>
                <p className="text-sm text-gray-600">{post.date}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-linkedin-primary">{post.engagement}</p>
                <p className="text-xs text-gray-600">engagements</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audience Insights */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Audience Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Top Industries</h4>
            <div className="space-y-2">
              {[
                { name: 'Technology', percentage: 35 },
                { name: 'Marketing', percentage: 25 },
                { name: 'Finance', percentage: 20 },
                { name: 'Healthcare', percentage: 12 },
                { name: 'Education', percentage: 8 },
              ].map((industry) => (
                <div key={industry.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{industry.name}</span>
                    <span className="text-gray-600">{industry.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-linkedin-primary h-2 rounded-full"
                      style={{ width: `${industry.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Top Locations</h4>
            <div className="space-y-2">
              {[
                { name: 'United States', percentage: 45 },
                { name: 'United Kingdom', percentage: 20 },
                { name: 'India', percentage: 15 },
                { name: 'Canada', percentage: 10 },
                { name: 'Australia', percentage: 10 },
              ].map((location) => (
                <div key={location.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{location.name}</span>
                    <span className="text-gray-600">{location.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${location.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Top Job Functions</h4>
            <div className="space-y-2">
              {[
                { name: 'Engineering', percentage: 30 },
                { name: 'Sales', percentage: 25 },
                { name: 'Operations', percentage: 20 },
                { name: 'Product', percentage: 15 },
                { name: 'HR', percentage: 10 },
              ].map((function_) => (
                <div key={function_.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{function_.name}</span>
                    <span className="text-gray-600">{function_.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${function_.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  change,
  trend,
}: {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-sm text-gray-600 mb-2">{title}</p>
      <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
      <p
        className={`text-sm font-medium ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {change}
      </p>
    </div>
  );
}
