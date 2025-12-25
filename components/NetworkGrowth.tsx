'use client';

import { useState } from 'react';
import { UserPlus, Search, Target, TrendingUp } from 'lucide-react';

export default function NetworkGrowth() {
  const [targetIndustries, setTargetIndustries] = useState(['Technology', 'Marketing']);
  const [targetRoles, setTargetRoles] = useState(['CEO', 'Founder', 'VP']);
  const [autoConnect, setAutoConnect] = useState(false);
  const [dailyLimit, setDailyLimit] = useState(10);
  const [personalizedMessage, setPersonalizedMessage] = useState(
    "Hi {firstName}, I came across your profile and was impressed by your work in {industry}. I'd love to connect and learn from your experience!"
  );

  const strategies = [
    {
      title: 'Connection Requests',
      description: 'Send personalized connection requests to targeted professionals',
      icon: UserPlus,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Profile Optimization',
      description: 'Automatically update your profile with trending keywords',
      icon: Target,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Engagement Automation',
      description: 'Like and comment on relevant posts in your industry',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Lead Generation',
      description: 'Identify and track potential clients or partners',
      icon: Search,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Network Growth</h2>
        <p className="text-gray-600 mt-1">Automate your LinkedIn networking strategy</p>
      </div>

      {/* Growth Strategies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {strategies.map((strategy) => {
          const Icon = strategy.icon;
          return (
            <div key={strategy.title} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${strategy.bgColor}`}>
                  <Icon className={`h-6 w-6 ${strategy.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{strategy.title}</h3>
                  <p className="text-sm text-gray-600">{strategy.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Auto-Connect Settings */}
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Auto-Connect</h3>
            <p className="text-sm text-gray-600 mt-1">
              Automatically send connection requests to your target audience
            </p>
          </div>
          <button
            onClick={() => setAutoConnect(!autoConnect)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              autoConnect ? 'bg-linkedin-primary' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                autoConnect ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Industries
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {targetIndustries.map((industry) => (
                <span
                  key={industry}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center space-x-2"
                >
                  <span>{industry}</span>
                  <button
                    onClick={() =>
                      setTargetIndustries(targetIndustries.filter((i) => i !== industry))
                    }
                    className="hover:text-blue-900"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add industry..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-primary focus:border-transparent"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const value = (e.target as HTMLInputElement).value.trim();
                  if (value && !targetIndustries.includes(value)) {
                    setTargetIndustries([...targetIndustries, value]);
                    (e.target as HTMLInputElement).value = '';
                  }
                }
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Roles
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {targetRoles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center space-x-2"
                >
                  <span>{role}</span>
                  <button
                    onClick={() => setTargetRoles(targetRoles.filter((r) => r !== role))}
                    className="hover:text-green-900"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add role..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-primary focus:border-transparent"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const value = (e.target as HTMLInputElement).value.trim();
                  if (value && !targetRoles.includes(value)) {
                    setTargetRoles([...targetRoles, value]);
                    (e.target as HTMLInputElement).value = '';
                  }
                }
              }}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Daily Connection Limit: {dailyLimit}
          </label>
          <input
            type="range"
            min="5"
            max="50"
            value={dailyLimit}
            onChange={(e) => setDailyLimit(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-xs text-gray-500 mt-1">
            LinkedIn recommends staying under 100 connections per week
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Personalized Message Template
          </label>
          <textarea
            value={personalizedMessage}
            onChange={(e) => setPersonalizedMessage(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-primary focus:border-transparent resize-none"
            rows={4}
            placeholder="Use {firstName}, {lastName}, {industry}, {company} as variables"
          />
          <p className="text-xs text-gray-500 mt-1">
            Variables will be automatically replaced with profile information
          </p>
        </div>

        <button
          className="w-full px-6 py-3 bg-linkedin-primary text-white rounded-lg hover:bg-linkedin-hover transition-colors"
          onClick={() => alert('Auto-connect settings saved!')}
        >
          Save Settings
        </button>
      </div>

      {/* Recent Connections */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Connection Requests</h3>
        <div className="space-y-4">
          {[
            { name: 'Sarah Johnson', role: 'CEO at TechCorp', status: 'accepted' },
            { name: 'Michael Chen', role: 'Founder at StartupAI', status: 'pending' },
            { name: 'Emily Rodriguez', role: 'VP Marketing at Scale Inc', status: 'accepted' },
            { name: 'David Kim', role: 'CTO at CloudWorks', status: 'pending' },
          ].map((connection) => (
            <div
              key={connection.name}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900">{connection.name}</p>
                <p className="text-sm text-gray-600">{connection.role}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  connection.status === 'accepted'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {connection.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
