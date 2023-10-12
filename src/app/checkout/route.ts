import { NextResponse } from "next/server";
import Stripe from "stripe";
    
export async function POST(request: Request) {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
		apiVersion: "2023-08-16",
	});
    
	const { planId } = await request.json();
     
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price: planId,
				quantity: 1,
			},
		],
		mode: "payment",
		success_url: "http://localhost:3000/success",
		cancel_url: "http://localhost:3000/cancel",
	});
	return NextResponse.json(session.url);
}