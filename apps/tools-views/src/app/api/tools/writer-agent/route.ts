import { NextResponse } from 'next/server';
import schema from './schema.json';

/**
 * POST /api/tools/writing-agent
 * Returns block content based on the JSON schema file.
 */
export async function POST() {
  return NextResponse.json(schema);
}