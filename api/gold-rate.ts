// Prevent Next.js from caching this route — gold rates need to be fresh.
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const response = await fetch(
      "https://api.goldprice.dev/v1/carat?currency=INR",
      { cache: "no-store" }
    );

    if (!response.ok) {
      return Response.json(
        { status: "error", message: "Failed to fetch gold rate" },
        { status: response.status }
      );
    }

    const data = await response.json();

    const gold24k = Number(data.price_gram_24k);
    const gold22k = Number(data.price_gram_22k);

    if (!Number.isFinite(gold24k) || !Number.isFinite(gold22k)) {
      console.error("Unexpected gold API shape:", data);
      return Response.json(
        { status: "error", message: "Unexpected data from gold rate provider" },
        { status: 502 }
      );
    }

    return Response.json({
      status: "success",
      currency: "INR",
      metals: { gold24k, gold22k },
    });
  } catch (error) {
    console.error("Gold API error:", error);
    return Response.json(
      { status: "error", message: "Gold rate temporarily unavailable" },
      { status: 500 }
    );
  }
}