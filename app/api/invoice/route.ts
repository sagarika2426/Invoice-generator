import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '../../../lib/mongoose';
import Invoice from '../../../models/invoice';


export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const body = await req.json();
      console.log("Received in API:", body);
 // Parse payload
    const invoice = new Invoice(body);
    await invoice.save();

    return NextResponse.json({ success: true, data: invoice }, { status: 201 });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
