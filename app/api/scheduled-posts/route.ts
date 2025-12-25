import { NextResponse } from 'next/server';

// In-memory storage (use database in production)
const scheduledPosts = [
  {
    id: '1',
    content: '5 tips for improving your professional network on LinkedIn:\n\n1. Personalize every connection request\n2. Engage with others\' content regularly\n3. Share valuable insights consistently\n4. Join relevant groups in your industry\n5. Follow up with new connections\n\n#Networking #LinkedIn #ProfessionalGrowth',
    scheduledTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    status: 'pending' as const,
  },
  {
    id: '2',
    content: 'The future of AI in business automation is here. Companies that embrace it now will have a significant competitive advantage.\n\nWhat\'s your take on AI adoption in your industry?\n\n#AI #BusinessAutomation #Innovation',
    scheduledTime: new Date(Date.now() + 26 * 60 * 60 * 1000).toISOString(),
    status: 'pending' as const,
  },
  {
    id: '3',
    content: 'Building a strong personal brand takes time, but here\'s what I learned:\n\n✅ Be authentic\n✅ Provide value consistently\n✅ Engage with your community\n✅ Stay patient and persistent\n\n#PersonalBranding #CareerGrowth #LinkedIn',
    scheduledTime: new Date(Date.now() + 50 * 60 * 60 * 1000).toISOString(),
    status: 'pending' as const,
  },
];

export async function GET() {
  return NextResponse.json({ posts: scheduledPosts });
}
