import { NextResponse } from 'next/server';

export async function GET() {
  // In production, fetch from database
  const stats = {
    postsScheduled: 12,
    postsPublished: 45,
    totalEngagement: 3420,
    newConnections: 127,
    profileViews: 2850,
  };

  return NextResponse.json(stats);
}
