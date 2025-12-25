'use client';

import { useState, useEffect } from 'react';
import { Calendar, Clock, Trash2, Edit2 } from 'lucide-react';

interface ScheduledPost {
  id: string;
  content: string;
  scheduledTime: string;
  status: 'pending' | 'published' | 'failed';
}

interface ScheduleManagerProps {
  refreshStats: () => void;
}

export default function ScheduleManager({ refreshStats }: ScheduleManagerProps) {
  const [scheduledPosts, setScheduledPosts] = useState<ScheduledPost[]>([]);
  const [autoSchedule, setAutoSchedule] = useState(false);
  const [postsPerWeek, setPostsPerWeek] = useState(3);
  const [preferredTimes, setPreferredTimes] = useState(['09:00', '13:00', '17:00']);

  useEffect(() => {
    fetchScheduledPosts();
  }, []);

  const fetchScheduledPosts = async () => {
    try {
      const response = await fetch('/api/scheduled-posts');
      const data = await response.json();
      setScheduledPosts(data.posts || []);
    } catch (error) {
      console.error('Failed to fetch scheduled posts:', error);
    }
  };

  const deletePost = async (id: string) => {
    try {
      await fetch(`/api/scheduled-posts/${id}`, { method: 'DELETE' });
      await fetchScheduledPosts();
      refreshStats();
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  const toggleAutoSchedule = async () => {
    try {
      const response = await fetch('/api/auto-schedule', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enabled: !autoSchedule,
          postsPerWeek,
          preferredTimes,
        }),
      });

      if (response.ok) {
        setAutoSchedule(!autoSchedule);
        alert(`Auto-schedule ${!autoSchedule ? 'enabled' : 'disabled'}!`);
      }
    } catch (error) {
      console.error('Failed to toggle auto-schedule:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Schedule Manager</h2>
        <button
          onClick={fetchScheduledPosts}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Refresh
        </button>
      </div>

      {/* Auto-Schedule Settings */}
      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Auto-Schedule</h3>
            <p className="text-sm text-gray-600 mt-1">
              Automatically generate and schedule posts based on your preferences
            </p>
          </div>
          <button
            onClick={toggleAutoSchedule}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              autoSchedule ? 'bg-linkedin-primary' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                autoSchedule ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Posts per Week
            </label>
            <input
              type="number"
              value={postsPerWeek}
              onChange={(e) => setPostsPerWeek(Number(e.target.value))}
              min="1"
              max="14"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-primary focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Posting Times
            </label>
            <div className="flex space-x-2">
              {preferredTimes.map((time, index) => (
                <input
                  key={index}
                  type="time"
                  value={time}
                  onChange={(e) => {
                    const newTimes = [...preferredTimes];
                    newTimes[index] = e.target.value;
                    setPreferredTimes(newTimes);
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-primary focus:border-transparent"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scheduled Posts */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Scheduled Posts</h3>
          <p className="text-sm text-gray-600 mt-1">
            {scheduledPosts.length} posts in queue
          </p>
        </div>

        <div className="divide-y divide-gray-200">
          {scheduledPosts.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <Calendar className="h-12 w-12 mx-auto mb-3 text-gray-400" />
              <p>No posts scheduled yet</p>
              <p className="text-sm mt-1">Generate content to get started</p>
            </div>
          ) : (
            scheduledPosts.map((post) => (
              <div key={post.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <p className="text-gray-900 mb-3 line-clamp-3">{post.content}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.scheduledTime).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{new Date(post.scheduledTime).toLocaleTimeString()}</span>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          post.status === 'published'
                            ? 'bg-green-100 text-green-800'
                            : post.status === 'failed'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {post.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => deletePost(post.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
