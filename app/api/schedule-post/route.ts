import { NextRequest, NextResponse } from 'next/server';

// In-memory storage (use database in production)
let scheduledPosts: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const { content } = await request.json();

    // Schedule for next available time slot
    const now = new Date();
    const scheduledTime = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Tomorrow

    const newPost = {
      id: Math.random().toString(36).substr(2, 9),
      content,
      scheduledTime: scheduledTime.toISOString(),
      status: 'pending',
      createdAt: now.toISOString(),
    };

    scheduledPosts.push(newPost);

    return NextResponse.json({ success: true, post: newPost });
  } catch (error) {
    console.error('Error scheduling post:', error);
    return NextResponse.json(
      { error: 'Failed to schedule post' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ posts: scheduledPosts });
}
