# LinkedIn Automation Agent

A comprehensive LinkedIn automation platform for building your personal brand and growing your network. This application provides AI-powered content generation, automated scheduling, network growth tools, and detailed analytics.

## 🚀 Live Demo

Visit: **https://agentic-835fcd87.vercel.app**

## ✨ Features

### 1. Dashboard
- Real-time statistics overview
- Posts scheduled and published tracking
- Engagement metrics (likes, comments, shares)
- New connections and profile views tracking
- Recent activity feed
- Upcoming posts preview

### 2. Content Generator
- AI-powered content creation using OpenAI GPT-4
- Multiple content types:
  - Tips & Advice
  - Personal Stories
  - Industry Insights
  - Engaging Questions
  - List Posts
  - Announcements
- Customizable tone (Professional, Casual, Inspirational, Educational, Humorous)
- One-click content regeneration
- Quick copy to clipboard
- Direct scheduling from generator
- Popular content ideas suggestions

### 3. Schedule Manager
- View all scheduled posts
- Auto-schedule functionality
- Configure posts per week (1-14)
- Set preferred posting times
- Delete or edit scheduled posts
- Post status tracking (pending, published, failed)
- Visual calendar view with timestamps

### 4. Network Growth
- Auto-connect with targeted professionals
- Target by industries and roles
- Personalized connection messages with variable substitution
- Daily connection limits (5-50)
- Track connection request status
- Recent connections overview
- Growth strategies dashboard

### 5. Analytics
- Engagement trends (likes, comments, shares)
- Profile views tracking
- Content performance analysis
- Top performing posts
- Audience insights:
  - Top industries
  - Geographic distribution
  - Job functions breakdown
- Key metrics dashboard with growth indicators

### 6. Settings
- LinkedIn account configuration
- OpenAI API key setup
- Notification preferences
- Email reports toggle
- Content preferences:
  - Expertise areas
  - Target audience
  - Brand voice
- Data management options

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **AI**: OpenAI GPT-4
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd linkedin-automation-agent
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

Add your OpenAI API key to `.env`:
```
OPENAI_API_KEY=your_openai_api_key_here
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 🔑 Setup Requirements

### OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create a new API key
3. Add it to Settings in the app or `.env` file

### LinkedIn Integration (Optional)
For actual posting to LinkedIn, you'll need:
- LinkedIn Developer App credentials
- OAuth 2.0 authentication
- Access tokens with proper permissions

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables:
   - `OPENAI_API_KEY`
4. Deploy

Or use CLI:
```bash
vercel deploy --prod
```

## 📱 Usage

### Generating Content
1. Navigate to "Content Generator"
2. Enter a topic or theme
3. Select content type and tone
4. Click "Generate Content"
5. Review, regenerate if needed, or schedule

### Scheduling Posts
1. Generate content or use Schedule Manager
2. Click "Schedule Post"
3. Posts are automatically queued
4. Enable auto-schedule for hands-free operation

### Growing Network
1. Go to "Network Growth"
2. Set target industries and roles
3. Configure connection message template
4. Enable auto-connect
5. Set daily limits (stay under LinkedIn's guidelines)

### Tracking Performance
1. Visit "Analytics" tab
2. Review engagement trends
3. Check top performing content
4. Analyze audience demographics
5. Adjust strategy based on insights

## 🔒 Privacy & Security

- API keys are stored locally or in environment variables
- No credentials are shared with third parties
- LinkedIn automation should be used responsibly
- Follow LinkedIn's terms of service and rate limits

## ⚠️ Important Notes

### LinkedIn Rate Limits
- Connection requests: Stay under 100/week
- Posts: 3-5 per week recommended
- Engagement: Natural, spaced interactions

### Ethical Usage
- Personalize connection requests
- Provide genuine value in content
- Don't spam or over-automate
- Respect LinkedIn community guidelines

## 🗺️ Roadmap

- [ ] Database integration for persistent storage
- [ ] LinkedIn API integration for direct posting
- [ ] Advanced scheduling with optimal timing
- [ ] A/B testing for content
- [ ] Email notifications and reports
- [ ] Multi-account management
- [ ] Content calendar view
- [ ] Draft management
- [ ] Comment automation
- [ ] Lead tracking and CRM features

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🆘 Support

For issues or questions:
- Open a GitHub issue
- Check documentation
- Review LinkedIn best practices

## 🎯 Best Practices

1. **Content Quality**: Focus on providing value, not just volume
2. **Consistency**: Post regularly (3-5 times per week)
3. **Engagement**: Respond to comments and engage with others
4. **Authenticity**: Be genuine and share real insights
5. **Analytics**: Track what works and optimize
6. **Networking**: Personalize connection requests
7. **Compliance**: Follow LinkedIn's terms and limits

---

Built with ❤️ for LinkedIn personal brand growth
