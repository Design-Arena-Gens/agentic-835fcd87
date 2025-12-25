import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { topic, tone, contentType } = await request.json();

    // Get API key from environment or localStorage (passed in headers)
    const apiKey = process.env.OPENAI_API_KEY || request.headers.get('x-openai-key');

    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 400 }
      );
    }

    const prompts = {
      tip: `Write a professional LinkedIn post sharing 3-5 actionable tips about ${topic}. Use a ${tone} tone. Include relevant hashtags. Keep it under 300 words.`,
      story: `Write a compelling personal story for LinkedIn about ${topic}. Use a ${tone} tone. Make it relatable and inspiring. Include relevant hashtags. Keep it under 300 words.`,
      insight: `Write an insightful LinkedIn post about industry trends related to ${topic}. Use a ${tone} tone. Provide unique perspective. Include relevant hashtags. Keep it under 300 words.`,
      question: `Write an engaging LinkedIn post that asks a thought-provoking question about ${topic}. Use a ${tone} tone. Encourage discussion. Include relevant hashtags. Keep it under 200 words.`,
      list: `Write a LinkedIn post with a numbered list (5-7 items) about ${topic}. Use a ${tone} tone. Make each point concise and valuable. Include relevant hashtags. Keep it under 300 words.`,
      announcement: `Write a professional LinkedIn announcement post about ${topic}. Use a ${tone} tone. Make it exciting and clear. Include relevant hashtags. Keep it under 250 words.`,
    };

    const prompt = prompts[contentType as keyof typeof prompts] || prompts.tip;

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a LinkedIn content expert who creates engaging, professional posts that drive engagement and build personal brands.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.8,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate content');
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}
