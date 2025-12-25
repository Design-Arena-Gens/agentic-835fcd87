'use client';

import { useState } from 'react';
import { Save, Key, User, Bell } from 'lucide-react';

export default function Settings() {
  const [linkedinEmail, setLinkedinEmail] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailReports, setEmailReports] = useState(true);

  const handleSave = () => {
    // Save settings to localStorage or backend
    localStorage.setItem('linkedin_email', linkedinEmail);
    localStorage.setItem('openai_api_key', apiKey);
    localStorage.setItem('notifications_enabled', String(notificationsEnabled));
    localStorage.setItem('email_reports', String(emailReports));
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        <p className="text-gray-600 mt-1">Configure your automation preferences</p>
      </div>

      {/* Account Settings */}
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div className="flex items-center space-x-3 mb-4">
          <User className="h-5 w-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Account Settings</h3>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            LinkedIn Email/Username
          </label>
          <input
            type="text"
            value={linkedinEmail}
            onChange={(e) => setLinkedinEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-primary focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">
            Your LinkedIn credentials are stored locally and never shared
          </p>
        </div>
      </div>

      {/* API Configuration */}
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div className="flex items-center space-x-3 mb-4">
          <Key className="h-5 w-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">API Configuration</h3>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            OpenAI API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-primary focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">
            Required for AI-powered content generation.{' '}
            <a
              href="https://platform.openai.com/api-keys"
              target="_blank"
              rel="noopener noreferrer"
              className="text-linkedin-primary hover:underline"
            >
              Get your API key
            </a>
          </p>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div className="flex items-center space-x-3 mb-4">
          <Bell className="h-5 w-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Push Notifications</p>
              <p className="text-sm text-gray-600">Get notified about post performance</p>
            </div>
            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notificationsEnabled ? 'bg-linkedin-primary' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notificationsEnabled ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">Email Reports</p>
              <p className="text-sm text-gray-600">Receive weekly performance reports</p>
            </div>
            <button
              onClick={() => setEmailReports(!emailReports)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                emailReports ? 'bg-linkedin-primary' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  emailReports ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Content Preferences */}
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Content Preferences</h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Expertise Areas
          </label>
          <input
            type="text"
            placeholder="e.g., AI, Marketing, Leadership"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-primary focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Audience
          </label>
          <input
            type="text"
            placeholder="e.g., Founders, CTOs, Marketing Managers"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-primary focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Brand Voice
          </label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-primary focus:border-transparent">
            <option>Professional & Authoritative</option>
            <option>Friendly & Approachable</option>
            <option>Inspirational & Motivational</option>
            <option>Educational & Informative</option>
            <option>Casual & Conversational</option>
          </select>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="px-6 py-3 bg-linkedin-primary text-white rounded-lg hover:bg-linkedin-hover transition-colors flex items-center space-x-2"
        >
          <Save className="h-5 w-5" />
          <span>Save Settings</span>
        </button>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-red-900 mb-2">Danger Zone</h3>
        <p className="text-sm text-red-700 mb-4">
          These actions cannot be undone. Please proceed with caution.
        </p>
        <div className="space-y-3">
          <button className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
            Clear All Scheduled Posts
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors ml-3">
            Delete All Data
          </button>
        </div>
      </div>
    </div>
  );
}
