
import connectDB from '@/config/mongodb';
import Faq from '@/models/fak.model';
import { NextRequest, NextResponse } from 'next/server';

// GET all FAQs
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const faqs = await Faq.find().sort({ priority: 1, createdAt: -1 });

    return NextResponse.json(
      { success: true, data: faqs },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// CREATE a new FAQ
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { title, contents, priority, status } = body;

    if (!title || !contents || !Array.isArray(contents) || contents.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Title and at least one content item are required' },
        { status: 400 }
      );
    }

    const faq = new Faq({
      title,
      contents,
      priority: priority || 10,
      status: status !== undefined ? status : true,
    });

    await faq.save();

    return NextResponse.json(
      { success: true, data: faq },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
