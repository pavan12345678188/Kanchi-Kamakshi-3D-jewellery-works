export default async function handler() {
  try {
    const response = await fetch(
      "https://api.goldprice.dev/v1/carat?currency=INR"
    );

    if (!response.ok) {
      return Response.json(
        {
          status: "error",
          message: "Failed to fetch gold rate",
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return Response.json({
      status: "success",
      currency: "INR",
      metals: {
        gold24k: Number(data.price_gram_24k),
        gold22k: Number(data.price_gram_22k),
      },
    });
  } catch (error) {
    console.error("Gold API error:", error);

    return Response.json(
      {
        status: "error",
        message: "Gold rate temporarily unavailable",
      },
      { status: 500 }
    );
  }
}