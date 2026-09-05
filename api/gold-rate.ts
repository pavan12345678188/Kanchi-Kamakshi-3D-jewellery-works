export default async function handler() {
  try {
    const apiKey = process.env.METALS_API_KEY;

    if (!apiKey) {
      return Response.json(
        {
          status: "error",
          message: "METALS_API_KEY is missing",
        },
        { status: 500 }
      );
    }

    const url =
      `https://api.metals.dev/v1/latest` +
      `?api_key=${apiKey}` +
      `&currency=INR` +
      `&unit=g`;

    const response = await fetch(url);

    const data = await response.json();

    console.log("Metals.Dev response:", data);

    if (!response.ok) {
      return Response.json(
        {
          status: "error",
          message: "Metals.Dev request failed",
          details: data,
        },
        { status: response.status }
      );
    }

    return Response.json(data);
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