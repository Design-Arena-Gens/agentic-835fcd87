'use client';

import { useState } from 'react';
import { Sparkles, RefreshCw, Copy, CheckCircle } from 'lucide-react';

interface ContentGeneratorProps {
  refreshStats: () => void;
}

export default function ContentGenerator({ refreshStats }: ContentGeneratorProps) {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');
  const [contentType, setContentType] = useState('tip');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const generateContent = async () => {
    if (!topic.trim()) {
      alert('Please enter a topic');
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, tone, contentType }),
      });

      const data = await response.json();
      setGeneratedContent(data.content);
    } catch (error) {
      console.error('Failed to generate content:', error);
      alert('Failed to generate content. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const schedulePost = async () => {
    if (!generatedContent) {
      alert('Generate content first');
      return;
    }

    try {
      const response = await fetch('/api/schedule-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: generatedContent }),
      });

      if (response.ok) {
        alert('Post scheduled successfully!');
        refreshStats();
        setGeneratedContent('');
        setTopic('');
      }
    } catch (error) {
      console.error('Failed to schedule post:', error);
      alert('Failed to schedule post. Please try again.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Content Generator</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Sparkles className="h-4 w-4" />
          <span>AI-Powered Content Creation</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Panel */}
        <div className="bg-white rounded-lg shadow p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Topic or Theme
            </label>
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="E.g., leadership, productivity, AI in business..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-primary focus:border-transparent resize-none"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content Type
            </label>
            <select
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-primary focus:border-transparent"
            >
              <option value="tip">Tips & Advice</option>
              <option value="story">Personal Story</option>
              <option value="insight">Industry Insight</option>
              <option value="question">Engaging Question</option>
              <option value="list">List Post</option>
              <option value="announcement">Announcement</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tone
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-linkedin-primary focus:border-transparent"
            >
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="inspirational">Inspirational</option>
              <option value="educational">Educational</option>
              <option value="humorous">Humorous</option>
            </select>
          </div>

          <button
            onClick={generateContent}
            disabled={isGenerating}
            className="w-full px-6 py-3 bg-linkedin-primary text-white rounded-lg hover:bg-linkedin-hover transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="h-5 w-5 animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                <span>Generate Content</span>
              </>
            )}
          </button>
        </div>

        {/* Output Panel */}
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">
              Generated Content
            </label>
            {generatedContent && (
              <button
                onClick={copyToClipboard}
                className="flex items-center space-x-1 text-sm text-linkedin-primary hover:text-linkedin-hover"
              >
                {isCopied ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            )}
          </div>

          <div className="min-h-[300px] border border-gray-300 rounded-lg p-4 bg-gray-50">
            {generatedContent ? (
              <p className="text-gray-900 whitespace-pre-wrap">{generatedContent}</p>
            ) : (
              <p className="text-gray-400 italic">Your generated content will appear here...</p>
            )}
          </div>

          {generatedContent && (
            <div className="flex space-x-3">
              <button
                onClick={generateContent}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>Regenerate</span>
              </button>
              <button
                onClick={schedulePost}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Schedule Post
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content Ideas */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Content Ideas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Share a career milestone',
            'Industry trends and predictions',
            'Lessons learned from failure',
            'Tips for work-life balance',
            'Book or podcast recommendations',
            'Ask for community input',
            'Behind-the-scenes of your work',
            'Professional development tips',
            'Celebrate team achievements',
          ].map((idea) => (
            <button
              key={idea}
              onClick={() => setTopic(idea)}
              className="text-left px-4 py-3 border border-gray-200 rounded-lg hover:border-linkedin-primary hover:bg-blue-50 transition-colors"
            >
              <p className="text-sm text-gray-900">{idea}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
