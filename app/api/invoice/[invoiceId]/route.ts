import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '../../../../lib/mongoose';
import Invoice from '../../../../models/invoice';

export async function GET(
  req: NextRequest,
  context: { params: { invoiceId: string } }
) {
  const { invoiceId } =  context.params;

  try {
    await connectToDB();

    const invoice = await Invoice.findOne({ invoiceId });
    if (!invoice) {
      return NextResponse.json({ success: false, error: 'Invoice not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: invoice }, { status: 200 });
  } catch (error) {
    console.error('GET by ID Error:', error);
    return NextResponse.json({ success: false, error: 'Error retrieving invoice' }, { status: 500 });
  }
}
