import { NextRequest, NextResponse } from 'next/server';

const MIDTRANS_URL = process.env.MIDTRANS_IS_PRODUCTION === 'true'
  ? 'https://app.midtrans.com/snap/v1/transactions'
  : 'https://app.sandbox.midtrans.com/snap/v1/transactions';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const orderId = `PIXEL-${Date.now()}`;

    const payload = {
      transaction_details: {
        order_id: orderId,
        gross_amount: body.total
      },
      customer_details: {
        first_name: body.name,
        email: body.email,
        phone: body.phone
      },
      item_details: body.items.map((item: { id: string; name: string; price: number }) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1
      })),
      custom_field1: body.projectDescription
    };

    const serverKey = process.env.MIDTRANS_SERVER_KEY;
    if (!serverKey) {
      return NextResponse.json({
        order_id: orderId,
        message: 'MIDTRANS_SERVER_KEY missing. Returning local simulation.'
      });
    }

    const auth = Buffer.from(`${serverKey}:`).toString('base64');

    const midtransResponse = await fetch(MIDTRANS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`
      },
      body: JSON.stringify(payload)
    });

    const data = await midtransResponse.json();

    if (!midtransResponse.ok) {
      return NextResponse.json({ order_id: orderId, error: data }, { status: 400 });
    }

    return NextResponse.json({
      order_id: orderId,
      token: data.token,
      redirect_url: data.redirect_url
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create transaction', detail: String(error) }, { status: 500 });
  }
}
