import Stripe from 'stripe'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {apiVersion: "2023-08-16"})
    
    const stripeResponse = await stripe.prices.list()
    const plans = stripeResponse.data;

    return NextResponse.json(plans);
}