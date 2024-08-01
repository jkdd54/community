import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received body:', body);
    const { proof } = body;
    const response = await fetch(
      'https://developer.worldcoin.org/api/v1/verify/app_staging_129259332fd6f93d4fabaadcc5e4ff9d',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...proof, action: "test" }),
      }
    );

    if (response.ok) {
      const { verified } = await response.json();
      console.log('API verification response:', verified);
      return NextResponse.json({ verified });
    } else {
      const { code, detail } = await response.json();
      console.error('API verification error:', { code, detail });
      return NextResponse.json({ error: `Error Code ${code}: ${detail}` }, { status: 400 });
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
