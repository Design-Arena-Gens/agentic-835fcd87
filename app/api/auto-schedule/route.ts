import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { enabled, postsPerWeek, preferredTimes } = await request.json();

    // In production, save to database and set up cron jobs
    const config = {
      enabled,
      postsPerWeek,
      preferredTimes,
      updatedAt: new Date().toISOString(),
    };

    // Store in localStorage or database
    return NextResponse.json({ success: true, config });
  } catch (error) {
    console.error('Error updating auto-schedule:', error);
    return NextResponse.json(
      { error: 'Failed to update auto-schedule' },
      { status: 500 }
    );
  }
}
