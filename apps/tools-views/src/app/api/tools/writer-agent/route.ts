import { NextResponse } from 'next/server';
import { writerAgent } from '../../../../lib/exa';

/**
 * POST /api/tools/writer-agent
 * Receives a JSON body with a `prompt` field and returns a generated paragraph.
 */
export async function POST(request: Request) {
  const { prompt } = await request.json();
  const result = await writerAgent(prompt);
  return NextResponse.json(result?.data);
}