import { NextResponse } from 'next/server';
import images from './schema.json';

/**
 * POST /api/tools/image-generator
 * Returns an array of images defined by the schema.
 */
export async function POST() {
  return NextResponse.json(images);
}