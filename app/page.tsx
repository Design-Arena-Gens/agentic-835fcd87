'use client';

import { useState, useEffect } from 'react';
import Dashboard from '@/components/Dashboard';
import ContentGenerator from '@/components/ContentGenerator';
import ScheduleManager from '@/components/ScheduleManager';
import NetworkGrowth from '@/components/NetworkGrowth';
import Analytics from '@/components/Analytics';
import Settings from '@/components/Settings';
import { BarChart3, Calendar, Users, Settings as SettingsIcon, PenTool, Linkedin } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState({
    postsScheduled: 0,
    postsPublished: 0,
    totalEngagement: 0,
    newConnections: 0,
    profileViews: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    }
  };

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'content', label: 'Content Generator', icon: PenTool },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'network', label: 'Network Growth', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-linkedin-primary p-2 rounded-lg">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">LinkedIn Automation Agent</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                <span className="font-semibold">{stats.postsPublished}</span> posts published
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">{stats.newConnections}</span> new connections
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-linkedin-primary text-linkedin-primary'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && <Dashboard stats={stats} refreshStats={fetchStats} />}
        {activeTab === 'content' && <ContentGenerator refreshStats={fetchStats} />}
        {activeTab === 'schedule' && <ScheduleManager refreshStats={fetchStats} />}
        {activeTab === 'network' && <NetworkGrowth />}
        {activeTab === 'analytics' && <Analytics />}
        {activeTab === 'settings' && <Settings />}
      </main>
    </div>
  );
}
