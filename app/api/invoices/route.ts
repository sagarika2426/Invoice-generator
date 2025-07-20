import { NextResponse } from "next/server";
import connectToDB from "../../../lib/mongoose";
import Invoice from "../../../models/invoice";

export async function GET() {
  try {
    await connectToDB();

    const invoices = await Invoice.find();
    return NextResponse.json({ success: true, data: invoices });
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch invoices' }, { status: 500 });
  }
}