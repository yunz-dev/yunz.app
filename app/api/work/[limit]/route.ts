import { NextResponse } from 'next/server';
import { workItems } from '../../../lib/work-data';

export async function GET(
  request: Request,
  { params }: { params: { limit: string } }
) {
  try {
    const limit = parseInt(params.limit);
    
    if (isNaN(limit) || limit < 1 || limit > 100) {
      return NextResponse.json(
        { error: 'Limit must be a number between 1 and 100' },
        { status: 400 }
      );
    }

    const items = workItems.slice(0, limit);
    return NextResponse.json({ items });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
