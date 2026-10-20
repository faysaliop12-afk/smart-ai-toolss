import { NextResponse } from "next/server";
import { getProduct } from "@/lib/products";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.slug !== "string") {
    return NextResponse.json(
      { error: "Product slug is required." },
      { status: 400 }
    );
  }

  const product = getProduct(body.slug);

  if (!product) {
    return NextResponse.json(
      { error: "Product not found." },
      { status: 404 }
    );
  }

  return NextResponse.json({
    checkoutUrl: product.checkoutUrl,
  });
}
