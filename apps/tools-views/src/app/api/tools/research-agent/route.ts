import { NextResponse } from 'next/server';
import { researchAgent } from '../../../../lib/exa';

export async function POST(request: Request) {
  const { prompt } = await request.json();
  const result = await researchAgent(prompt);
  return NextResponse.json(result?.data);
}