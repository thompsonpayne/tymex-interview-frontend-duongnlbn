import { NextResponse } from 'next/server';
import data from '../../../public/db.json';

export async function GET() {
  try {
    return NextResponse.json({ data: data.products });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
}