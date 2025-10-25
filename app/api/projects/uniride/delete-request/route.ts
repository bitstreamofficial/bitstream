import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../../lib/db';

type Body = {
  email?: string;
  name?: string;
  userId?: string;
  reason?: string;
};

export async function POST(request: Request) {
  try {
    const body: Body = await request.json();

    if (!body?.email || typeof body.email !== 'string') {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    // basic email check
    if (!body.email.includes('@')) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const payload = {
      email: body.email,
      name: body.name || null,
      userId: body.userId || null,
      reason: body.reason || null,
      createdAt: new Date(),
      source: 'uniride-account-deletion',
    };

    try {
      const { db } = await connectToDatabase();
      const coll = db.collection('account_deletion_requests');
      await coll.insertOne(payload as any);
      return NextResponse.json(
        { message: 'Request received and stored.' },
        { status: 201 }
      );
    } catch (dbErr) {
      // If DB is not configured, log and accept the request so user can proceed
      // This avoids blocking users when environment isn't set up in dev.
      // Log the payload so maintainers can handle it manually.
      // eslint-disable-next-line no-console
      console.error(
        'Account deletion request received but DB failed:',
        dbErr,
        payload
      );
      return NextResponse.json(
        { message: 'Request received (not stored: DB unavailable).' },
        { status: 202 }
      );
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error in account deletion route:', err);
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }
}
