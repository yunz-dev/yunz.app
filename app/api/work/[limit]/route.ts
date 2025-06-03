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

    // Get current date in DD/MM/YYYY format
    const currentDate = new Date().toLocaleDateString('en-GB');
    
    // Filter out past shifts
    const futureItems = workItems.filter(item => {
      // Parse DD/MM/YYYY format correctly
      const [day, month, year] = item.date_str.split('/').map(Number);
      const itemDate = new Date(year, month - 1, day);
      const now = new Date();
      return itemDate >= now;
    });
    
    // Apply limit to filtered items
    const items = futureItems.slice(0, limit);
    return NextResponse.json({ items });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
